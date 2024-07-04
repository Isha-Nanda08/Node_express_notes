const http=require('http');


const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        // BLOCKING CODE =nested for loop
        for(let i=0;i<10000;i++){
            for(let j=0;j<10000;j++){
                console.log('i')
            }
        }
        res.end('Here is about')
    }
    res.end(`error`);
})


server.listen(5000,()=>{
    console.log('server is running on port 5000');
})