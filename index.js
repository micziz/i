import express from 'express'

const app = express()

app.get('/:pgk', (req, res) => {
    res.redirect(`https://raw.githubusercontent.com/micziz/i/main/installers/${req.params.pgk}.sh`)
})

app.listen(3000, () => {
    console.log("Listing on port 3000")
})

export default app;