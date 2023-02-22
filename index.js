const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Still in development</h1>')
})

app.get('/:pgk', (req, res) => {
    res.redirect(`https://raw.githubusercontent.com/micziz/i/main/installers/${req.params.pgk}.sh`)
})

app.listen(3000, () => {
    console.log("Listing on port 3000")
})

module.exports =  app;