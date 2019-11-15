require('dotenv').config()
const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())

// note with heroku deployment you must source port from env
const PORT = process.env.PORT || 5001;

// register middleware component
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Serve up static assets (heroku)
// Connect to Atlas in production

// database connection ppol
client = mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {    
        console.log(err) 
        return
    }   
    console.log("Connected successfully to server") 
});


////////////////////////
///   api end points //
//////////////////////

MentorSchema = new mongoose.Schema({ name: String })

// serve the hpme page
app.get("/test", (req, res) => {
    const Mentor = mongoose.model('mentors', MentorSchema);
    Mentor.find({}, (err, doc) =>{
        if(err){ console.error(err)}
        else{
            res.send(doc)
        }
    })
    // res.sendFile(path.join(__dirname + "./public/index.html"));
});



app.listen(PORT, () => { console.log(`listening on port ${PORT}`) })
