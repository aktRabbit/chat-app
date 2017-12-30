var socket=io();

socket.on('connect',()=>{
  console.log('connected to server');
  socket.emit('createMessage',{
    from:'Ankit',
    text:'hi dud'
  });
});

socket.on('disconnect',()=>{
  console.log('Disconnected from server');
});

socket.on('newMessage',(message)=>{
  console.log('New Message',message);
});
