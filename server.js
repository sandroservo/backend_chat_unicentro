import express, { response }  from "express";
import cors from 'cors'
import axios from "axios";

const app = express();

app.use(express.json());
app.use(cors({origin:true}));

app.post("/authenticate", async (req, res) =>{
    const { username } =  req.body;
    try {
       const r = await axios.put (
        'https://api.chatengine.io/users/',
        {username: username, secret: username, first_name: username},
        {headers:{"private-key": "a5c96519-f330-47d5-aa32-1f7b48e6c5ad"}}
       );
       return res.status(r.status).json(r.data)
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }
    //return res.json({username: "sandro",  secret: "sha256..."});
})

app.listen(3333)