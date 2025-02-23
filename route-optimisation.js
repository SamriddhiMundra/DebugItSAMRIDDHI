let getBestRoute = document.getElementById("routeBtn");
getBestRoute.addEventListener("click", findOptimisedRoute);
async function getCoordinates(place){
    let URL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(place)}`;
    try{
        let response = await fetch(URL);
        let data = await response.json();
        if(data.length>0){
            return{
                lat : parseFloat(data[0].lat),
                lon : parseFloat(data[0].lon)
            };
        }
        else{
            throw new Error(`Location not found: ${place}`);
        }
    }
    catch(error){
        alert(error.message);
        console.error(error);
    }
}
async function getOptimisedRoute(startCoords, endCoords){
    let osrmURL = `https://router.project-osrm.org/route/v1/driving/${startCoords.lon},${startCoords.lat};${endCoords.lon},${endCoords.lat}?overview=false&steps=true`;
    try{
        let response = await fetch(osrmURL);
        let data = await response.json();
    if(data.routes && data.routes.length>0){
        let route = data.routes[0];
        let distance = (route.distance / 1000).toFixed(2);
        let time = (route.duration / 60).toFixed(2);

        document.getElementById("routeInfo").innerHTML = `
        <h3>Route Details</h3>
        <p><b>Distance: </b>${distance} km</p>
        <p><b>Estimated Time: </b>${time} min</p>`
        ;
       document.getElementById("routeInfo").style.display = "block";
    }
    else{
        alert("Route not found");
    }
}
catch(error){
    alert(error.message);
    console.error(error);
}

}
async function findOptimisedRoute(){
    document.getElementById("fetchingData").style.display="block";
    let start = document.getElementById("startLoc").value;
    let end = document.getElementById("endLoc").value;
    if(!start || !end){
        alert("Please enter both locations");
        return;
    }
    try{
        let startCoords = await getCoordinates(start);
        let endCoords = await getCoordinates(end);
        if(startCoords && endCoords){
            await getOptimisedRoute(startCoords, endCoords);
        }
        document.getElementById("fetchingData").style.display="none";
    }
    catch(error){
        console.error("Error finding route:", error);
    }
}