const express = require("express")
const path    = require("path")

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(
    path.resolve(__dirname, 'dist')
))

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})