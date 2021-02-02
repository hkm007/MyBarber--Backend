const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGOURI } = require('./config/Keys');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const appointmentRoute = require('./routes/appointment');
const shopRoute = require('./routes/shop');
const PORT = process.env.PORT || 5000; 

//DB Connection
mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

mongoose.connection.on('connected', () => {
    console.log("mongodb connected...");
});

mongoose.connection.on('error', (err) => {
    console.log("Error in connecting to database", err);
});

// cors
app.use(cors());

// parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// views
app.set('views', 'views')
app.set('view engine', 'ejs')

// routes
app.get("/", (req, res) => {
    res.render("home");
})

// api
app.use("/api", authRoute);
app.use("/api", shopRoute);
app.use("/api", appointmentRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))