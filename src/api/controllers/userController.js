const User = require("../models/userModel");

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

exports.getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

exports.addUser = async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(200).send(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).send({ message: 'Utilisateur modifié' });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

exports.removeUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: 'Utilisateur supprimé', deleted_user: user });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}