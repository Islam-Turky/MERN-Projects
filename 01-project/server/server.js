const express = require('express');
const collection = require('./mongo');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

app.use(morgan('common'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', cors(), (req, res) => {
    
});

app.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const check = await collection.findOne({email: email})

        if(check){
            res.json("exists");
        }else{
            res.json("notexists");
        }

    } catch (error) {
        res.json("error no one here");
    }
});

app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
    const data = {
        name: name,
        email: email,
        password: password
    }

    try {
        const check = await collection.findOne({email: email})

        if(check){
            res.json("exists");
        }else{
            res.json("notexists");
            await collection.insertMany([data]);
        }

    } catch (error) {
        res.json("error no one here");
    }
});

app.listen(8080, () => {
    console.log('Server is listening on : http://localhost:8080');
});