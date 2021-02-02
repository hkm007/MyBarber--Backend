const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000; 

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

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))