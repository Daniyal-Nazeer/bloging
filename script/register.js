import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { auth } from "./config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { db } from "./config.js";

const fName = document.querySelector('#firstName');
const lName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const form = document.querySelector('#form');



form.addEventListener('submit', async (event) => {
    event.preventDefault();

    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then(async (userCredential) => {
            const user = userCredential.user;
            alert('Registered Successfully');

            
            try {
                const docRef = await addDoc(collection(db, "users"), {
                    firstName: fName.value,
                    lastName: lName.value,
                    email: email.value,
                    uid: user.uid,
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});
