var http=require('http');
var fs=require('fs');


	fs.appendFile('demo.txt','This is creating new file',function(err,data){
		if(err)throw err;
		console.log('Saved ... !');
	})

