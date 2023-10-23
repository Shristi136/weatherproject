const cityName = document.getElementById("cityName");
const submitbtn= document.getElementById("submitbtn");
const city_name =document.getElementById("city_name");
const temp =document.getElementById("temp_real");
const temp_status=document.getElementById("temp_status");
const data_hide=document.querySelector(".middle_layer");
const day =document.getElementById("day");
const getInfo= async(event)=>{
    event.preventDefault();
    let cityvalue= cityName.value;
    if(cityvalue===""){
        city_name.innerText=`Please right the City name before search`;
        data_hide.classList.add("data_hide");
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&units=metric&appid=02b180c93e128797673ed56726b1c279`
        const response= await fetch(url);    //fetch the url here
        const  Data= await response.json(); //convert in json data
        const arrData =[Data];             //convert the json data in array

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;

        // mood of weather
         const tempMood = arrData[0].weather[0].main;
         // condition to check the mood of weather 
         if(tempMood== "Clear"){
            temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#FBC202;'></i>";
         }
         else if(tempMood=="Clouds"){
            temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color:#8cc5f5;'></i>"
         }
         else if(tempMood=="Rain"){
            temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#a4b0be;'></i>"
         }
         else if(tempMood=="Haze"){
            temp_status.innerHTML="<i class='fa-solid fa-smog' style='color:#507ca1;'></i>"
         }
         else{
            temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#FBC202;'></i>"
         }

         data_hide.classList.remove("data_hide");
        }
        catch{
            city_name.innerHTML=`Please Enter the correct city name`;
            data_hide.classList.add("data_hide");
        }
    }

    const getcurrentday =()=>{
        let weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuseday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        let currtime =new Date();
        let days =weekday[currtime.getDay()];

        day.innerText =days;
    }
    getcurrentday();
}

submitbtn.addEventListener("click",getInfo)