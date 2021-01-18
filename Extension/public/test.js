var isMorning;

document.getElementById("send-message").addEventListener("click", function (){


    var number = document.querySelector(".message").value;

    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if(!number.match(phoneno)){
      alert("Phone number is not valid. Please try again!");
      document.querySelector(".message").value = "";
    }else{

      if(!isMorning){
        m = "Activities:\
        1)Go on a drive\
        2)Watch a movie/tv show\
        3)Eat somewhere";
      }else{

    var m = "";

    if(document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("sun") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("sun")   ){
      m = "Activities:\
      1)Go to the park\
      2)Go joggging\
      3)Have a picnic with friends/family";
}else if(document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("snow") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("snow") ){
  m = "Activities:\
  1)Sledding\
  2)Build a snowman\
  3)Shovel snow =)";
}else if(  document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("clear") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("clear")    ){

  m = "Activities:\
  1)Go on a drive\
  2)Watch a movie/tv show\
  3)Eat somewhere";
}else if( document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("thunder") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("thunder") || document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("storm") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("storm")   ){
  m = "Activities:\
  1)Watch a movie/tv show\
  2)Go out to eat\
  3)Go to the mall";
}else if(  document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("rain") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("rain") || document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("shower") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("shower")  || document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("drizzle") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("drizzle")      ){
  m = "Activities:\
  1)Watch a movie/tv show\
  2)Go out to eat\
  3)Go to the mall";
}else if(document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("mist") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("mist") || document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("fog") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("fog")  ){
  m = "Activities:\
  1)Watch a movie/tv show\
  2)Go out to eat\
  3)Go to the mall";
}else if(document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("wind") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("wind") ){
  m = "Activities:\
  1)Watch a movie/tv show\
  2)Go out to eat\
  3)Fly a kite";
}else if(document.getElementsByTagName("p")[3].innerHTML.toLowerCase().includes("cloud") ||  document.getElementsByTagName("p")[4].innerHTML.toLowerCase().includes("cloud") ){

  m = "Activities:\
  1)Go to the park\
  2)Go joggging\
  3)Play soccer";
}else{
  m = "Activities:\
  1)Go on a drive\
  2)Watch a movie/tv show\
  3)Eat somewhere";
}


      }


 fetch(`https://sendmessaget.herokuapp.com/send-text/?recipient=${number}&textmessage=${m}`)
 

alert("Message sent successfully!")
 



 document.querySelector(".message").value = "";
    }
    });

    function makeFirstLetterCapital(description){
   
      return description.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    }

    function turnToF(temp){

      return (9/5) * (temp - 273.15) + 32;
    }

    function turnToC(temp){

      return temp - 273.15;
   }

function changeValue(data, zipcode, isMorning, city, state){
  if('name' in data){
   
   if(city != "" && state != ""){
  document.getElementsByTagName("p")[2].innerHTML = "Weather in " + makeFirstLetterCapital(city) +", " + state.toUpperCase();
   }else{
    document.getElementsByTagName("p")[2].innerHTML = "Weather in " + zipcode;
   }
  document.getElementsByTagName("p")[3].innerHTML =   Math.round(turnToF(data.main.temp)) + " °F/" + Math.round(turnToC(data.main.temp)) + " °C";
  document.getElementsByTagName("p")[4].innerHTML = makeFirstLetterCapital(data.weather[0].main);
  document.getElementsByTagName("p")[5].innerHTML =  makeFirstLetterCapital(data.weather[0].description);

  document.getElementsByTagName("p")[6].innerHTML =  "Feels Like: " + Math.round(turnToF(data.main.feels_like)) + " °F/" + Math.round(turnToC(data.main.feels_like)) + " °C";
  document.getElementsByTagName("p")[7].innerHTML =  "Humidity: " + data.main.humidity +"%";
  document.getElementsByTagName("p")[8].innerHTML =  "Wind Speed: " + data.wind.speed+"  mph";
  document.getElementsByTagName("p")[9].innerHTML =  "High: " + Math.round(turnToF(data.main.temp_max)) + " °F/" + Math.round(turnToC(data.main.temp_max)) + " °C";
  document.getElementsByTagName("p")[10].innerHTML =  "Low: " + Math.round(turnToF(data.main.temp_min)) + " °F/" + Math.round(turnToC(data.main.temp_min)) + " °C";
  
  document.querySelector(".sendMessage").style.display = 'block';
  document.querySelector(".message").style.display = 'block';



  }else{

  document.querySelector(".body").style = "background-image: url('default.jpg');";
  document.getElementById("descriptionOfWeather").style.border="5px solid white";
  if(city != "" && state != ""){
  document.getElementsByTagName("p")[2].innerHTML = "Weather is not available for " + city +", " + state;
   }else{
    document.getElementsByTagName("p")[2].innerHTML = "Weather is not available for " + zipcode;
   }
  document.getElementsByTagName("p")[3].innerHTML =  "";
  document.getElementsByTagName("p")[4].innerHTML = "";
  document.getElementsByTagName("p")[5].innerHTML =  "";

  document.getElementsByTagName("p")[6].innerHTML =  "";
  document.getElementsByTagName("p")[7].innerHTML =  "";
  document.getElementsByTagName("p")[8].innerHTML =  "";
  document.getElementsByTagName("p")[9].innerHTML =  "";
  document.getElementsByTagName("p")[10].innerHTML = "";
  document.querySelector(".sendMessage").style.display = 'none';
  document.querySelector(".message").style.display = 'none';
  }
      }

      function useZipcode(zipcode, city, state){


        var time;
        

     fetch(
          `https://cors-anywhere.herokuapp.com/http://api.worldweatheronline.com/premium/v1/tz.ashx?key=&q=${zipcode}&format=json`
          ).then((response) => response.json())
          .then(data => {
            
           
           if (  (data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3)  >=0 &&    data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3)  <= 6) ||   (data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3)  >=18 &&    data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3)  <= 24)          ){
             isMorning=false;
           }else{
              isMorning=true;
           }
     

        document.getElementById("descriptionOfWeather").style.border="5px solid white";
    
    fetch(
         `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=`
         ).then((response) => response.json())
         .then((data) => this.changeValue(data, zipcode, isMorning, city, state ));
          });

      }

      //document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("get-Weather").addEventListener("click",function (){


     
      var state = document.getElementById("state").value;
      var city = document.getElementById("city").value;
      var zipcode = document.getElementById("zipcode").value;


     document.getElementById("state").value = "";
     document.getElementById("city").value = "";
     document.getElementById("zipcode").value = ""; 

      if( (state == "" || city == "") && zipcode == ""){
        alert("One or more inputs are empty!");
      }else if(zipcode == "" && state.length != 2){
        document.getElementById("city").value = city;
        alert("State is not valid abbreviation!");
    }else{

        if(zipcode == ""){
      
fetch(`https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest//city-zips.json/${city}/${state}`) // https://cors-anywhere.herokuapp.com/https://example.com
.then((response) => response.json())
.then(data =>  {


if(data.zip_codes.length > 0){

           
 useZipcode(data.zip_codes[0], city, state)

}else{
  document.querySelector(".body").style = "background-image: url('default.jpg');";
  document.getElementById("descriptionOfWeather").style.border="5px solid white";
  if(city != "" && state != ""){
  document.getElementsByTagName("p")[2].innerHTML = "Weather is not available for " + city +", " + state;
   }else{
    document.getElementsByTagName("p")[2].innerHTML = "Weather is not available for " + zipcode;
   }
  document.getElementsByTagName("p")[3].innerHTML =  "";
  document.getElementsByTagName("p")[4].innerHTML = "";
  document.getElementsByTagName("p")[5].innerHTML =  "";

  document.getElementsByTagName("p")[6].innerHTML =  "";
  document.getElementsByTagName("p")[7].innerHTML =  "";
  document.getElementsByTagName("p")[8].innerHTML =  "";
  document.getElementsByTagName("p")[9].innerHTML =  "";
  document.getElementsByTagName("p")[10].innerHTML = "";
  document.querySelector(".sendMessage").style.display = 'none';
  document.querySelector(".message").style.display = 'none';

}
 
});
        }else{
          if(zipcode.length != 5 || !zipcode.match(/^\d{5}(-\d{4})?(?!-)$/)){
            if(zipcode.length == 0){
              alert('Zip code is empty!');
            }else{
            alert('Not a valid zip code! Please try again!');
            }
          }else{

          var time;
        

     fetch(
          `https://cors-anywhere.herokuapp.com/http://api.worldweatheronline.com/premium/v1/tz.ashx?key=&q=${zipcode}&format=json`
          ).then((response) => response.json())
          .then(data => {
            
            if("time_zone" in  data.data){
          

            if(data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3).charAt(0) == 0){
           
              if ( data.data.time_zone[0].localtime.charAt(1) <= 6 &&  data.data.time_zone[0].localtime.charAt(1) >= 0){
                isMorning=false;
           }else{
              isMorning=true;
           }

            }else{
           
           if ( (  data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3)  >=0  &&    data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3)  <= 6 ) ||   (data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3)  >=18 &&    data.data.time_zone[0].localtime.substring(data.data.time_zone[0].localtime.length-5,data.data.time_zone[0].localtime.length-3)  <= 24)          ){
             isMorning=false;
           }else{
              isMorning=true;
           }

          }

        


          document.getElementById("descriptionOfWeather").style.border="5px solid white";
         
          fetch(
               `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=`
               ).then((response) => response.json())
               .then((data) => changeValue(data, zipcode, isMorning, "", ""));
          }else{
           
            document.querySelector(".body").style = "background-image: url('default.jpg');";
            document.getElementById("descriptionOfWeather").style.border="5px solid white";
  if(city != "" && state != ""){
  document.getElementsByTagName("p")[2].innerHTML = "Weather is not available for " + city +", " + state;
   }else{
    document.getElementsByTagName("p")[2].innerHTML = "Weather is not available for " + zipcode;
   }
  document.getElementsByTagName("p")[3].innerHTML =  "";
  document.getElementsByTagName("p")[4].innerHTML = "";
  document.getElementsByTagName("p")[5].innerHTML =  "";

  document.getElementsByTagName("p")[6].innerHTML =  "";
  document.getElementsByTagName("p")[7].innerHTML =  "";
  document.getElementsByTagName("p")[8].innerHTML =  "";
  document.getElementsByTagName("p")[9].innerHTML =  "";
  document.getElementsByTagName("p")[10].innerHTML = "";

  document.querySelector(".sendMessage").style.display = 'none';
  document.querySelector(".message").style.display = 'none';

          }

          });
        
        
       
        }
        }
      }
      

      
      });

      
     
   
