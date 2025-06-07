const express = require('express')
const app = express()
const PORT = 8383

// Sample data
let data = ['james'
];

//Middleware
app.use(express.json())

// Middleware to parse JSON
app.use(express.json());

// HTTP VERBS && Routes
app.get('/', (req, res) => {
    res.send(`
    <body style="background:pink; color:blue;">
        <h1>DATA</h1>
        <p>${JSON.stringify(data)}</p>
    </body>
    `)
})

app.get('/dashboard', (req, res) => {
    console.log('Ohh now I hit /dashboard endpoint')
    res.send('hi')
})

// API endpoints
app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.status.send(data)
})

app.post('/api/data', (req, res) => {
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.status(201).send({ message: 'New data added', newEntry })
})


app.delete('/api/data', (req, res) =>{
    data.pop()
    console.log("We deleted the element off the end of the array")
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))