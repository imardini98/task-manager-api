const createUser = require('./create-user')
const loginUser = require('./login-user')
const logoutUser = require('./logout-user')
const readUser = require('./read-user')
const readProfile = require('./read-profile')
const deleteUser = require('./delete-user')
const uploadAvatar = require('./upload-avatar')
const deleteAvatar = require('./delete-avatar')
const logoutAll = require('./logout-all')
const updateUser = require('./update-user')

module.exports = {
    '/users':{
        ...createUser,
    },
    '/users/login':{
        ...loginUser
    },
    '/users/logout':{
        ...logoutUser
    },
    '/users/logoutAll':{
        ...logoutAll
    },
    '/users/{id}':{
        ...readUser,
    },
    '/users/me':{
        ...readProfile,
        ...updateUser,
        ...deleteUser,
        
    },
    '/users/me/avatar':{
        ...uploadAvatar,
        ...deleteAvatar
    }
}