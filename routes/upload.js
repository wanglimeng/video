var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: './video/' });
var fs = require('fs');
var path = require('path');
router.post('/', upload.single('avatar'),function(req, res, next) {
	
	var newfile = req.file.path + path.extname(req.file.originalname);
	
	var oldfile =req.file.path;
	
	fs.rename(oldfile,newfile,function(err){
		if (err) {
			res.send=err;
		}else {
			res.json({
				url:'http://localhost:3000/'+newfile
			});
		}
		
	});

  
});

module.exports = router;
