import { collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { db } from "./config.js";

const postTitle = document.querySelector('#post_title');
const postDescription = document.querySelector('#post_description');
const form = document.querySelector('#form');

let postArray = [];

async function getData() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    querySnapshot.forEach((doc) => {
    //    console.log(doc.data());
       postArray.push(doc.data());
    });
     console.log(postArray);
    rendardPosts();
  }
  
  getData();


  const rendardPost = document.querySelector('#rendardPost');

const rendardPosts = () => {

    rendardPost.innerHTML="";

    rendardPost.innerHTML+=`

    ${postArray.map((item, index) => `

        <div class="card bg-base-100 w-96 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">${item.postTitle}</h2>
              <p>
                ${item.postDescription}
              </p>
              
                <button class="deleteBtn">delete</button>
              
            </div>


            </div>
                            
    `).join('')}


     
    `
}

document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
       alert('dsd')
    });
});

const deleteItem = (index) => {
    postArray.splice(index, 1);
    rendardPosts();
}


