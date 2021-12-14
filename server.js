const express = require('express');
const cors = require('cors');
const app = express();
const { MongoClient } = require('mongodb');
require('dotenv').config()
const bcrypt = require('bcrypt');
const { createNewUser } = require('./newUser');
const path = require('path');

const port = process.env.PORT || 8080;
// app.use(cors({origin: 'http://localhost:3000', credentials: true}))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@salt1.r85z6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const client = new MongoClient(uri)

// USER LOGIN // 
app.post('/user/login', async (req, res) => {
  const { user } = req.body
  if(!user || user === '') return res.end() // INVALID LOGIN
  
  try {
    await client.connect();
    const db = client.db('GitFit');
    const collection = db.collection('users');
    const doc = await collection.find({ user: user.toLowerCase() }).toArray();
    if (await bcrypt.compare(req.body.password, doc[0].password)) {
      delete doc[0].password
      res.cookie('gitfit', user)
      res.json(...doc)
    } else {
      res.send('Invalid Login')
    }
  } catch {
    res.status(500).send()
  }
});



// USER SIGNUP // 
app.post('/user/signup', async (req, res) => {
  const { user, password } = req.body;
  try {
    await client.connect();
    const db = client.db('GitFit');
    const collection = db.collection('users');
    const isUser = await collection.find({ user: user.toLowerCase() }).count();

    if (isUser === 1) {
      res.sendStatus(409);
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = createNewUser(user.toLowerCase(), hashedPassword)
      const doc = await collection.insertOne(newUser);
      delete newUser.password;
      res.cookie('gitfit', user)
      res.status(201).json(newUser)
    }

  } catch(err) {
    console.log(err);
    res.status(500).send()
  }
});



// ADD EXERCISE
app.post('/user/addExercise', async (req, res) => {
  const { name, type, user } = req.body
  
  try {
    await client.connect();
    const db = client.db('GitFit');
    const collection = db.collection('users');
    const response = await collection.findOneAndUpdate(
      { user: user },
      { $push: { exercises: { name, type } } }, 
      { returnDocument: 'after' })

    delete response.value.password;
    res.json(response.value);
  } catch {
    res.status(500).send()
  }
});



// ADD PROGRAM
app.post('/user/addProgram', async (req, res) => {
  const { program, user } = req.body
  program.programID = Date.now();
  try {
    await client.connect();
    const db = client.db('GitFit');
    const collection = db.collection('users');
    const response = await collection.findOneAndUpdate(
      { user: user },
      { $push: { programs: program } }, 
      { returnDocument: 'after' })
      
    const newCol = {...response.value, programs: [...response.value.programs, program]}
    res.json(response.value.programs);
  } catch {
    res.status(500).send()
  }
});



// UPDATE PROGRAM
app.put('/user/updateProgram', async (req, res) => {
  const { program, user } = req.body
  try {
    await client.connect();
    const db = client.db('GitFit');
    const collection = db.collection('users');
    const query = `programs.${program.programID}`
    const data = await collection.findOne({ user: user })

    const programs = data.programs.map(p => {
      if (p.programID === program.programID) {
        return program;
      }
      return p;
    });

    const response = await collection.findOneAndUpdate(
      { user: user },
      { $set: { programs: programs }}, 
      { returnDocument: 'after' })
    
    res.json(response.value.programs);
  } catch {
    res.status(500).send()
  }
});



// ADD SESSION
app.post('/user/addSession', async (req, res) => {
  const { session, user } = req.body
  session.sessionID = Date.now();

  try {
    await client.connect();
    const db = client.db('GitFit');
    const collection = db.collection('users');
    const response = await collection.findOneAndUpdate(
      { user: user },
      { $push: { sessions: { $each: [session], $position: 0} } }, 
      { returnDocument: 'after' })
      
    delete response.value.password;
    res.json(response.value);
  } catch {
    res.status(500).send()
  }
});



// FETCH DATA IF LOGGED INN
app.post('/user/getData', async (req, res) => {
  const { user } = req.body
  if(!user || user === '') return res.end() // INVALID LOGIN
  
  try {
    await client.connect();
    const db = client.db('GitFit');
    const collection = db.collection('users');
    const doc = await collection.find({ user: user }).toArray();
    res.json(...doc)
  } catch {
    res.status(500).send()
  }
});

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}
  
app.listen(port, () => console.log(`Server started on port ${8080}`));
