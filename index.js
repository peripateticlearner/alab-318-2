const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const aboutRoute = require('./routes/about');
const greetRoute = require('./routes/greet');
const imageRoute = require('./routes/image');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// Setting the view engine as EJS
app.set('view engine', 'ejs');

app.use(express.static('images')); // Ensure correct static folder

// Routes
app.use('/about', aboutRoute);
app.use('/greet', greetRoute);
app.use('/image', imageRoute);

app.get('/', (req, res) => {
    res.render('index', { title: "Home" });
});

app.post('/submit-form', (req, res) => {
    console.log(req.body);
    res.send("Form submitted successfully");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
