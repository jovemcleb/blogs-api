require('express-async-errors');
const express = require('express');
const helmet = require('helmet');
const globalError = require('./middlewares/error');
const loginRouter = require('./routes/loginRoutes'); 
const userRouter = require('./routes/userRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const postRouter = require('./routes/postRoutes');

// ...

const app = express();
app.use(helmet());
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
app.use((error, req, res, next) => globalError.handle(error, req, res, next));

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
