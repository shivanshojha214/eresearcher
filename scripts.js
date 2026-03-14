const form = document.getElementById("researchForm");

form.addEventListener("submit", e => {

e.preventDefault();

const data = new FormData(form);

fetch("YOUR_WEB_APP_URL",{

method:"POST",

body:JSON.stringify(Object.fromEntries(data))

})

.then(res=>{

document.getElementById("responseMsg").innerText="Request Submitted Successfully";

form.reset();

});

});