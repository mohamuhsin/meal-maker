// Bjorn's Solution

const menu = {};
menu._meal = '';

menu._price = 0;

menu._meal = 42;      // Setting _meal to a number
menu._price = '20';   // Setting _price to a string
console.log(menu);    // Logging the menu object to demonstrate the issue


menu.setMeal = function(mealToCheck) {
  if (typeof mealToCheck === 'string') {
    this._meal = mealToCheck;
  }
}

menu.setPrice = function(priceToCheck) {
  if (typeof priceToCheck === 'number') {
    this._price = priceToCheck;
  }
}

menu.todaysSpecial = function() {
  if (this._meal && typeof this._price === 'number') {
    return `Today's Special is ${this._meal} for $${this._price}!`;
  } else {
    return 'Meal or price was not set correctly!';
  }
}

menu.setMeal('Spaghetti');
menu.setPrice(5);
console.log(menu.todaysSpecial()); // Logs "Today's Special is Spaghetti for $5!"
