const express = require("express")
const app = express()

app.get("/", (req, res) => res.send("Hello world!"))
port = 3000
app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})
