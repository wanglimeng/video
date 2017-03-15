var express = require('express');
var router = express.Router();
let fs = require('fs');
/* GET home page. */
router.get('/:videopath', function(req, res, next) {
	let videopath = req.params.videopath;	
	console.log(videopath);	
  let stream = fs.createReadStream('video/'+videopath);
	stream.on('close',function(){
		
	});
	stream.pipe(res,{end:true});
});

module.exports = router;