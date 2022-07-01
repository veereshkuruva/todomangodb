const Taskschema =require("./model")
const deleteData=(req,res)=>{

    const id=req.params.id;
    User.deleteOne({_id:id}).then(result=>{

        res.json({
            message:"SuccessFully Deleted"
        })

    }).catch(err=>{
        res.json({
            message:"Failed"
        })

    })

}