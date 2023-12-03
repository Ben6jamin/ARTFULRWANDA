const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors");
const session = require('express-session');
const EmployeeModel = require("./models/Employee")
const ImageModel = require("./models/Image");
const dotenv = require("dotenv");












const app = express();

app.use(cors(
  {
      origin: ["https://artfulrwanda.vercel.app/"],
      methods: ["POST", "GET"],
      credentials: true
  }
));


app.use(express.json());
dotenv.config()








const mongoURI="mongodb+srv://Benjamin:123@cluster0.ftdnvds.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
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

app.get("/", (req, res) => {
  res.json("Hello");
})


app.post('/register', (req, res) => {
  const {name, email, password} = req.body;
  EmployeeModel.findOne({email: email})
  .then(user => {
      if(user) {
          res.json("Already have an account")
      } else {
          EmployeeModel.create({name: name, email: email, password: password})
          .then(result => res.json(result))
          .catch(err => res.json(err))
      }
  }).catch(err => res.json(err))
})




app.listen(3001, () => {
    console.log("server is running")
})


