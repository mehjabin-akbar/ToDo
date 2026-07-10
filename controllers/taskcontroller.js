const taskmodel = require("../models/task")

const createtask = async (req,res) => {

    const body = {
        taskid : req.body.taskid,
        taskname : req.body.taskname
    }

    try{
        await taskmodel.insertOne(body);
        res.status(200).json(
            { message: "task created successfully..."}
        )
    }
    catch(e){
        console.log(e);
        res.status(400).send("unable to insert task...")
    }

    console.log("request body: ",req.body);
    // res.send("nice to meet u");
    res.status(200).json(req.body);
}

const getTasks = async(req,res) => {
    
    try{
        const tasks = await taskmodel.find()
        res.status(200).send(tasks)
    }catch(e){
        console.log(e);
        res.status(400).send("unable to fetch task...");
    }
}

const deleteTask = async(req,res) => {
    const id = +req.params.id;
    try{
       await taskmodel.findOneAndDelete({taskid:id});
        res.status(200).send("Successfully deleted..")
    }
    catch(e){
        console.log(e);
        res.status(400).send("unable to delete task...");
    }
}

module.exports = {createtask,getTasks,deleteTask}