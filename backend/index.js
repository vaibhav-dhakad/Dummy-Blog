const express = require('express');
const cors = require('cors');
// const passport = require('passport');
const db = require('./config/db.config');
const user = require('./router/user_router');
const blog = require('./router/blog_router');
const comment = require('./router/comment_router')
const app = express();
app.use(cors({ origin: true }));
app.use(express.json())
    // app.use(passport.initialize());
db();
const port = 8000;
app.use('/user', user)
app.use('/blog', blog)
app.use('/comment', comment)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))