var restaurant = {

    name: 'Food Panda',
    tables: 90,
    booked: 39,
    delivery: true,
    tableTypes: ['single', 'couple', 'group', 'party'],
    checkAvailablity: function() {
        return this.tables - this.booked;
    }
};

var elName = document.getElementById('restaurantName');
elName.textContent = restaurant.name;

var eltables = document.getElementById('tables');
eltables.textContent = restaurant.checkAvailablity();

