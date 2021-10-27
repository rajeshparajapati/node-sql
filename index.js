const express  = require("express");


const app = express();
app.use(express.urlencoded({extended:false}));
 
// parse application/json
app.use(express.json())





const PORT = 8080;

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})



app.use('/api',require('./routes/user_route'));


