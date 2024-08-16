import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";

const email = document.querySelector('#email');
const password = document.querySelector('#password');


form.addEventListener('submit', (event) => {

    event.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            window.location = "index.html";

        })
        .catch((error) => {

            const errorMessage = error.message;
            console.log(errorMessage);

        });


});