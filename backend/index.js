import express from "express";
import connectDB from "./Loaders/mongodb.js";

import ClientController from "./Controllers/ClientController.js";
const PORT = 6969;


const app = express();
app.use(express.json());






app.get("/", (req, res) => {
    console.log("get request received");
    console.log(req.body);
    res.send("get received");
});

app.post("/cadastro/cliente", ClientController.store);
app.get("/clientes", ClientController.index);

app.listen(PORT, () => console.log("Server is running on port 6969"))
connectDB();