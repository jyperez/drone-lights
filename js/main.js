var hue = hue || window.hue,
    onState = { on: true },
    offState = { on: false },
    fullBrightness = { bri: 254 },
    IPAddress = '192.168.2.2',
    APIKey = 'newdeveloper';


// set Hue bridge IP address and API key to use for test suite
hue.setIpAndApiKey(IPAddress, APIKey);


/***********************************************************
 * More Advanced functions for controlling the lights.
 ***********************************************************/

function testSetTimeout() {
  setTimeout(alert, 1000); // Will alert once, after 1 second
}

var intervalID;

function testSetInterval() {
  intervalID = setInterval(alert, 1000); //Alert every second.
}

function testClearInterval() {
  clearInterval(intervalID); //Stop the timer
}

function testSetTimeoutFunction() {
  setTimeout(function() {
    alert('Hello!');
  }, 1000); // Will alert once, after 1 second 
}




function stepLightsOn() {
  setTimeout(function() { turnOnLightN(1); }, 1000);
  setTimeout(function() { turnOnLightN(2); }, 2000);
  setTimeout(function() { turnOnLightN(3); }, 3000);  
}

function stepLightsOff() {

}



function stepLightsOn() {
  setTimeout(function() { turnOnLightN(1); }, 1000);
  setTimeout(function() { turnOnLightN(2); }, 2000);
  setTimeout(function() { turnOnLightN(3); }, 3000);  
}

function stepLightsOff() {

}





function slowlyBrightenLights() {
  turnOnAllLights();
  setAllBrightness(0);

  intervalID = setInterval(function() { brightener(10); }, 1000); //Make brighter every second.
}


function brightener(briVal) {
  console.log('Brighten all lamps by: ' + briVal);

  var lampState = brightenAll(briVal);

  console.log('lampState = ' + JSON.stringify(lampState));

  //TODO: check brightness. If equal to 255 (or 254) stop the timer.
  /*
  if(parseInt(lampState.bri) >= 255) {
    clearInterval(intervalID); //Stop the timer
  }
  */
}


function slowlyDimLights() {

}








/***********************************************************
 * Basic functions for controlling the lights are below.
 ***********************************************************/

function turnOnAllLights() {
  return hue.turnOnAll();
}

function turnOffAllLights() {
  return hue.turnOffAll();
}

function setAllColors(color) {
  console.log("Set all lights to Color: " + color);
  return hue.setAllColors(color);  
}


function turnOnLightN(index) {
  console.log("Turn on light number: " + index);
  return hue.turnOn(index);
}

function turnOffLightN(index) {
  console.log("Turn off light number: " + index);
  return hue.turnOff(index);

}

function setLightNColor(index, color) {
  console.log("Set lights #: " + index + " to Color: " + color);
  return hue.setColor(index, color);
}


function setTransTime(transTime) {
  console.log("Set transition time to: " + transTime);
  hue.setTransitionTime(transTime);
}

function getTransTime(transTime) {
  transTime.value = hue.getTransitionTime();
}


function shortFlashAllLights() {
   return hue.flashAll();
 }

function shortFlashLightN(index) {
  console.log("Short flash light number: " + index);
  return hue.flash(index);
}


function longFlashAllLights() {
  return hue.longFlashAll();
}

function longFlashLightN(index) {
  console.log("Long flash light number: " + index);
  return hue.longFlash(index);
}


function setAllBrightness(briVal) {
  console.log("Set all Brightness: " + briVal);
  return hue.setAllBrightness(briVal);
}

function setBrightness(index, briVal) {
  console.log("Set light: " + index + " Brightness: " + briVal);
  return hue.setBrightness(index, briVal);
}

function dimAll(dimVal) {
  console.log("Dim All: " + parseInt(dimVal));
  return hue.dimAll(parseInt(dimVal));
}

function dimLightN(index, dimVal) {
  console.log("Dim light: " + index + " value: " + parseInt(dimVal));
  return hue.dim(index, parseInt(dimVal));
}


function brightenAll(brightenVal) {
  console.log("Brighten All: " + parseInt(brightenVal));
  return hue.brightenAll(parseInt(brightenVal));
}

function brightenLightN(index, brightenVal) {
  console.log("Brighten light: " + index + " value: " + parseInt(brightenVal));
  return hue.brighten(index, parseInt(brightenVal));
}

