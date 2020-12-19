// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

//targetting the ids from the html file
const mapIframe = document.getElementById('map-iframe');
const mapSearch = document.getElementById('map-search');

//add an event listener for the search event
mapSearch.addEventListener('change', function(event){
    event.preventDefault();
    
    //targeting the user search input
    const userInput = event.target.value;

    searchCity(userInput, 'AU');
})
//generate a url from bing map
function generateBingMapUrl(lat, long){
    return "https://www.bing.com/maps/embed?h=400&w=500&cp=" + lat + "~" + long + "&lvl=11&typ=d&sty=r&src=SHELL&FORM=MBEDV8";
}
//function to search the city by city name and country code
function searchCity(city, countryCode){
    $.ajax({
        url: "http://dev.virtualearth.net/REST/v1/Locations?countryRegion=" + countryCode + "&locality=" + city  +  "&key=AgPiiFco85aej2H5Vtlt0at1zeGv5GUr0kNS2XFxK3pkfsbNF__TtYHPyoAMELWa",
        method: "GET"
    }).then(function(response){
        const coordinates = response.resourceSets[0].resources[0].point.coordinates;
        const latitude = coordinates[0];
        const longitude = coordinates[1];
        const bingMapUrl = generateBingMapUrl(latitude, longitude);
        mapIframe.setAttribute('src', bingMapUrl)
    })
}

