const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require('./docs');
const app = express()



app.use(express.json())
app.use(cors())
app.use(userRouter)
app.use(taskRouter)
app.use('/',swaggerUI.serve,swaggerUI.setup(docs))

module.exports = app

