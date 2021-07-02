const express = require('express')
const todoRouter = express.Router()
const { v4: uuidv4} = require("uuid")

const toDoItems = [
    { "name": "Move", "description": "move my stuff to new house", "imageUrl": "https://crystalcleanmovers.com/wp-content/uploads/2017/03/box-of-moving-items.jpg", "completed": false, "_id": uuidv4() },
    { "name": "Get set up", "description": "set up my stuff after move", "imageUrl": "https://www.eslpc.com/images/pcsetup.jpg", "completed": false, "_id": uuidv4() },
    { "name": "Get Job", "description": "find a tech job", "imageUrl": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fblogs-images.forbes.com%2Flaurencebradford%2Ffiles%2F2016%2F10%2FWoman-Working-on-Her-Laptop-1200x800.jpg", "completed": false, "_id": uuidv4() },
    { "name": "Cool Car", "description": "buy a cool car with new job money", "imageUrl": "https://www.automobilemag.com/uploads/sites/11/2020/07/2021-Ford-Bronco-front-three-quarter-in-motion-8.jpg?fit=around%7C875:492", "completed": false, "_id": uuidv4() },
    { "name": "Fun Places", "description": "go cool places in said car", "imageUrl": "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_25/1347087/travel-guide-for-moab-utah-arches-national-park-today-180619-tease-1347087.jpg", "completed": false, "_id": uuidv4() }
]

todoRouter.get("/", (req, res) => {
    res.send(toDoItems)    
})
todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundToDo = toDoItems.find(todo => todo._id === todoId)
    res.send(foundToDo)
})
todoRouter.post("/", (req, res) => {
    const newToDo = req.body
    newToDo._id = uuidv4()
    toDoItems.push(newToDo)
    res.send("Successfully added new to do item")
})
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = toDoItems.findIndex(todo => todo._id === todoId)
    toDoItems.splice(todoIndex, 1)
    res.send("Successfully deleted to do item")
})
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = toDoItems.findIndex(todo => todo._id === todoId)
    const updatedToDo = Object.assign(toDoItems[todoIndex], req.body)
    res.send(updatedToDo)
})


module.exports = todoRouter