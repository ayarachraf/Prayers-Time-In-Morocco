let params = {
    country: "MAR",
    city: "Rabat",

}

axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params : params
    
  })
  .then(function (response) {
    let data = response.data;
    document.getElementById("IDSobh").innerHTML = `${data.data.timings.Fajr}`
    document.getElementById("IDDohr").innerHTML = `${data.data.timings.Dhuhr}`
    document.getElementById("IDAsr").innerHTML = `${data.data.timings.Asr}`
    document.getElementById("IDMaghrib").innerHTML = `${data.data.timings.Maghrib}`
    document.getElementById("IDIsha").innerHTML = `${data.data.timings.Isha}`
    document.getElementById("h3").innerHTML = ` <h3> ${data.data.date.readable} </h3>`
    
  })
  .catch(function (error) {
    console.log(error);
  })
  
  document.getElementById("H1").innerHTML = "Rabat";


let selectVal =  document.getElementById("sec")

 selectVal.addEventListener("change" , function(){
    
    get(selectVal.value)
    getElementById("H1").innerHTML = docuemnt.getElementById("sec").value
    
 })
 let get = function(cityName){
    
     document.getElementById("H1").innerHTML = cityName;
    let params = {
        country: "MAR",
        city: cityName,
    
    }
    
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params : params
        
      })
      .then(function (response) {
        let data = response.data;
        document.getElementById("IDSobh").innerHTML = `${data.data.timings.Fajr}`
        document.getElementById("IDDohr").innerHTML = `${data.data.timings.Dhuhr}`
        document.getElementById("IDAsr").innerHTML = `${data.data.timings.Asr}`
        document.getElementById("IDMaghrib").innerHTML = `${data.data.timings.Maghrib}`
        document.getElementById("IDIsha").innerHTML = `${data.data.timings.Isha}`
        document.getElementById("h3").innerHTML = ` <h3> ${data.data.date.readable} </h3>`
        
      })
      .catch(function (error) {
        console.log(error);
      })
      
      

  }


 
  