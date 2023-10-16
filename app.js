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
