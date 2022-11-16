let shoppingList = ["poptarts", "ramen noodles", "chips", "salsa", "coffee"];

shoppingList.push("fruit loops");

shoppingList.splice(4, 1, "fair trade coffee");

shoppingList.splice(2, 2, "rice", "beans");

let shoppingCart = [];

shoppingCart.push(shoppingList.pop());

shoppingCart.push(shoppingList.shift());

while (shoppingList.length > 0) {
  shoppingCart.push(shoppingList.pop());
}

shoppingCart.sort().reverse();

console.log("Shopping List: " + shoppingList);

console.log("Shopping Cart: " + shoppingCart);
