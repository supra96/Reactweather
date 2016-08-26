
var express = require('express');
const port=process.env.PORT||3000;
// Create our app
var app = express();
app.use(function(req,res,next){
	if(req.headers['x-forwarded-proto']==='http'){
		next();

	}else{
		res.redirect('http://'+req.hostname+req.url);

	}
})

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Express server is up on port '+ port);
});