const addProduct = () => {
    const proudctName = document.getElementById('proudctName');
    const product = proudctName.value;
    const quantity = document.getElementById('quantity');
    const quantityProduct = quantity.value;
    addItems(product, quantityProduct);
    saveProductLocatStorage(product, quantityProduct);
    // document.getElementById('proudctName').value = '';
    // document.getElementById('quantity').value = '';

}

const addItems = (product, quantityProduct) => {
    const ul = document.getElementById('ulItems');
    const li = document.createElement('li');
    li.innerText = `
    ${product} : ${quantityProduct}
    `
    ul.appendChild(li);
}


//For Local Storage----->
const getStoredShopingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}
const saveProductLocatStorage = (product, quantity) => {
    const cart = getStoredShopingCart();
    cart[product] = quantity;
    const cartStringyFied = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringyFied)
}

const displayProductFromLocalStorage = ()=>{
    const saveCart = getStoredShopingCart(); 

    for(const product in saveCart){
        const quantity = saveCart[product];
        console.log(product,quantity)
        addItems(product,quantity)
    }
}
displayProductFromLocalStorage();