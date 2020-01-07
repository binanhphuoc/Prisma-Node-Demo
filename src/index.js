const express = require('express')
const app = express()
const port = 3000

const { prisma } = require('../generated/prisma-client')

app.get('/', (req, res) => {
    prisma.createUser({
        name: "Tu Do",
        email: "doanhtu07@gmail.com"
    }).then(newUser => {
        console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
        res.send(newUser);
    }).catch(err => {
        console.log(err);
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))