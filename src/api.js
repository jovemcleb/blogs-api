require('express-async-errors');
const express = require('express');
const globalError = require('./middlewares/error');
const loginRouter = require('./routes/loginRoutes'); 
const userRouter = require('./routes/userRoutes');

// ...

const app = express();

app.use(express.json());

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use(globalError.handle);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
