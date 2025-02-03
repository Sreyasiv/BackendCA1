const express=require("express");

const app.use=express.json()

const PORT=3000

app.get("/",(req,res)=>{
    console.log("Server is Running")
});

app.post("/signup",(req,res)=>{
    const data={
        Username:{username},
        Email:{email},
        Password:{password},
        Date_Of_Birth:{Date_Of_Birth},
    }
    if(!Username){
        return res.status(400)({message:"Userame cannot be empty"})
    }
    if(!email){
        return res.status(400)({message:"Email cannot be empty"})
    }
    if(Password.length>16 || Password.length<8){
        return res.status(400)({message:"Password should be greater than 8 or lesser than or equal to 16"})
    }
});
res.json(
    console.log("Signup SuccessFul")
)

app.listen("PORT",()=>{
    console.log(`Server is running successfully in "http://localhost/:${PORT}`)
})

