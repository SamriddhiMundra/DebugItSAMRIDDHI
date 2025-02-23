async function fetchTrafficData(){
    try{
    let location = document.getElementById("location").value;
    if(!location){
        alert("Please enter a valid location.");
        return;
    }
    let URL = `https://nominatim.openstreetmap.org/search?q=${location}&format=json`;
    let response = await fetch(URL);
    let data = await response.json();
    if(data.length==0){
        alert("Location not found. Try another");
    }
    let lat = data[0].lat;
    let lon = data[0].lon;
    console.log("Coordinates:", lat, lon);

    const conjestion = Math.floor(Math.random()*100);
    const accidents = Math.floor(Math.random()*5);
    const roadClosures = (Math.random()>0.7?"Yes":"No");

    let trafficTable = document.getElementById("trafficTable");
    trafficTable.innerHTML=`
    <tr>
    <td>${location}</td>
    <td>${conjestion}</td>
    <td>${accidents}</td>
    <td>${roadClosures}</td>
    </tr>
    `
    speedometer(conjestion);

}
catch(error){
    console.error("Error in fetching data", error);
    document.getElementById("trafficTable").innerHTML=`<tr><td colspan = "4">Error fetching location</td></tr>`;

}
}
async function speedometer(conjestion){
    document.getElementById("conjestion-level").innerText=`${conjestion}`;
    document.querySelector(".speedometer").style.background=`conic-gradient(red 0% ${conjestion}%, green ${conjestion}% 100%)`;
    
}
document.getElementById("trafficDataBtn").addEventListener("click", fetchTrafficData);
