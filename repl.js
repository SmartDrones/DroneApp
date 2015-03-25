var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(7000, function() {
    this.stop();
    this.land();
  });
  
