const express=require("express");
const cors=require("cors")

const mongoose=require("mongoose");
const Taskschema =require("./model")

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017").then(()=>{
   console.log("dbconnected")
})

app.use(express.json())
app.use(cors({
    origin:'*'
}))
app.get("/gettask",async(req,res)=>{
    try{
        return res.json(await Taskschema.find());
    }
    catch(err){
        console.log(err)
    }
})

const deleteData=(req,res)=>{

    const id=req.params.id;
    Taskschema.deleteOne({_id:id}).then(result=>{

        res.json({
            message:"SuccessFully Deleted"
        })

    }).catch(err=>{
        res.json({
            message:"Failed"
        })

    })

}

/* app.delete("/detete/:id",async(req,res)=>{
    try{
        await Taskschema.findByIdAndDelete(req.params.id);
        return res.json(await Taskschema.find())
    }
    catch (err){
        console.log(err)
    }

}) */
app.delete("/delete/:id",deleteData);

app.post("/add",(req,res)=>{
    const user=new Taskschema({
        name:req.body.name,
        email:req.body.email,

  
    })
  
    user.save().then(data=>{
        res.json({
            message:"Successfully registered"
        })
    }).catch(err=>{
        
      res.json({
          message:err.message
      })
  
    })
});

app.listen(4000,()=>{
    console.log("server running at 4000")

})