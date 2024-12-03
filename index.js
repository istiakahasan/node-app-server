const http=require('http');
const fs=require('fs');

const PORT=process.env.PORT;

const handleReadFile=(filename,statuscode,req,res)=>{

    fs.readFile(filename,"utf-8",(err,data)=>{
            if(err){
                console.log(err);
                
            }else{
                res.writeHead(statuscode,{'Content-Type':'text/html'})
                res.write(data);
                res.end();
            }
        })
}
const myserver=http.createServer((req,res)=>{
    if(req.url==='/'){
        handleReadFile("index.html",200,req,res)
    }
    else if(req.url==='/about'){
        handleReadFile("about.html",200,req,res)
    }
    else if(req.url==='/contact'){
        handleReadFile("contact.html",200,req,res)
    }
    else{
        handleReadFile("404.html",404,req,res)
    }
})

myserver.listen(PORT,()=>{
    console.log("Server is running");
    
})