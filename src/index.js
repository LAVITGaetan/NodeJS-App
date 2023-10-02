const express = require('express')
require('dotenv').config();

let app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userRoutes = require('./api/routes/userRoute')

// Database
const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://${process.env.db_user}:${process.env.db_password}@${process.env.db_cluster}.mongodb.net/${process.env.db_name}?retryWrites=true&w=majority`);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Erreur de connexion à MongoDB: "));
db.once("open", function () {
    console.log("Connexion à la base de données réussi");
});


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