function sendmail(){

    var params = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById('message').value
    };


var sentLoader=document.getElementById('sentLoader').classList;
sentLoader.remove("d-none");

const serviceID ="service_tlqlbpu";
const templateID="template_lxcyhw7";
emailjs.send(serviceID,templateID,params)
.then((res) => {
    sentLoader.add("d-none");
        console.log(res);
        alert("your message sent sucessfully");
})
.catch((err) => console.log(err));
}