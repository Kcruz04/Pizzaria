/*Pizzaria- Creat a pizza*/

function pizzaoven(type, sauce, cheese, toppings) {
    var pizza = {};
    pizza.type = type;
    pizza.cheese = cheese;
    pizza.sauce = sauce;
    pizza.toppings = toppings;
    return pizza;
}
var cheeses = ["parm", "matz", "gargonzola"]
var sauces = ["marinara", "bbq", "pesto"]
var topping = ["jelapenos", "pep", "sausage"]
var types = ["deepdish", "handtossed", "Traditional"]

function randompizza() {
    var pizza = {};
    pizza.type = types[Math.floor(Math.random()*types.length)];
    pizza.cheese = cheeses[Math.floor(Math.random()*cheeses.length)];
    pizza.sauce = sauces [Math.floor(Math.random()*sauces.length)];
    pizza.toppings = topping [Math.floor(Math.random()*topping.length)];
    return pizza;
}
console.log(randompizza())
// var p1 = pizzaoven("deep dish", "traditional", ["motzaarella"], ["peperoni", "sausage"]);
// console.log(p1);

// var p2 = pizzaoven("had tossed", "marinara", ["motzaarella","feta"], ["mushrooms", "olives","oinions"]);
// console.log(p2);

// var p3 = pizzaoven("thin crust", "marinara", ["motzaarella","gargonzola"], ["peperoni", "sausage","jalapeno"]);
// console.log(p3);

// var p4 = pizzaoven("deep dish", "marinara", ["gargonzola"], ["peperoni", "sausage","banana pepper"]);
// console.log(p4);

// var p5 = pizzaoven("deep dish", "traditional", ["motzaarella"], ["peperoni", "sausage"]);
// console.log(p5);

