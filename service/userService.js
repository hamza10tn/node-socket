var User = require('../model/userModel');
async function list(req,res,next){
    // res.end('User List')
    await User.find().then((data, err)=>{
        if(err){
            res.status(500).json(err)

    }else{
        res.status(200).json(data)
        }
    })
}

async function deleteUser(req, res, next) {
    const { id } = req.params; // Extract ID from request parameters
    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
    
}

const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { nom, email, age } = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, { nom, email, age }, { new: true });
        
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        
        res.status(200).json(updatedUser);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
}
    
const create =async (req,res,next)=>{
    const { nom, email } = req.body 
    console.log(req.body.nom);
    console.log(req.params.age)
    const { age } = req.params
    console.log(req.params);
    await new User ({
        nom: nom,
        email: email,
        age: age

    }).save().then((err, data)=>{
        if(err){
            console.log('Error create User : '+ err)
        }
    })
    
res.json('User added ! nom : '+ nom + ' email : '+ email+ ' age : '+ age)
}

module.exports = { create, list, deleteUser, updateUser }