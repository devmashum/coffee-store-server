const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const cors = require('cors')

const port = process.env.PORT || 3000;

/**
 * coffeeMaster
 * rZELfBj8naldVT6I
 *  * 
 */


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.oqyepgg.mongodb.net/?retryWrites=true&w=majority`;

console.log(uri);

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);


// middleware

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Coffee making server is running')
})

app.listen(port, () => {
    console.log(`Coffee making Server is running on Port: ${port}`)
})