const apiKey="9d29e8d533094bd5bb252700261906";

async function getWeather(){

let location=document.getElementById(
"locationInput"
).value;

if(location===""){
alert("Enter city name");
return;
}

let url=
`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

try{

const response=
await fetch(url);

const data=
await response.json();

document.getElementById(
"weatherCard"
).style.display="block";

document.getElementById(
"city"
).innerHTML=
`${data.location.name},
${data.location.country}`;

document.getElementById(
"temperature"
).innerHTML=
data.current.temp_c;

document.getElementById(
"condition"
).innerHTML=
data.current.condition.text;

document.getElementById(
"humidity"
).innerHTML=
data.current.humidity+"%";

document.getElementById(
"wind"
).innerHTML=
data.current.wind_kph+" km/h";

document.getElementById(
"feels"
).innerHTML=
data.current.feelslike_c+"°";

document.getElementById(
"weatherIcon"
).src=
"https:"+data.current.condition.icon;

}

catch(error){

alert(
"Location not found"
);

console.log(error);

}

}