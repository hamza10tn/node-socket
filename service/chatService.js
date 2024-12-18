var Chat = require('../model/chatModel');
var socketIo = require('socket.io')


function socketIO(server) {

    const io = socketIo(server);
    io.on("connection", (socket) => {
        console.log("user connected with socket id" + socket.id);
    })
    return io;
}

function chatView(req, res, next) {
    res.render('chats')

}

async function list(req, res, next) {
    // res.end('Chat List')
    await Chat.find().then((data, err) => {
        if (err) {
            res.status(500).json(err)

        } else {
            res.status(200).json(data)
        }
    })
}

async function deleteChat(req, res, next) {
    const { id } = req.params; // Extract ID from request parameters
    try {
        const deletedChat = await Chat.findByIdAndDelete(id);
        if (!deletedChat) {
            return res.status(404).json({ message: 'Chat not found' });
        }
        res.status(200).json({ message: 'Chat deleted successfully', Chat: deletedChat });
    } catch (err) {
        console.error('Error deleting Chat:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }

}

const updateChat = async (req, res, next) => {
    const { id } = req.params;
    const { msg, datecreation } = req.body;
    try {
        const updatedChat = await Chat.findByIdAndUpdate(id, { msg, datecreation }, { new: true });

        if (!updatedChat) {
            return res.status(404).json({ message: 'Chat not found' });
        }

        res.status(200).json(updateChat);
    } catch (err) {
        console.error('Error updating Chat:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}

const create = async (req, res, next) => {
    const { msg, datecreation } = req.body
    console.log(req.body.msg);
    console.log(req.body.datecreation);

    console.log(req.params);
    await new Chat({
        msg: msg,
        datecreation: new Date(),


    }).save().then((err, data) => {
        if (err) {
            console.log('Error create Chat : ' + err)
        }
    })

    res.json('Chat added ! msg : ' + msg + ' datecreation : ' + new Date())
}

module.exports = { create, list, deleteChat, updateChat, socketIO, chatView }