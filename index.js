const express = require('express')
const app = express()
const port = 3000

const { MongoClient, ConnectionClosedEvent } = require('mongodb')
const dbName = 'liars-dice'
const activeGames = 'active-games'
const uri = "mongodb+srv://Coomer:Coomer1@cluster-deez.vovei.mongodb.net/"+ dbName +"?retryWrites=true&w=majority"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

app.get('/', (req, res) => {
    
    client.connect( async err => {
        const col = client.db( dbName ).collection( activeGames )
        const currGames = await col.find()
        await currGames.forEach(console.dir)
    })

})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})