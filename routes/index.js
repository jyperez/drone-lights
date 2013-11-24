exports.index = function(req, res) {
  res.render('index', { title: 'Home' });
};

exports.audio = function(req, res) {
  res.render('audio', { title: 'Audio' });
};

exports.lights = function(req, res) {
  res.render('lights', { title: 'Lights' });
};

exports.about = function(req, res) {
  res.render('about', { title: 'About' });
};