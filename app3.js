const express=require('express')
const app=express()

app.get("",(req,res)=>{
    res.send("<h1>GOOD AFTERNOON</h1>")
})

app.get("/home",(req,res)=>{
    res.send("<h1>THIS IS HOME PAGE</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>THIS IS about PAGE</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>THIS IS contact PAGE</h1>")
})
app.get("/log",(req,res)=>{
    res.send("<h1>THIS IS login PAGE</h1>")
})

app.get("/html",(req,res)=>{
    res.send(`
        <table>
            <thead>
                <tr>
                    <th>BACKEND</th>
                    <th>FRONTEND</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <ul>
                            <li>NODE</li>
                            <li>EXPRESS</li>
                            <li>PYTHON</li>
                            <li>JAVA</li>
                            <li>PHP</li>
                        </ul>
                    </td>
                    <td>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>REACT</li>
                            <li>ANGULAR</li>
                        </ul>
                    </td>
                </tr>
            </tbody>

        </table>
        
        
        `)

})

app.get("/json",(req,res)=>{
    res.send([
        {"name":"puja","roll":1},
        {"name":"raju","roll":2},
        {"name":"ahhhh","roll":3}


    ])
})

app.listen(6007)