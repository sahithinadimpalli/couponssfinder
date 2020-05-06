const express=require('express');
const bodyparser = require('body-parser')
const mongoose=require('mongoose');
const cors=require('cors');
//const config=require('config');
const app=express();
const user=require('./router/user');
app.use(bodyparser.json());

app.use('/user',user)
app.get('/',function(req,res){
    res.send('Hello from the server');
});


const itemRouter=require('./router/item.route');
const cartRouter=require('./router/cart.router');




mongoose.connect('mongodb://localhost:27017/couponssfinder')
mongoose.connection.on("connected",()=>{
    console.log('connected to mongodb ')
})
mongoose.connection.on('error',(error)=>{
    console.log(error)
})


app.use(cors());


app.use(express.json());
app.use('/itemlist',itemRouter);
app.use('/cart',cartRouter);




const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})
