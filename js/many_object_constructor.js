function Restaurant(name, tables, booked){
    this.name = name;
    this.tables = tables;
    this.booked = booked;
    this.checkAvailablity = function(){
        return this.tables - this.booked;
    };
}

var BoxtyHouseRestaurant = new Restaurant('Boxty House', 118, 45);
var DigInRestaurant = new Restaurant('Dig In', 56, 24 )

console.log(BoxtyHouseRestaurant, DigInRestaurant);