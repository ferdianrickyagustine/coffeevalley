require('dotenv').config();
const express = require('express');
const session = require('express-session');
const errorHandler = require('./middlewares/errorHandler');
const authentication = require('./middlewares/authentication');
const UserController = require('./controllers/UserController');
const BeanController = require('./controllers/BeanController');
const DistributorController = require('./controllers/DistributorController');
const UploadController = require('./controllers/UploadController');
const upload = require('./middlewares/multer');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: process.env.SESSION_SECRET || 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24
    }
}));

app.post('/login', UserController.login);

app.use(authentication);

app.post('/logout', UserController.logout);

app.get('/home', BeanController.getBeanOfTheDay);
app.get('/catalog', BeanController.getAll);
app.get('/catalog/:id', BeanController.getById);

app.get('/distributors', DistributorController.getAll);
app.get('/distributors/:id', DistributorController.getById);
app.post('/distributors', DistributorController.create);
app.put('/distributors/:id', DistributorController.update);

app.post('/upload', upload.single('document'), UploadController.create);

app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = app;
