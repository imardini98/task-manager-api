const mongoose = require('mongoose')


const connectionURL= process.env.MONGO_HOST


mongoose.connect(connectionURL,{ 
    useNewUrlParser : true,
    useCreateIndex: true,
    useFindAndModify: false
})

