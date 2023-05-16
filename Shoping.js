
// to display in UI form localStorage which is added by user before the use
const displayLocalStorageCart = () => {
    const cart = getCart();
    for (const name in cart) {
        displayProduct(name);
    }
}


const addItem = () => {
    const nameField = document.getElementById('product-name');
    const nameTakenFormInputField = nameField.value;

    // this is for if there is no value in input if user press the add Item btn then work the if function
    if (!nameTakenFormInputField) {
        return;
    }
    // add to local storage 
    displayProduct(nameTakenFormInputField);

    // add to local Storage
    addProductToCart(nameTakenFormInputField);
    nameField.value = '';
}


// to display in UI 
const displayProduct = name => {
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li);
}


// get Item form localStorage
const getCart = () => {
    const cart = localStorage.getItem('cart');  //checking is there any cart 
    let cartObj; // cause this value will change 
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {}
    }
    return cartObj;
}

// setItem in localStorage 
const addProductToCart = name => {
    const cart = getCart();

    /*     here is problem that is if same name product add then this quentuity   will not increase 
    cart[name] = 1; */

    // to add same name product 
    if (cart[name]) {
        cart[name] += 1;
    }
    else {
        cart[name] = 1;
    }

    // when set the value in localStorage this time Stringify that  
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);

}

//place order btn 
const placeOrder = () => {
    //  if press the place Order btn this fnc remove element form UI not form localStorage
    document.getElementById('products').textContent = '';

    // to remove form storage 
    localStorage.removeItem('cart');
}

displayLocalStorageCart();