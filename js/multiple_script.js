// Define a constructor function template for restaurants
function Restaurant(name, tables, booked) {
    // Object properties
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.tables - this.booked;
    };
}

// Define to instances of the restaurant and their arguments
var BoxtyHouseRestaurant = new Restaurant('Boxty House', 35, 7);
var DigInRestaurant = new Restaurant('Dig In', 70, 22);

// Declare a variable to hold the name of the restaurant and room availability 
var details1 = BoxtyHouseRestaurant.name +  '- tables available: ';
    // add content to an existing variable----
    details1 += BoxtyHouseRestaurant.checkAvailablity();
// Get the restaurant1 div
var elRestaurant1 = document.getElementById('restaurant1');
// Add the variables created onto the empty div
elRestaurant1.textContent = details1;

var details2 = DigInRestaurant.name + ' - tables available: ';
    details2 += DigInRestaurant.checkAvailablity();
var elRestaurant2 = document.getElementById('restaurant2');
elRestaurant2.textContent = details2;

