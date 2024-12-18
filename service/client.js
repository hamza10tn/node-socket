// filepath: /C:/Users/Admin/Desktop/hamza/4TWIN2K24/node js/Nouveau dossier/ExpressApp/client.js
const socket = io('http://localhost:3000');

socket.on('connect', () => {
    console.log('Connected to server');

    // Emit the addRoom event with the hotelId
    socket.emit('addRoom', { hotelId: 'your-hotel-id' });

    socket.on('roomAdded', (data) => {
        console.log(data.message);
        console.log(data.hotel);
    });

    socket.on('error', (data) => {
        console.log(data.message);
    });
});

socket.on('disconnect', () => {
    console.log('Disconnected from server');
});