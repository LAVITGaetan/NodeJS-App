const express = require('express')
require('dotenv').config();

let app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./api/routes/userRoute')

// Default Route
app.get('/', (req, res) => {
    res.status(200).send('Server is running')
})
// API
app.use('/api/users', userRoutes)

const PORT = process.env.PORT || 1400
app.listen(PORT, () => {
    console.log(`app running on http://localhost:${PORT}`)
})