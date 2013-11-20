var hue = hue || window.hue,
    onState = { on: true },
    offState = { on: false },
    fullBrightness = { bri: 254 },
    IPAddress = '192.168.2.2',
    APIKey = 'newdeveloper';


// set Hue bridge IP address and API key to use for test suite
hue.setIpAndApiKey(IPAddress, APIKey);


function turnOnAllLights() {
  hue.turnOnAll();
}

function turnOffAllLights() {
  hue.turnOffAll();
}

function setAllColors(color) {
  console.log("Set all lights to Color: " + color);
  hue.setAllColors(color);  
}


<<<<<<< HEAD

function turnOnLightN() {
  var lightNum = document.getElementById("turnOnLightNInput");

  console.log("Turn on light number: " + lightNum.value);
  hue.turnOn(lightNum.value);
}


function turnOffLightN() {
  var lightNum = document.getElementById("turnOffLightNInput");

  console.log("Turn off light number: " + lightNum.value);
  hue.turnOff(lightNum.value);
}


function setLightNColor() {
  var lightNum = document.getElementById("lightN");
  var lightColor = document.getElementById("lightNColor");

  console.log("Set lights #: " + lightN.value + " to Color: " + lightNColor.value);
  hue.setColor(lightNum.value,lightNColor.value);
}



function setTransTime() {
  var transTime = document.getElementById("transTime");

  console.log("Set transition time to: " + transTime.value);
  hue
  hue.setTransitionTime(transTime.value);
=======
function turnOnLightN(index) {
  console.log("Turn on light number: " + index);
  hue.turnOn(index);
}

function turnOffLightN(index) {
  console.log("Turn off light number: " + index);
  hue.turnOff(index);

}

function setLightNColor(index, color) {
  console.log("Set lights #: " + index + " to Color: " + color);
  hue.setColor(index, color);
}


function setTransTime(transTime) {
  console.log("Set transition time to: " + transTime);
  hue.setTransitionTime(transTime);
>>>>>>> 60418b20a719efa14cee53e5b765a2e2b82d9677
}

function getTransTime(transTime) {
  transTime.value = hue.getTransitionTime();
}


function shortFlashAllLights() {
   hue.flashAll();
 }

function shortFlashLightN(index) {
  console.log("Short flash light number: " + index);
  hue.flash(index);
}


function longFlashAllLights() {
  hue.longFlashAll();
}

function longFlashLightN(index) {
  console.log("Long flash light number: " + index);
  hue.longFlash(index);
}


function setAllBrightness(briVal) {
  console.log("Set all Brightness: " + briVal);
  hue.setAllBrightness(briVal);
}

function setBrightness(index, briVal) {
  console.log("Set light: " + index + " Brightness: " + briVal);
  hue.setBrightness(index, briVal);
}


function dimAll(dimVal) {
  console.log("Dim All: " + parseInt(dimVal));
  hue.dimAll(parseInt(dimVal));
}

function dimLightN(index, dimVal) {
  console.log("Dim light: " + index + " value: " + parseInt(dimVal));
  hue.dim(index, parseInt(dimVal));
}

function setAllBrightness() {
  var brightNum = document.getElementById("setAllBrightness");
  console.log("Set all Brightness:" + parseInt(brightNum.value));
  var obj = hue.setAllBrightness(parseInt(brightNum.value));
}

function setBrightness() {
  var lightNum = document.getElementById("lightNum");
  var brightNum = document.getElementById("setBrightness");
  console.log("Set Brightness:" + parseInt(brightNum.value));
  var obj = hue.setBrightness(lightNum.value, parseInt(brightNum.value));
}

function dimAll() {
  var dimNum = document.getElementById("dimAll");
  console.log("Dim All: " + parseInt(dimNum.value));
  hue.dimAll(parseInt(dimNum.value));
}


