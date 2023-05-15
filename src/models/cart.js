export class Cart {
    product = null;
    quantity = 0;
}

export function increment(item) {
    item.quantity ++;
    document.getElementById("qty"+item.product.description).innerText = item.quantity;
    document.getElementById("total"+item.product.description).innerText = "$"+(item.product.price * item.quantity).toFixed(2);
    if (item.quantity > 0) {
        document.getElementById("dec"+item.product.description).disabled = false;
    }
    document.getElementById("sub-total").innerText = "$" + totalPrice();
}

export function decrement(item) {
    item.quantity --;
    document.getElementById("qty"+item.product.description).innerText = item.quantity;
    document.getElementById("total"+item.product.description).innerText = "$"+(item.product.price * item.quantity).toFixed(2);
    if (item.quantity <= 0) {
        document.getElementById("dec"+item.product.description).disabled = true;
    }
    document.getElementById("sub-total").innerText = "$" + totalPrice();
}

export function isEmpty() {
    if (CartItems.length === 0) return true;
    else return false;
}

export function remove(item) {
    let index = 0;
    let isFound = false;
    for (let i = 0; i < CartItems.length; i++) {
        if (isProductMatch(item.product, CartItems[i].product)) {
            index = i;
            isFound = true;
            break;
        }
    }
    if (isFound) {
        CartItems.splice(index, 1);
        document.getElementById("row"+item.product.description).remove();
        if (isEmpty()) {
            document.getElementById("active-cart").hidden = true;
            document.getElementById("empty-cart").hidden = false;
        }
    }
    document.getElementById("sub-total").innerText = "$" + totalPrice();
}

export function addItem(item) {
    for (let i = 0; i < CartItems.length; i++) {
        if (isProductMatch(item, CartItems[i].product)) {
            CartItems[i].quantity ++;
            return;
        }
        else continue;
    }
    CartItems.push({
        product: item,
        quantity: 1    
    });
}

export function totalPrice() {
    let total = +0;
    CartItems.forEach(item => {
        total += +(item.product.price * item.quantity).toFixed(2);
    });
    return total.toFixed(2);
}

function isProductMatch(item1, item2) {
    try {
        if (!item1.name.match(item2.name)) {
            throw new Error("Name mismatch.");
        }
        else if (!item1.description.match(item2.description)) {
            throw new Error("Description mismatch.");
        }
        else if (!item1.price === item2.price) {
            throw new Error("Price mismatch.");
        }
        else if (!item1.img.match(item2.img)) {
            throw new Error("Img mismatch.");
        }
    } catch (error) {
        return false;
    }
    return true;
}

function onChange() {
    
}

export const CartItems = [

]