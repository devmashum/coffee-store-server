const express = require('express');
const app = express();

const cors = require('cors')

const port = process.env.PORT || 3000;

// middleware

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Coffee making server is running')
})

app.listen(port, () => {
    console.log(`Coffee making Server is running on Port: ${port}`)
})