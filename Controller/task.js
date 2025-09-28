const Task = require('../Model/model')
const wrapper = require('../Middleware/wrapper')
const {createCustomError} = require('../Error/custom-error')

//List all the tasks
const getAllTasks = wrapper(async(req,res)=>{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
})

//create new task
const createTask =wrapper(async (req,res)=>{
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

//get single task
const getTask =wrapper( async (req,res)=>{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        if(!task){
            return next(createCustomError(`No task with ID ${taskID}`,404))
        }
        res.status(200).json({task})
})

//update task
const updateTask = wrapper(async (req,res)=>{
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true
        })
    if(!task){
            return next(createCustomError(`No task with ID ${taskID}`,404))
        }
        res.status(200).json({task})
})

//delete task
const deleteTask = wrapper(async (req,res)=>{
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        if(!task){
            return next(createCustomError(`No task with ID ${taskID}`,404))
        }
        res.status(200).json({task})
    })

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}