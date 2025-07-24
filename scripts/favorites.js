//load data from favorites localStorage
const favoritesData=JSON.parse(localStorage.getItem("favorites"))||[];
console.log("Favorites data: ",favoritesData);
const favorites=document.getElementById("favorites");
favorites.innerHTML="";
favoritesData.forEach((product)=>{
    favorites.innerHTML+=`
<div class='favorite-items' data-id="${product.id}">
<h2>${product.title}</h2>
<img src="${product.image}"/>
<p><strong>Inspiration: </strong>${product.inspiration}</p>
<p><strong>Artist: </strong>${product.artist}</p>
<p><strong>Category: </strong>${product.category}</p>
    <button class="delete-btn" id="${product.id}">DELETE</button>
</div>

`
})
favorites.addEventListener("click",(e)=>{
    if(e.target.classList.contains("delete-btn")){
        const productId=parseInt(e.target.id);
        const itemToRemove=e.target.closest(`.favorite-items[data-id="${productId}"`);
        console.log("Item to remove: ",itemToRemove);
        if(itemToRemove){
            itemToRemove.remove();
            alert("Item deleted");
        }
    }
})