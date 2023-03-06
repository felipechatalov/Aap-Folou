import ClientModel from "../Models/ClientModel.js"

class ClientController {
    async store(req, res){
        // TODO: validade data from req.body
        // TODO: check if client already exists
        // TODO: everything inside try catch
        // TODO: check if client has same email or cpf already registered
        const { name, email, cpf, phone } = req.body;

        ClientlreadyExists = await ClientModel.findOne({ email: email });

        if (ClientlreadyExists) return res.status(400).json({ message: "Email already registered" });

        const CreatedClient = await ClientModel.create(req.body);
        console.log("Client created: " + CreatedClient)
        return res.status(200).json(CreatedClient);
    }

    async index(req, res){
        // TODO: check if there are clients
        // TODO: everything inside try catch
        const products = await ClientModel.find();

        return res.status(200).json(products);
    }

    async show(req, res){
        
        try {
            const { id } = req.params;
            const clients = await ClientModel.findById(id);

            if (!clients) return res.status(404).json({ message: "Client not found" });
            
            return res.status(200).json(clients);
            
        } catch (error) {
            return res.status(404).json({ message: "Verify client ID" });
        }
    }

    async update(req, res){
        // TODO: check if client exists
        // TODO: validate data from req.body
        // TODO: ensure that client has same email or cpf already registered
        try {

            const { id } = req.params;

            const ClientUpdated = await ClientModel.findByIdAndUpdate(id, req.body);

            if (!ClientUpdated) return res.status(404).json({ message: "Client not found" });

            return res.status(200).json({ message: "Client updated" });

        } catch (error) {
            return res.status(404).json({ message: "Verify client ID" });
        }
    }

    async destroy(req, res){
        
        try {
            const { id } = req.params;

            const ClientDeleted = await ClientModel.findByIdAndDelete(id);

            if (!ClientDeleted) return res.status(404).json({ message: "Client not found" });

            return res.status(200).json({ message: "Client deleted" });

        } catch (error) {
            return res.status(404).json({ message: "Verify client ID" });
        }
    }
} 

export default new ClientController();