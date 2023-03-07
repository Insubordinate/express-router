const express = require("express")
const app = express()
const port = 3000
const users = require('./routes/users')
const fruits = require('./routes/fruits')



// Express Routes


app.use('/users',users)
app.use('/fruits',fruits)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
