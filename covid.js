console.log("hello");

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};
var i;
var loop = document.getElementById("lop");
fetch("https://api.covid19api.com/summary", requestOptions)
  .then(response => response.json())
  .then(result => { 
      for (var i=1;i<186;i++) {
       loop.innerHTML += '<div class="card" style="float: left;"><div class="card-body"><h5 class="card-title">'+result.Countries[i].Country+'</h5><p class="card-text">'+'Date : '+result.Countries[i].Date+'</br>'+'NewConfirmed : '+result.Countries[i].NewConfirmed+'</br>'+'NewDeaths : '+result.Countries[i].NewDeaths+'</br>'+'NewRecovered : '+result.Countries[i].NewRecovered+'</br>'+'TotalConfirmed : '+result.Countries[i].TotalConfirmed+'</br>'+'TotalDeaths : '+result.Countries[i].TotalDeaths+'</br>'+'TotalRecovered : '+result.Countries[i].TotalRecovered+'</p></div></div>';
} })
  .catch(error => console.log('error', error));
