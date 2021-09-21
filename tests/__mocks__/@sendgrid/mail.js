module.exports = {
    setApiKey(key) {
        console.log('The key has been configured')
    },
    send(email) {
        return new Promise((resolve,reject) => {
            if(email)
                resolve(email)
            else
                reject('Error')
        })
    }
}