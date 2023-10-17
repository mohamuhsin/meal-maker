// Moha's Solution

//Wamata's Solution
const menu = {
 _meal: '',
 _price: 0,

 set meal_setter(mealToCheck) {
    if (typeof mealToCheck === 'string') {
        return menu._meal = mealToCheck
    }
},

 set price_setter(priceToCheck) {
    if (typeof priceToCheck === 'number') {
        return menu._price = priceToCheck
    }
 },
 get todaysSpecial() {
    if (menu._meal !== '' && menu._meal !== null && menu._price !== null) {
       console.log(`Today’s Special is ${menu._meal} for ${menu._price} `)
    }
    else {
        console.log(`Meal or price was not set correctly!`)
    }
    
 }
}


//BARLES SOLUTION
class MenuBarles {
    constructor(meal,price){
        this._meal = meal;
        this._price =price;
    }
    // Setting Menu 
    set meal (newMeal){
        if(typeof newMeal == 'string' ){
            this._meal = newMeal;
        }
    }
    //getting the values of menu
    get meal(){
        return this._meal;
    }

    // Setting Menu 
    set price (newPrice){
        if(typeof newPrice == 'number' ){
            this._price = newPrice;
        }
    }
    //getting the values of menu
    get price(){
        return this._price;
    }

}

const food = new MenuBarles('SeaFood',300);

// View In Console
console.log("Todays Meal & Price");
console.log("Meal :", food.meal);
console.log("Price :", food.price ," Ksh");
