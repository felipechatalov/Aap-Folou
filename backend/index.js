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
app.get("/cliente/:id", ClientController.show);
app.get("/clientes", ClientController.index);

app.post("/cadastro/cliente", ClientController.store);

app.put("/cliente/:id", ClientController.update);

app.delete("/cliente/:id", ClientController.destroy)


app.listen(PORT, () => console.log("Server is running on port 6969"))
connectDB();