var countryStateInfo = {
    USA: {
      California: {
        "Los Angeles": ["90001", "90002", "90003", "90004"],
        "San Diego": ["92093", "92101"],
      },
      Texas: {
        Dallas: ["75201", "75202"],
        Austin: ["73301", "73344"],
      },
    },
    Germany: {
      Bavaria: {
        Munich: ["80331", "80333", "80335", "80336"],
        Nuremberg: ["90402", "90403", "90404", "90405"],
      },
      Hessen: {
        Frankfurt: ["60306", "60308", "60309", "60310"],
        Surat: ["55246", "55247", "55248", "55249"],
      },
    },
    India: {
        Maharashtra: {
          "Pune": ["90001", "90002", "90003", "90004"],
          "Nasik": ["92093", "92101"],
        },
        Rajasthan: {
          Ajmer: ["75201", "75202"],
          Jaipur: ["73301", "73344"],
        },
      },
  };

  var country_arr= Object.keys(countryStateInfo)
  var x= document.getElementById("country_selector")
  for(let country of country_arr){
    
    var option= document.createElement("option")
    option.innerHTML=country
    option.value= country 
    x.appendChild(option)
  }

 function oncountrychange(){
    var country_value= x.value
    var state_arr= Object.keys(countryStateInfo[x.value] )
    var y= document.getElementById("state_selector")
    while (y.options.length > 1) {
        y.remove(y.options.length - 1);
    }
    
    for(let state of state_arr){
        var option= document.createElement("option")
        option.innerHTML=state
        option.value=state
        y.appendChild(option)

    }


 } 

 
  
