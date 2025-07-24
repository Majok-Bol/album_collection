import { galleryData } from "/scripts/data.js"
const gallery = document.getElementById("gallery-data");
const loadMore=document.getElementById("loadMore");
gallery.innerHTML = "";
//add gallery to localstorage
localStorage.setItem("galleryCollection", JSON.stringify(galleryData));
//get the stored Data;
const storedGalleryData = JSON.parse(localStorage.getItem("galleryCollection"))||[];
console.log("Gallery stored data: ",storedGalleryData.length);
//display the first 3 products
let counter=3;
let currentIndex=0;
const slicedData=storedGalleryData.slice(currentIndex,counter);
console.log("First 3 products: ",slicedData);
//display them on the page
slicedData.forEach((product)=>{
gallery.innerHTML+=`
<div class='card'>
<h2>${product.title}</h2>
<img src="${product.image}"/>
<p>${product.inspiration}</p>
<p>${product.artist}</p>
<p>${product.category}</p>
</div>
`
});
let startIndex=3;
let endIndex=3;
//function to load more items dynamically on demand
function loadMoreGallery(){
    const end=startIndex+endIndex;
    const slicedData=storedGalleryData.slice(startIndex,startIndex+endIndex);
    console.log("Sliced data: ",slicedData);
    //update the counter
    startIndex+=endIndex;
}
//add event listenr to load more button
loadMore.addEventListener("click",loadMoreGallery);