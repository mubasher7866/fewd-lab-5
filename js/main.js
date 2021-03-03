  
var restaurant = {
  name : 'Beanhive',
  booked : 39,
  tables : 90
  
};

restaurant.delivery = true;
restaurant.carpark = false;
delete restaurant.booked;

var elName = document.getElementById('restaurantName'); 
elName.textContent = restaurant.name;                   

var elCarpark = document.getElementById('carpark');      
elCarpark.className = restaurant.carpark;                     

var elDelivery = document.getElementById('delivery');        
elDelivery.className = restaurant.delivery; 