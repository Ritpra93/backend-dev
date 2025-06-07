import express from 'express'
import path, { dirname } from 'path'
import {fileURLToPath} from 'url'


const app = express()
const PORT = process.env.PORT || 5003

//Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url)
//Get the directory name from the file path
const __dirname = dirname(__filename);

app.use(express.static[path.join(__dirname, '../public')])
//serving up the HTML frile from the /public directory 
app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname,  'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server has started on port ${PORT}`)
})