import express, { json } from 'express'
const app = express()
const port =8000

app.use(express.json())
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.status(200).send("Welcome to the Test server of sachikanta")
})

app.get('/get',(req,res)=>{
    res.status(200).send("Welcome to the get server of sachiknata")
})

app.post('/post',(req,res)=>{
    let myJosn = req.body;
    res.status(200).send(myJosn);
})

app.post('/postform',(req,res)=>{
    res.status(200).send(json.stringify(req.body));
})

app.listen(port,()=>{
    console.log(`The app is runing at teh http://localhost:port ${port}`)
})


// note to use import like syntax need to make changes in the package.json i.e "type": module --- but to use require like things it canbe used by deafult