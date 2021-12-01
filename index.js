import  express  from "express";
import bodyParser from "body-parser";
import userRoutes from './routes/users.js'
import todos from "./routes/todos.js";
const app=express();
const PORT= 5000

app.use(bodyParser.json())
app.use('/users',userRoutes)
app.get('/',(req,res)=>res.send('Hello'))

app.use('/users/:id',userRoutes)

app.use('/todos',todos)

app.listen(PORT,()=>console.log(`Server Running on ${PORT}`))