var five = require ('johnny-five'),
    board = new five.Board();

board.on('ready', function() {
  
  var btn01 = new five.Button(3);
  var btn02 = new five.Button(2);
  var led = new five.Led(11);

  btn01.on('press', function() {
    console.log("Button 01 has been pressed")
  });

});
