const app = require('./app')
const port = process.env.PORT


app.listen(port, () => {
    console.log('The server is listening on port '+ port)
})