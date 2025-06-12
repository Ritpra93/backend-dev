import express from 'express'
import db from '../db.js'


const router = express.Router()

//get all to dos
router.get('/', (req,res) =>{ 
    const getTodos = db.prepare('SELECT * FROM todos WHERE user_id = ?')
    const todos = getTodos.all(req.userID)
})

//create a new todo 
router.post('/', (req,res) => {
    const { task } = req.body
    const insertTodo = db.prepare(`INSERT INTO todos (user_id, task) VALUES
        (?, ?)`)
        const result = insertTodo.run(req.userId, task)
        res.json({id: result.lastInsertRowid, task, completed: 0})
})

//update todo
router.put('/:id', (req,res) =>{

})

//delete a todo
router.delete('/:id', (req,res) =>{

})

export default router