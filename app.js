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

//Deno's solution
const menuB = {
    _meal:'',  
    _price:0,  
    set setMeal(mealToCheck) {
            if(typeof(mealToCheck) == string){ 
            menuB._meal = mealToCheck
            } 
        }, 
    set setPrice(priceToCheck){
            if(typeof(priceToCheck) == number){
                menuB._price = priceToCheck
            }
    }, 
    get todaysMenu(){
        return (menuB._meal && menuB._price) ? 
        `Todays special is ${menuB._meal} for ${menuB._price}`
        : "Meal or price was not set correctly!"
    }
}
 setMeal("rice")
 setPrice(200)
console.log(menuB.todaysMenu)
