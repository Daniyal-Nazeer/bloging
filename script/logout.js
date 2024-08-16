import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

import { auth } from "./config.js";


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);

    } else {

        window.location = "login.html";
    }
});

const userLogout = document.querySelector('#user-logout');

userLogout.addEventListener('click', () => {

    signOut(auth)
        .then(() => {
            window.location = "login.html";
        })
        .catch((error) => {
            console.log(error);
        });

});



