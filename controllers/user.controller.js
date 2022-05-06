const {ReE, ReS} = require('../services/util.service')
const User = require('../models/users/user.js');

const createUser = async function (req, res) {
    var user = new User({
        name: req.body.name,
        lastName: req.body.lastName,
        nationality: req.body.nationality,
    });

    user.save(function (err) {
        if (err) {
            return ReE(res, err, 422);
        }
    });

    return ReS(res, { user: user }, 201);
}
module.exports.createUser = createUser;

const deleteUser = async function (req, res) {
    const id = req.params.user_id;
    User.findByIdAndRemove(id, function (err, result) {
        if (err) {
            res.status(500).send({ message: "Could not delete user with id:" + id });
        }
        if (result) {
            res.status(201).send({ message: "The user has been removed successfully!" });
        } else {
            res.status(404).send({ message: `Could not delete user with id: ${id}. Maybe there is no user with that id.` });
        }
    });

}
module.exports.deleteUser = deleteUser;

const getAllUsers = async function (req, res) {
    const query = await User.find();
    return ReS(res, { users: query });
}
module.exports.getAllUsers = getAllUsers;

const getUserById = async function (req, res) {
    const id = req.params.user_id;
    User.findById(id, function (err, result) {
        if (err) {
            res.status(500).send({ message: "Could not show user with id:" + id });
        }
        if (result) {
            res.status(200).send({ message: result });
        } else {
            res.status(404).send({ message: `Could not show user with id: ${id}. Maybe there is no user with that id.` });
        }
    });
}
module.exports.getUserById = getUserById;

const updateUser = async function (req, res) {
    const id = req.params.user_id;
    const objectUser=req.body
    User.findOneAndUpdate({"_id":id}, objectUser, function (err, result) {
        if (err) {
            res.status(500).send({ message: "Could not update user with id:" + id });
        }
        if (result) {
            res.status(200).send({ message: "The user has been update successfully!" });
        } else {
            res.status(404).send({ message: `Could not update user with id: ${id}.Maybe there is no user with that id.` });
        }
    })
}
module.exports.updateUser = updateUser;
