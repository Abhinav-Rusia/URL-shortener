import express, { urlencoded } from "express";
import cors from "cors";
import { nanoid } from "nanoid";
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));



app.post("/api/create", (req, res) => {
    const {url} = req.body;
    console.log(url);
    res.send(nanoid(7));
})

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
})
