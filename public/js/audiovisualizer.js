/**
  @constructor
  Use an n-point FFT (fast Fourier transform) spectral analyzer to visualize audio on Philips Hue lights.

  @param num_points - Number of points for transform (i.e. how many buckets we get containing frequency information)
  @param num_lights - Number of Phlips Lights representing the spectrum.
  @param this_light - Which light to display.
  @param canvas_id - Canvas element ID.    <<TODO: will probably be changed to the light-id?
  @param audio_context - An AudioContext instance.
*/
LightBox = function(num_points, num_lights, this_light, canvas_id, audio_context, type) {
  this.init(num_points, num_lights, this_light, canvas_id, audio_context, type);
}


LightBox.prototype.init = function(num_points, num_lights, this_light, canvas_id, audio_context, type) {
  this.num_lights = num_lights;
  this.this_light = this_light;
  this.num_points = num_points;
  this.canvas_id = canvas_id;
  this.update_rate_ms = 50;
  this.smoothing = 0.75;

  // Number of points we actually want to display. If zero, display all points.
  this.valid_points = 0;

  // Determine the boundaries of the canvas.
  this.canvas = document.getElementById(canvas_id);
  this.width = this.canvas.width;
  this.height = this.canvas.height;

  this.bar_spacing = 3;


  this.ctx = this.canvas.getContext('2d');
  this.actx = audio_context;

  // Create the spectral analyzer
  this.fft = this.actx.createAnalyser();
  this.fft.fftSize = this.num_points;
  this.data = new Uint8Array(this.fft.frequencyBinCount);
}



/* Returns the AudioNode of the FFT. You can route signals into this. */
LightBox.prototype.getAudioNode = function() {
  return this.fft;
}

/* Returns the canvas' 2D context. Use this to configure the look of the display. */
LightBox.prototype.getCanvasContext = function() {
  return this.ctx;
}

/* Set the number of points to work with. */
LightBox.prototype.setValidPoints = function(points) {
  this.valid_points = points;
  return this;
}


/* Enable the analyzer. Starts drawing stuff on the canvas 
   TODO: and eventually on the lights. 
 */
LightBox.prototype.enable = function() {
  var that = this;
  if (!this.intervalId) {
    this.intervalId = window.setInterval(
        function() { that.update(); }, this.update_rate_ms);
  }
  return this;
}

/* Disable the analyzer. Stops drawing stuff on the canvas
   TODO: and eventually on the lights. 
 */
LightBox.prototype.disable = function() {
  if (this.intervalId) {
    window.clearInterval(this.intervalId);
    this.intervalId = undefined;
  }
  return this;
}


/* Updates the canvas display
   TODO: and eventually the lights.
 */
LightBox.prototype.update = function() {

  // Get the frequency samples
  data = this.data;

  this.fft.smoothingTimeConstant = this.smoothing;
  this.fft.getByteFrequencyData(data);

  var length = data.length;
  if (this.valid_points > 0) length = this.valid_points;

  // Clear canvas then redraw.
  this.ctx.clearRect(0, 0, this.width, this.height);

  // Break the samples up into bins
  var bin_size = Math.floor(length / this.num_lights);

  for (var i=0; i < this.num_lights; ++i) {
    var sum = 0;

    for (var j=0; j < bin_size; ++j) {
      sum += data[(i * bin_size) + j];
    }

    // Calculate the average frequency of the samples in the bin
    var average = sum / bin_size;

    // Draw the bar on the canvas
    var bar_width = this.width;
    var scaled_average = (average / 256) * this.height;
    // scaled_average is thing thingy 

  setBrightness(this.this_light, scaled_average);
  if (scaled_average > 50) {
    setBrightness(this.this_light, 100);
  }
  else if (scaled_average < 40) {
    setBrightness(this.this_light,10)
  }

    if(i == (this.this_light-1)) {
      this.ctx.fillRect(
        0, this.height,
        bar_width, -scaled_average);
     
    }
  }
}
