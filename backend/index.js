import express from "express";
import connectDB from "./Loaders/mongodb.js";

import ClientController from "./Controllers/ClientController.js";
import PetShopController from "./Controllers/PetShopController.js";

const PORT = 6969;


const app = express();
app.use(express.json());






app.get("/", (req, res) => {
    console.log("get request received");
    console.log(req.body);
    res.send("get received");
});


// Client section
app.get("/cliente/:id", ClientController.show);
app.get("/clientes", ClientController.index);

app.post("/cadastro/cliente", ClientController.store);

app.put("/cliente/:id", ClientController.update);

app.delete("/cliente/:id", ClientController.destroy)
////////////////////////////////////


// PetShop section
app.get("/petshop/:id", PetShopController.show);
app.get("/petshops", PetShopController.index);

app.post("/cadastro/petshop", PetShopController.store);

app.put("/petshop/:id", PetShopController.update);

app.delete("/petshop/:id", PetShopController.destroy)
////////////////////////////////////




app.listen(PORT, () => console.log("Server is running on port 6969"))
connectDB();