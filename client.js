var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }
exec("stty -F /dev/ttyO3 9600", puts);

console.log('start waiting for serialport...');
var serialport = require('node-serialport')
var arDrone = require('ar-drone');
var client  = arDrone.createClient();

var sp = new serialport.SerialPort("/dev/ttyO3", {
   //parser: serialport.parsers.raw,
   baud: 9600
});

sp.on('open', function(){
        console.log('serial connection opened !');
        sp.flush();
});

sp.on('data', function(chunk) {
        try{
			var cmd = chunk.toString().replace(" ", "");
			console.log("Cmd : " + cmd);

			console.log(cmd + ' bitch !!');
			client[cmd]();
        } catch(e) {
                console.log(e);
        }
});