var express = require('express')
var chatRouter = require('./controller/chatController')
var osRouter = require('./controller/osController')
var userRouter = require('./controller/userController')

var productRouter = require('./controller/productController')
var hotelRouter = require('./controller/hotelController')
var { socketIO } = require('./service/chatService')

var app = express()
var mongoose = require('mongoose')
var path = require('path')

app.use(express.json())
mongoose.connect('mongodb://127.0.0.1:27017/NodeApp')
    .then(() => {
        console.log("DB Connected !");
    })
    .catch((error) => {
        console.log("error : " + error)
    })

app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
app.use('/users', userRouter)
app.use('/chats', chatRouter)
app.use('/os', osRouter)
app.use('/product', productRouter)
app.use('/hotels', hotelRouter)
var http = require('http')
var server = http.createServer(app)
const io = socketIO(server);
server.listen(3000, () => {
    console.log('server started !');
})



io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('addRoom', async (data) => {
        try {
            const hotel = await Hotel.findById(data.hotelId);
            if (hotel) {
                hotel.nbrRooms += 1;
                await hotel.save();
                socket.emit('roomAdded', { message: 'Room added successfully', hotel });
            } else {
                socket.emit('error', { message: 'Hotel not found' });
            }
        } catch (err) {
            socket.emit('error', { message: 'Internal server error', error: err.message });
        }
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});
