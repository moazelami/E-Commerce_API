const {config} = require('dotenv');
config();
const PORT = 3000;
const express = require('express');
const authRouter = require("./app/auth/auth.routes");
const app = express();
app.use(express.json());

app.use('/auth', authRouter);



app.use((err, req, res, next) => {
    console.error(err);

    res.status(500).json({
        success: false,
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
});