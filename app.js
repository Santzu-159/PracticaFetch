window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperatureDescription = document.querySelector(
        '.temperature-description'
        );
        let temperatureDegree = document.querySelector('.temperature-degree');
        let locationTimezone = document.querySelector('.location-timezone');


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            long=position.coords.longitude;
            lat=position.coords.latitude;

            const api =`https://api.darksky.net/forecast/ae2c920ac0a6cabea465422f287d1953/${lat},${long}`;

            fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
            const{temperatire,summary,icon}=data.currently;
            //Set DOM Elements from the API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;
            //Set Icon
            setIcons(icon,document.querySelector(".icon"))
            });
        });
    
    }

    function setIcons(icon,iconID){

        const skycons = new Skycons({color:"white"});
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        skycons.play();
        return skycons.ser(iconID,Skycons[currentIcon]);
    }
});