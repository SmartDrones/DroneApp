var socket = require('socket.io-client')('http://localhost:8080/');
var arDrone = require('ar-drone');
var mDrone  = arDrone.createClient();

var id = null;


socket.on('connect', function(){console.log("drone connected to the server !");});

socket.on('id', function(data){id = data; console.log("my id : "+id);});

socket.on("server_cmd", function(data){
	if(data.id_drones.indexOf(id)!==-1)
	{
		//the drone is concerned by the command.
		switch(data.cmd){
			case "takeoff" :
				mDrone.takeoff();
				console.log("taking off ! zouuuuuh");
				break;

			case "landing" :
				mDrone.stop();
				mDrone.land();
				console.log("back on earth !");
				break;

			case "scene" :
				switch(data.args.nb){
					case 1 :
						break;
					case 2 :
						break;
					case 3 :
						break;
				}
				break;
		}

		
	}

});

socket.on('disconnect', function(){});