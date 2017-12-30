const express=require('express');
const path=require('path');
const http=require('http');
const socketIO=require('socket.io');

const publicPath=path.join(__dirname,'../public');
var app=express();
const port=process.env.PORT||3000;
var server=http.createServer(app);
var io=socketIO(server);

app.use(express.static(publicPath));
io.on('connection',(socket)=>
{
  console.log("New User connected");

  socket.emit('newMessage',{
    from:'Ankita',
    text:'hi buddy',
    createdAt:123
  });

  socket.on('createMessage',(message)=>{
    console.log(message);
    io.emit('newMessage',{
      from:message.from,
      text:message.text,
      createdAt: new Date().getTime()
    });
  });
  socket.on('disconnect',()=>{
    console.log('user Disconnected');
  });
});



server.listen(port,()=>{
  console.log(`Server is up on port ${port}`);
});
