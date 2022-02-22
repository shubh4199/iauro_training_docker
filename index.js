const express = require('express')
const res = require('express/lib/response')
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))

app.use(bodyParser.json())


const port = 4567

const customers = [
                    { id: 1, firstName: "John", age: 27}, 
                    { id: 2, firstName: "James", age: 32}, 
                    { id: 3, firstName: "Robert", age: 45}, 
  ]

app.get("/",(req,res)=>{
    res.json(customers)
})


app.get("/customers/:id",(req, res) => {
    res.json(customers[parseInt(req.params.id)-1])
})

app.post("/customers",(req,res)=>{
    console.log(req.body)
    res.json({message:"ok"})
})

app.put("/customers/:id",(req,res)=>{
    console.log(req.params.id)
    console.log(req.body)
    res.json({message:`updated customer ${req.params.id}`})
})

app.delete("/customers/:id",(req,res)=>{
    console.log(req.params.id)
    res.json({message:`deleting customer ${req.params.id}`})
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})