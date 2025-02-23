function navigateToPage(url){
    window.location.href = url;
}
let live_traffic = document.querySelector("#live-traf");
live_traffic.addEventListener("click", ()=>{
    navigateToPage("map.html");
} );
let report_issue = document.querySelector("#issue");
report_issue.addEventListener("click", ()=>{
    navigateToPage("form.html");
})
let route_op = document.querySelector("#route-op");
route_op.addEventListener("click", ()=>{
    navigateToPage("route-optimisation.html");
})
let analytics = document.querySelector("#analytic");
analytics.addEventListener("click", ()=>{
    navigateToPage("analytics.html");
})
let about = document.getElementById("about");
about.addEventListener("click", ()=>{
    navigateToPage("about.html");
})
let contact = document.getElementById("contact");
contact.addEventListener("click", ()=>{
    navigateToPage("contact.html");
})