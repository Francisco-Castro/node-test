var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is great</h1>", function(error) {
if (error) {
  return console.log(error);
} else {
  return console.log("Congrats");
  }
});

var myPhotoLocation = 'https://downshiftology.com/wp-content/uploads/2018/04/carne-asada-tacos-5.jpg';

https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + '/myTaco.jpg'))
})
