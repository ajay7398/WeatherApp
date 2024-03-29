
document.querySelector('.search-button').addEventListener('click',function(){
    let text=document.querySelector('.search-bar').value;
    apihandle(text);
    
})


async function apihandle(text) {
    let api_url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=4238f3f4d4d20bf3cd0436c3abcf827c&units=metric`;
    try {
        let response = await fetch(api_url); // Fetch data from the API URL
        let data = await response.json(); // Parse the JSON response
console.log(data)
        let temp=Math.floor(data.main.temp)
        // Display the data in the console
        document.querySelector('.temp').innerHTML=`${temp}°C`;
        document.querySelector('.city').innerHTML=`${data.name}`;
        document.querySelector('.humidity').innerHTML=`${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML=`${data.wind.speed}km/hr`;
        let cloud=data.weather[0].main;
        
        let cloud_state=document.querySelector('.clear');
        if(cloud=='clear'){
            cloud_state.src='./images/clear.png';
        }
        if(cloud=='Clouds'){
            cloud_state.src='./images/clouds.png';
        }

        if(cloud=='snow'){
            cloud_state.src='./images/snow.png';
        }

        if(cloud=='mist'){
            cloud_state.src='./images/mist.png';
        }

        if(cloud=='drizzle'){
            cloud_state.src='./images/drizzle.png';
        }

        if(cloud=='rain'){
            cloud_state.src='./images/rain.png';
        }

    } catch (error) {
        console.log('Error fetching data:', error);
    }
}





async function getWeather(latitude, longitude) {
    const apiKey = '4238f3f4d4d20bf3cd0436c3abcf827c'; // Replace 'YOUR_API_KEY' with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(apiUrl); // Fetch data from the API URL
        let data = await response.json(); // Parse the JSON response
        let temp=Math.floor(data.main.temp)
        // Display the data in the console
        document.querySelector('.temp').innerHTML=`${temp}°C`;
        document.querySelector('.city').innerHTML=`${data.name}`;
        document.querySelector('.humidity').innerHTML=`${data.main.humidity}%`;
        document.querySelector('.wind').innerHTML=`${data.wind.speed}km/hr`;
        let cloud=data.weather[0].main;
        
        let cloud_state=document.querySelector('.clear');
        if(cloud=='clear'){
            cloud_state.src='./images/clear.png';
        }
        if(cloud=='Clouds'){
            cloud_state.src='./images/clouds.png';
        }

        if(cloud=='snow'){
            cloud_state.src='./images/snow.png';
        }

        if(cloud=='mist'){
            cloud_state.src='./images/mist.png';
        }

        if(cloud=='drizzle'){
            cloud_state.src='./images/drizzle.png';
        }

        if(cloud=='rain'){
            cloud_state.src='./images/rain.png';
        }

    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

// Function to get user's current location
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            getWeather(latitude, longitude);
        }, error => {
            console.log('Error getting current location:', error);
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

// Call the function to get current location and weather information
getCurrentLocation();