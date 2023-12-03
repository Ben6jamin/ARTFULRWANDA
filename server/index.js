const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors");
const session = require('express-session');
const EmployeeModel = require("./models/Employee")
const ImageModel = require("./models/Image");
const dotenv = require("dotenv");












const app = express();
app.use(express.json());
app.use(cors());
dotenv.config()


// Use express-session middleware
app.use(session({
  secret: '123', // Change this to a secure key
  resave: false,
  saveUninitialized: true,
}));


const port = process.env.PORT;
const url =  process.env.Database_URL;


const mongoURI=(url);


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});



// Endpoint to like an image
app.put('/image/like', async (req, res) => {
  const { imageId, userId } = req.body;
  await ImageModel.findByIdAndUpdate(imageId, {
    $push: { likes: userId }
  });
  res.send('The image has been liked');
});



// Endpoint to unlike an image
app.put('/image/unlike', async (req, res) => {
  const { imageId, userId } = req.body;
  await ImageModel.findByIdAndUpdate(imageId, {
    $pull: { likes: userId }
  });
  res.send('The image has been unliked');
});


// Endpoint to comment on an image
app.put('/image/comment', async (req, res) => {
  const { imageId, userId, text } = req.body;
  const comment = { user: userId, text };
  await ImageModel.findByIdAndUpdate(imageId, {
    $push: { comments: comment }
  });
  res.send('A comment has been added');
});


// Endpoint to uncomment on an image
app.put('/image/uncomment', async (req, res) => {
  const { imageId, commentId } = req.body;
  await ImageModel.findByIdAndUpdate(imageId, {
    $pull: { comments: { _id: commentId } }
  });
  res.send('The comment has been removed');
});


// Endpoint to get the whole image
app.get('/image/:id', async (req, res) => {
  const image = await ImageModel.findById(req.params.id);
  res.send(image);
});

















app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
      .then(user => {
        if (user) {
          if (user.password === password) {
            res.json({ message: 'success', name: user.name });
          } else {
            res.json({ message: 'password is incorrect' });
          }
        } else {
          res.json({ message: 'no records found' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'internal server error' });
      });
  });

app.get('/welcome', (req, res) => {
    const username = req.session.username;
    if (username) {
        res.json({ message: `Welcome ${username}` });
    } else {
        res.status(401).json({ message: 'Unauthorized' });
    }
})


app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err) )
})



// Logout route
app.post('/logout', (req, res) => {
  // Clear the session
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ message: 'Logout failed' });
    } else {
      res.status(200).json({ message: 'Logout successful' });
    }
  });
});





app.listen(port, () => {
    console.log("server is running")
})


