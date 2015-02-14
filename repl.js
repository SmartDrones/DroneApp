var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff();

client
  .after(3000, function() {
    this.stop();
    this.land();
  });