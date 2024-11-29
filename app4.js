const ex=require("express")
const app=ex()

app.get("/",(req,res)=>{
    res.send(`

        <a href="/home">HOME</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
        <a href="/login">LOGIN</a>
        <a href="/signup">SIGNUP</a>
        
        `)
})

app.get("/home",(req,res)=>{
    res.send("<h1>THIS IS HOME PAGE")
})
app.get("/about",(req,res)=>{
    res.send("<h1>THIS IS about PAGE</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>THIS IS contact PAGE</h1>")
})
app.get("/login",(req,res)=>{
    res.send("<h1>THIS IS login PAGE")
})
app.get("/signup",(req,res)=>{
    res.send("<h1>THIS IS signup PAGE")
})

app.listen(7001)