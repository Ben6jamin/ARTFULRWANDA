const express = require ("express")
const mongoose = require ("mongoose")
const cors = require ("cors")


const EmployeeModel = require("./models/Employee")


const app = express()
app.use(express.json())
app.use(cors())

const mongoURI="mongodb+srv://Benjamin:123@cluster0.ftdnvds.mongodb.net/?retryWrites=true&w=majority";


mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB Atlas');
});

mongoose.connection.on('error', (err) => {
    console.error(`MongoDB connection error: ${err}`);
});


app.post('/login',(req, res) =>{
    const {email, password} = req.body;
    EmployeeModel.findOne({email: email})
    .then(user => {
        if(user){
        if(user.password === password) {
            res.json("success")

        } else {
            res.json("password is incorrect")
        }
    } else {
        res.json("no records found")
    }
    })

} )


app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err) )
})




app.listen(3001, () => {
    console.log("server is running")
})


