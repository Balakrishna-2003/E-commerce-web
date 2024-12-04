import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const app = express();

const supabase = createClient(`https://${process.env.SUPABASE_URL}.supabase.co/`, `${process.env.SUPABASE_API_KEY}`);



const corsOptions = {
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    credentials: true,
}
app.use(express.json());
// app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended: true}));

const port = 3001;

app.get("/", (req, res) => {
    console.log(req);
    
    res.send("server is running successfully");
})
//test
app.post('/', async(req, res) => {
    console.log(req);
    console.log(process.env.SUPABASE_API_KEY)
  
    try {
        const { error } = await supabase
        .from("register")
        .insert({id: parseInt(req.body.id), name: req.body.name })        
        
        
        if(error){
            if(error.code == 23505){
                console.log("user already exists");  
            }else{
                console.log(error);
                //res.send(error.message).end();
                const spe = process.env.SUPABASE_URL+" "+process.env.SUPABASE_API_KEY);
                res.send(spe);
            }  
        }else{
            console.log("Registration successful");
        }
    } catch (errord) {
        console.log("error "+errord);
        
    }
    
    
    // res.send("hello world");
});

app.post("/add", async(req, res) => {
    

    try {
        const { data, error } = await supabase
        .from("helloworld")
        .select("*");

        if(data){
        res.send(data);
        }
        else if(error){
            console.log(error.message);
            
        }
        
    } catch (error) {
        console.log(error);
        
    }

    res.end();
});

app.post("/filter", async(req, res) => {
    

    try {
        const { data, error } = await supabase
        .from("helloworld")
        .select("*")
        .like("name","%"+req.body.e+"%");

        if(data){
        res.send(data);
        }
        else if(error){
            console.log(error.message);
            
        }
        
    } catch (error) {
        console.log(error);
        
    }

    res.end();
});


app.listen(port , () => {
    console.log(`server is running in port http://localhost:${port}/`);
    
})
