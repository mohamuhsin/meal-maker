# Meal Maker

A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for Today’s Special. Use your knowledge of getters and setters to make sure anyone who uses the new function can generate a meal and a price for Today’s Special without any embarrassing errors!

# Tasks

**1.** We’ll hold the meal, price, and their respective getters and setters in an object named menu.

create an empty menu object.

**2.** The menu object will hold the meal and price of Today’s Special as properties and they shouldn’t be altered directly.

Within the menu object, create a _meal property with a value of an empty string (''). This will eventually hold the name of the meal.

**3.** Next, add a _price property with a value of 0. This will eventually hold the price of the meal, and should also not be altered directly.

**4.** We know properties that begin with _ should not be directly manipulated. But just to validate this knowledge, let’s test it out!

Below the menu object, directly manipulate the two properties by assigning _meal a number value and _price a string value.

Then, below the new assignments, console.log() the menu object to see how not type checking these values could cause confusion for a website visitor!

### Add Setter Methods

**5.** To safely reassign the two menu properties, we can add setters that type check the values being assigned.

Below the properties, use the set keyword to create a meal setter method with mealToCheck as a parameter. Leave the function body empty for now.

**6.** In the body of the setter method, create an if statement that checks if mealToCheck is a string. If it is, return the object’s _meal property with mealToCheck assigned as the value.

**7.**
Utilizing the same procedures as above, use the set keyword to create a price setter with priceToCheck as a parameter. This method should make sure the value associated with _price is always a number.
