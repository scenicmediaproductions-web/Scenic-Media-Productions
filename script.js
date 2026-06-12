// ===============================
// SCENIC MEDIA PRODUCTIONS
// EMAILJS FORM
// ===============================

// Initialize EmailJS
emailjs.init({
    publicKey: "wrim2AtDcFINXHrxV",
});

// Wait for page to load
document.addEventListener("DOMContentLoaded", function () {

    // Select the form
    const form = document.getElementById("contact-form");

    // Check if form exists
    if (!form) {
        alert("Contact form not found!");
        return;
    }

    // Submit event
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.sendForm(
            "service_r79bool",
            "template_l5kp0he",
            this
        )
        .then(function () {

            <input type="hidden" name="website" value="Scenic Media Productions"></input>

            form.reset();

        })
        .catch(function (error) {

            console.log("EmailJS Error:", error);

            alert(
                "Failed to send inquiry.\n\n" +
                "Status: " + error.status +
                "\nMessage: " + error.text
            );

        });

    });

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

    reveals.forEach((element)=>{

        let windowHeight=window.innerHeight;
        let top=element.getBoundingClientRect().top;

        if(top < windowHeight-100){
            element.classList.add("active");
        }

    });

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        let windowHeight = window.innerHeight;
        let top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            element.classList.add("active");
        }

    });

});
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach((element)=>{

let windowHeight=window.innerHeight;
let top=element.getBoundingClientRect().top;

if(top<windowHeight-100){

element.classList.add("active");

}

});

});