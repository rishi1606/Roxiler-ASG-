import express from 'express'
import axios from 'axios'
const router=express.Router()

router.get('/',(req,res)=>{
    axios.get("https://jsonplaceholder.typicode.com/todos")
    .then(function(response) {
      res.json(response.data)
    }).catch(function(error) {
      res.json("Error occured!")
    })

})

export default router;