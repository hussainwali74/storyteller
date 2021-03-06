const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

const connectDB = require('./config/db')
const { Mongoose } = require('mongoose')

//load config
dotenv.config({ path: './config/config.env' })

//passport config
require('./config/passport')(passport)

connectDB()

const app = express()

//Body Parser
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
//Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

//HANDLEBARS Helpers
const { formatDate } = require('./helpers/hbs');


//handlebars
app.engine('.hbs', exphbs({ helpers: { formatDate }, defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', '.hbs');

//session 
app.use(session({
    secret: 'planendar',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
    // cookie: { secure: true }
}))

//passport middleware
app.use(passport.initialize())
app.use(passport.session())

//Static Folder
app.use(express.static(path.join(__dirname, '/public')))

//Routes
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/stories', require('./routes/stories.routes'));

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running in ${process.env.NODE_ENV} mode on PORT: ${PORT}`))