require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT;

require('./config/mongoose.config')

app.use( express.json())
app.use( express.urlencoded({ extended: true }))
app.use(cors())

const routeAttacher = require('./routes/author.routes')

routeAttacher(app)


app.listen(port, () => console.log(`Listening on port: ${port}`));