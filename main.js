const port = 3000,
    http = require("http"),
    httpStatus = require("http-status-codes"),
    router = require("./route"),
    fs = require("fs"),
    plainTextContentType =  {
        "Content-Type": "text/plain"
    },
    htmlContentType = {
        "Content-Type": "text/html"
    },
    customReadFile = (file_path, res) => {
        if (fs.existsSync(file_path)) {
          fs.readFile(file_path, (error, data) => {
            if (error) {
              console.log(error);
              sendErrorResponse(res);
              return;
            }
            res.write(data);
            res.end();
      });
      } else {
          sendErrorResponse(res);
        }
    };

router.get("/", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, plainTextContentType);
    res.end("INDEX");
});

router.get("/index.html", (req, res) => {
    res.writeHead(httpStatus.StatusCodes.OK, htmlContentType);
    customReadFile("waso/index.html", res);
});

router.post("/", (req, res) => {
    res.writeHead(httpStatusCodes.StatusCodes.OK, plainTextContentType);
    res.end("POSTED");
 });

 http.createServer(router.handle).listen(3000); 
 console.log(`The server is listening on port number: ➥ ${port}`);