import ClientModel from "../Models/ClientModel.js"

class ClientController {
    async store(req, res){
        const CreatedClient = await ClientModel.create(req.body);
        console.log("Client created: " + CreatedClient)
        return res.status(200).json(CreatedClient);
    }

    async index(req, res){
        const products = await ClientModel.find();

        return res.status(200).json(products);
    }

    async show(req, res){
        
    }

    async update(req, res){
            
    }

    async destroy(req, res){
        const { id } = req.params;
        
    }
} 

export default new ClientController();