import express from "express";
import {profiles} from "./routes/profiles.js"

const app = express();

app.use(express.json())

app.get('/test', (_,res) => res.send('works'));

app.use('/api/profiles', profiles);

const port = process.env.PORT || 5000;

const callBack = () => console.log(`Server is running on port ${port}`)
app.listen(port, callBack);