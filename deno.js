//Deno's solution
const menuB = {
    _meal:'',  
    _price:0,  
    set setMeal(mealToCheck) {
            if(typeof(mealToCheck) == string){ 
            this._meal = mealToCheck
            } 
        }, 
    set setPrice(priceToCheck){
            if(typeof(priceToCheck) == number){
                this._price = priceToCheck
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
