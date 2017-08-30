var orderCount = 0;
var tax 	   = 0.06; 

function takeOrder(topping, crustType) {
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
  orderCount = orderCount + 1;
}

//Based on $7.50 per pizza
function getSubTotal(itemCount) {
  return itemCount * 7.5;
}
// Get tax of item 
function getTax() {
  return getSubTotal(orderCount) * tax;
}
// Get total based on tax
function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

// Order input 
takeOrder('bacon', 'Razor thin');
takeOrder('pepperoni', 'Deep dish');
takeOrder('pesto', 'Hand Tossed');

console.log("================")
console.log("Your total is " + getSubTotal(orderCount));
console.log("+ city tax = " + tax); 
console.log("Your total with tax is: " + "$" + getTotal());