
const mongoose = require('mongoose');

const connectionStr = "mongodb+srv://Aruksa:qr32Pxt8DTaJeQpX@cluster0.lyer9nv.mongodb.net/Thrift?retryWrites=true&w=majority";

mongoose.connect(connectionStr, {useNewUrlparser: true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err))

mongoose.connection.on('error', err => {
  console.log(err)
})
