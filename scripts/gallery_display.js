import { galleryData } from "/scripts/data.js"
window.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery-data");
    const loadMore = document.getElementById("loadMore");
    gallery.innerHTML = "";
    //add gallery to localstorage
    localStorage.setItem("galleryCollection", JSON.stringify(galleryData));
    //get the stored Data;
    const storedGalleryData = JSON.parse(localStorage.getItem("galleryCollection")) || [];
    console.log("Gallery stored data: ", storedGalleryData.length);
    //display the first 3 products
    let counter = 3;
    let currentIndex = 0;
    const slicedData = storedGalleryData.slice(currentIndex, counter);
    console.log("First 3 products: ", slicedData);
    //display them on the page
    slicedData.forEach((product) => {
        gallery.innerHTML += `
<div class='card'>
<h2>${product.title}</h2>
<img src="${product.image}"/>
<p><strong>Inspiration: </strong>${product.inspiration}</p>
<p><strong>Artist: </strong>${product.artist}</p>
<p><strong>Category: </strong>${product.category}</p>
<button class="favorite-icon" id="${product.id}">&#9829;</button>
</div>
`
    });
    let startIndex = 3;
    let endIndex = 3;
    //function to load more items dynamically on demand
    function loadMoreGallery() {
        const end = startIndex + endIndex;
        const slicedData = storedGalleryData.slice(startIndex, startIndex + endIndex);
        console.log("Sliced data: ", slicedData);
        slicedData.forEach((product) => {
            //update the html data
            gallery.innerHTML += `
<div class='card'>
<h2>${product.title}</h2>
<img src="${product.image}"/>
<p><strong>Inspiration: </strong>${product.inspiration}</p>
<p><strong>Artist: </strong>${product.artist}</p>
<p><strong>Category: </strong>${product.category}</p>
<button class="favorite-icon" id="${product.id}">&#9829;</button>
</div>
`
        })

        //update the counter
        startIndex += endIndex;
        //disable loadmore button if no more items to load
        if (startIndex > storedGalleryData.length) {
            loadMore.disabled = true;
        }
    }
    //add event listenr to load more button
    loadMore.addEventListener("click", loadMoreGallery);
    //load items from local storage
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    console.log("Gallery fetched data: ", favorites);
    //add event listener to gallery div for event delegation
    gallery.addEventListener("click", (e) => {
        if (e.target.classList.contains("favorite-icon")) {
            const favoriteProductId = parseInt(e.target.id);
            console.log("Product id: ", favoriteProductId);
            //get products that match that id from gallery data
            const productMatched = galleryData.find((product) => product.id === favoriteProductId);
            console.log("Matched products", productMatched);
            if (productMatched) {
                //check for duplicates
                const duplicates = favorites.some((item) => item.id === productMatched.id);
                if (!duplicates) {
                    favorites.push(productMatched);
                    //add to local storage
                    localStorage.setItem("favorites", JSON.stringify(favorites));
                    alert('Added to favorites');

                }else{
                    alert("Already added to favorites list")
                }
            }else{
                alert("Product not found");
            }



        }
    })
})