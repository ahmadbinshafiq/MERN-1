const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model');
// const jwt = require('jsonwebtoken');

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://ahmadbinshafiq:<pass>@cluster0.vxev3cd.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Error connecting to MongoDB', err))


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.pass
        })
        res.json({ status: 'ok' })
    } catch (error) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({
        email: req.body.email,
        password: req.body.pass
    })

    if (user) {

        // const token = jwt.sign({
        //     name: user.name,
        //     email: user.email,
        // }, 'secret123')

        return res.json({ status: 'ok', user: true })
    } else {
        return res.json({ status: 'ok', user: false })
    }

})

app.get('/api/get', (req, res) => {
    res.json({ result: 'Status 200 OK' })
})


app.listen(1337, () => {
    console.log('Server started on PORT 1337')
})