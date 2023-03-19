const loadProduct = () => {
    fetch("product.json")
        .then((response) => response.json())
        .then((data) => displayProduct(data));
};

const displayProduct = (data) => {
    // console.log(data[0].image)
    const cards = document.getElementById("cards");
    data.forEach((product) => {
        const isBookmarked = checkBookmark(product.id)
        const card = document.createElement("div");
        card.classList.add("card", "m-2");
        // const isBookmarked = checkBookmark(product.id);
        // console.log(isBookmarked);

        card.innerHTML = `
                <div class="bookmark-icon">

                <i onclick="${isBookmarked
                ? `handleRemoveBookmark('${product.id}')`
                : `handleBookmark('${product.name}','${product.id}','${product.price}')`
            }" 
                 class="${isBookmarked ? "fa-solid fa-bookmark" : "fa-regular fa-bookmark"
            }"></i>
              </div>
              <div class="product-img-container">
                <img
                  class="product-img"
                  src=${product.image}
                  alt=""
                />
              </div>
              <h3>${product.name}</h3>
              <p>The Widget 3000 is the latest and greatest in widget</p>
              <div class="priceAndButtons">
                <h2 class="text-primary">$${product.price}</h2>
                <button class="btn btn-primary">Buy Now</button>
              </div>
                `;
        cards.appendChild(card);
    });
};

const handleBookmark = (id, name, price) => {
    const bookmark = [];
    const product = { id, name, price }
    const previousBookMark = JSON.parse(localStorage.getItem('bookmark'));
    if (previousBookMark) {
        const isBookmarked = previousBookMark.find(item => item.id == id);
        if (isBookmarked) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Item is already added!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        } else {
            bookmark.push(...previousBookMark, product);
            localStorage.setItem('bookmark', JSON.stringify(bookmark));
        }
    } else {
        bookmark.push(product);
        localStorage.setItem('bookmark', JSON.stringify(bookmark));
    }
}

const handleRemoveBookmark = (id) => {
    const previousBookMark = JSON.parse(localStorage.getItem('bookmark'));
    const newBookmark = previousBookMark.filter(item => item.id != id);
    localStorage.setItem('bookmark', JSON.stringify(newBookmark));
}

const checkBookmark = (id)=>{
    const previousBookMark = JSON.parse(localStorage.getItem('bookmark'));
    const isCheck = previousBookMark.find(item => item.id == id);
    if(isCheck){
        return true;
    }else{
        return false;
    }
}