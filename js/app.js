fetch(`https://api.meteo.lt/v1/places`)
.then ((response)=>data=response.json())
.then((data)=>{
    for (let place of data){ 
      let option = document.createElement('option')
      option.textContent = place.name
      document.querySelector('datalist').appendChild(option)

      console.log(place.name) 
    }
})