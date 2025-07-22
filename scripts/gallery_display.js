import  {galleryData} from "/scripts/data.js"
console.log("Gallery data is working");
console.log("Displaying gallery: ",galleryData);
const gallery=document.getElementById("gallery-data");
gallery.innerHTML="";
//store in local storage
localStorage.setItem("galleryData",JSON.stringify(galleryData));
galleryData.forEach((product)=>{
    //test if data is being displayed
    console.log("Gallery titles: ",product.title);
    gallery.innerHTML+=`
    <div class='card'>
    <h2>${product.title}</h2>
  <img src="${product.image}" alt="${product.title}" oneerror="this.onerror=null;this.src='default.png';"/>
  <p><strong>Inspiration:</strong> ${product.inspiration}</p>
   <p><strong>Artist:</strong> ${product.artist}</p>
    <p><strong>Category:</strong> ${product.category}</p>
    
    </div>`
})