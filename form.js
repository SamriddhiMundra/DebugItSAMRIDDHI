let submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    let issueType = document.querySelector("#issue-type").value;
    let location = document.querySelector("#location").value;
    let description = document.querySelector("#des").value;
    if(issueType && location && description){
        console.log("Traffic Issue Reported:");
        console.log("Issue:", issueType);
        console.log("Location:", location);
        console.log("Description:", description);
        document.getElementById("confirmation-msg").style.display="block";
        document.getElementById("traffic-form").reset();
    }
    else{
        alert("Please fill all required fields before submitting");
    }
})