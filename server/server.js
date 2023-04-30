const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
require('./connection')
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server(server, {
  cors: '*',
  methods: '*'
})

const User_Routes = require('./routes/User_Routes');
const Product_Routes = require ("./routes/Product_Routes");
const Review_Routes = require("./routes/Review_Routes");

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/users', User_Routes);   //eitar jonno na
app.use("/products",Product_Routes)
app.use("/reviews",Review_Routes)


server.listen(8080, ()=> {
  console.log('server running at port', 8080)
})


