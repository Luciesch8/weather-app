function darkMode(){
    document.body.classList.toggle("dark-theme")
}

document.getElementById("toggleDarkMode").addEventListener("click", darkMode)




let apiCall = function(city) {
    const APIKEY = "*************************";
    let url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr`;

fetch(url).then((response) => 
    response.json().then ((data)=> {
        document.querySelector('.daily').innerHTML = "";
        document.querySelector('.hourly').innerHTML = "";
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + ' C°';
        document.querySelector('.icon').src = "http://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png";
        document.querySelector('.description').innerHTML = data.weather[0].description;
        document.querySelector('.humidity').innerHTML = 'Humidité: ' + Math.round(data.main.humidity) + '%';
        document.querySelector('.wind').innerHTML = 'Vent: ' + Math.round(data.wind.speed) + ' km/h';
        document.querySelector('.info').innerHTML = 'La temperature se situe entre ' + Math.round(data.main.temp_min) + '° et ' + Math.round(data.main.temp_max) + '°';


        let latitude = data.coord.lat;
        let longitude = data.coord.lon;
        apiCallTwo(longitude, latitude);

    })
    ).catch(err => console.log('Erreur : ' + err))

};







let apiCallTwo = function(longitude, latitude) {
    const APIKEY ="2094eed58c3c02527e412af03e97bbee"
    let url =`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&appid=${APIKEY}&units=metric&lang=fr`
    
    fetch(url).then((response)=> 
    response.json().then((data) =>{


    function addHoursToDate(date, hour){
        let res = new Date();
        res.setHours(res.getHours() + hour);
        return res;
    }
    let tempHours = new Date();



    for (let key = 0; key < data.hourly.length; key++) {

    let u = "http://openweathermap.org/img/wn/" + data.hourly[key].weather[0].icon + ".png";
    let h = addHoursToDate(tempHours, key).getHours();
    
    let template = `
     <h3> ${h}h </h3>
     <img src="${u}" />
     <p> ${Math.round(data.hourly[key].temp)}°C </p>
     `

    let element = document.createElement('div');
     element.innerHTML = template
     let parent = document.querySelector('.hourly');
     parent.classList.add('cardOne');
     parent.appendChild(element);

     if (key >= 40){
         break;
    }}



    function addDaysToDate(date, days){
        let res = new Date();
        res.setDate(res.getDate() + days);
        return res;
    }
    let tempDate = new Date();
    let options = {weekday: 'long'};



    for (let key = 0; key < data.daily.length; key++) {
    let u = "http://openweathermap.org/img/wn/" + data.daily[key].weather[0].icon + ".png";
    let d = new Intl.DateTimeFormat('fr-FR', options).format(addDaysToDate(tempDate,key));

    let template = `
    <div>
    <h3> ${d} </h3>
    <img src="${u}"/> 
    <p> Min ${Math.round(data.daily[key].temp.min)}°C Max ${Math.round(data.daily[key].temp.max)}°C </p>
    </div>
    `

    let element = document.createElement('div');
    element.innerHTML = template
    let parent = document.querySelector('.daily');
    parent.classList.add('card');
    parent.appendChild(element);

    if (key >= 7){
        break;
    }}}).catch(err => console.log('Erreur : ' + err))
    )



    let urlpol = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${APIKEY}&units=metric&lang=fr`


    fetch(urlpol).then((response)=> 
    response.json().then((datapol) =>{

    function testPollution(a){
        let result;
        if (a == 1) {
            result = "Bonne";
        }  else if (a == 2) {
            result = "Passable";
        }  else if (a == 3) {
            result = "Moderée";
        }  else if (a == 4) {
            result = "Mauvaise";
        } else if (a == 5) {
            result = "Tres mauvaise";
        }
        return result;
    }

   document.querySelector('.pollution').innerHTML = "Qualité de l'air : " + testPollution(`${datapol.list[0].main.aqi}`);
    }).catch(err => console.log('Erreur : ' + err)))
}






function success(pos){  

    let crd = pos.coords;
    let latitude = crd.latitude;
    let longitude = crd.longitude;
    
    let urlgeolocation = `https://geo.api.gouv.fr/communes?lat=${latitude}&lon=${longitude}&fields=code,nom,codesPostaux,surface,population,centre,contour`;     // trouve la ville par rapport aux coordonnée


    fetch(urlgeolocation).then((response) => 
        response.json().then((datageoloc) => {
            //console.log(datageoloc);
            document.querySelector(`.city`).innerHTML = datageoloc[0].nom ; 

            let c = datageoloc[0].nom;
            apiCall(c)

        }).catch(err => console.log('Erreur : ' + err)));
}
navigator.geolocation.getCurrentPosition(success)




document.querySelector('form').addEventListener('submit' , function(e){
    e.preventDefault()
    let city = document.querySelector('#inputCity').value;

    apiCall(city);
});