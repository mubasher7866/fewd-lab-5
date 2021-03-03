function Restaurant(name, tables, booked) {

    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.checkAvailablity = function() {
        return this.tables - this.booked;
    };
}

var BoxtyHouseRestaurant = new Restaurant('Boxty House', 35, 7);
var DigInRestaurant = new Restaurant('Dig In', 70, 22);

var details1 = BoxtyHouseRestaurant.name +  '- tables available: ';

details1 += BoxtyHouseRestaurant.checkAvailablity();

var elRestaurant1 = document.getElementById('restaurant1');

elRestaurant1.textContent = details1;

var details2 = DigInRestaurant.name + ' - tables available: ';
    details2 += DigInRestaurant.checkAvailablity();
var elRestaurant2 = document.getElementById('restaurant2');
elRestaurant2.textContent = details2;

