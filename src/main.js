const {config} = require('dotenv');
config();
const PORT = 3000;
const express = require('express');
const authRouter = require("./app/auth/auth.routes");
const app = express();

app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});