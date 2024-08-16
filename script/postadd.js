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

        <div data-id="${index}" class="card bg-base-100 w-[100%] mt-9 shadow-xl">
            <div class="card-body">
              <h2 class="card-title">${item.postTitle}</h2>
              <p>
                ${item.postDescription}
              </p>
              <div class="flex justify-start gap-9">
                <button class="deleteBtn text-[red]">delete</button>
                <button class="editBtn text-[red]">edit</button>
              </div>
            </div>


            </div>
                            
    `).join('')}

    `
}

document.querySelectorAll('.deleteBtn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const index = e.target.closest('tr').getAttribute('data-id');
        deleteItem(index);
    });
});



const deleteItem = (index) => {
    postArray.splice(index, 1);
    rendardPosts();
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {

        const docRef = await addDoc(collection(db, "posts"), {
            postTitle: postTitle.value, 
            postDescription: postDescription.value, 
            
        });

        alert('Post added successfully');
        console.log("Document written with ID: ", docRef.id);
        
    }
        

     catch (e) {
        console.error("Error adding document: ", e);
        alert('Error adding post. Please try again.');
    }



    const deleteItem = (index) => {
        postArray.splice(index, 1);
        rendardPosts();
    }

});


