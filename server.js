var util = require("util"),
my_http = require("http"),
path = require("path"),
url = require("url"),
filesys = require("fs"),
handlers = require('./handlers.js');

var ipaddr  = "";
var port    = 8080;

my_http.createServer(function(request,response){
	var my_path; 
	var pathname = url.parse(request.url).pathname;
	var query = url.parse(request.url, true).query;
	
	/* BlackList */
	/*
	if(pathname == "/core/example.js"){
		response.write("Forbidden");
		response.end();
	}
	
	*/
	console.log(pathname);
	switch(pathname){
	case "/":
		my_path = "index.html";
		break;
	case "/api/":
		handlers.api(query, response);
		return;
		break;	
	case "/modules/":
		handlers.route_modules(query, response);
		return;
		break;			
	default:	
		my_path = url.parse(request.url).pathname;
		break;
	}
	
	var full_path = path.join(process.cwd(),my_path);
	filesys.exists(full_path,function(exists){
		if(!exists){
			response.writeHeader(404, {"Content-Type": "text/plain"});  
			response.write("404 Not Found\n");  
			response.end();
		}
		else{
			filesys.readFile(full_path, "binary", function(err, file) {  
			     if(err) {  
			         response.writeHeader(500, {"Content-Type": "text/plain"});  
			         response.write(err + "\n");  
			         response.end();  
			   
			     }  
				 else{
					var file_extension = full_path.split(".").pop();	

					switch(file_extension){
						case "html":
							response.writeHeader(200,{"Content-Type": "text/html"} );  
							break;
						case "js":
							response.writeHeader(200,{"Content-Type": "application/javascript"} );  
							break;
						case "css":
							response.writeHeader(200,{"Content-Type": "text/css"} );  
							break;
						// Image Types
						case "gif":
							response.writeHeader(200,{"Content-Type": "image/gif"} );  
							break;
						case "jpeg":
							response.writeHeader(200,{"Content-Type": "image/jpeg"} );  
							break;
						case "pjpeg":
							response.writeHeader(200,{"Content-Type": "image/jpeg"} );  
							break;
						case "png":
							response.writeHeader(200,{"Content-Type": "image/png"} );  
							break;
						case "svg":
							response.writeHeader(200,{"Content-Type": "image/svg+xml"} );  
							break;
						case "tiff":
							response.writeHeader(200,{"Content-Type": "image/tiff"} );  
							break;
						case "ttf":
							response.writeHeader(200,{"Content-Type": "application/x-font-ttf"} );  
							break;
						case "otf":
							response.writeHeader(200,{"Content-Type": "font/opentype"} );  
							break;
						case "eot":
							response.writeHeader(200,{"Content-Type": "application/vnd.ms-fontobject"} );  
							break;
						case "woff":
							response.writeHeader(200,{"Content-Type": "font/x-woff"} );  
							break;							

						default:
							response.writeHeader(200,{"Content-Type": "text/html"} );
							break;
					}
					
					response.write(file, "binary");  
			        response.end();
				}
					 
			});
		}
	});
}).listen(port, ipaddr);
util.puts("Server Running on " + port + " " + ipaddr);			
