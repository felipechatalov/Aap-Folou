import ClientModel from "../Models/ClientModel.js"

class ClientController {
    async store(req, res){
        // TODO: validade data from req.body
        const { name, email, cpf, phone } = req.body;

        try {

            let ClientAlreadyExists = await ClientModel.findOne({ email: email });
            if (ClientAlreadyExists) return res.status(400).json({ message: "Email already registered" });

            ClientAlreadyExists = await ClientModel.findOne({ cpf: cpf });
            if (ClientAlreadyExists) return res.status(400).json({ message: "CPF already registered" });

            ClientAlreadyExists = await ClientModel.findOne({ phone: phone })
            if (ClientAlreadyExists) return res.status(400).json({ message: "Phone already registered" });

            const CreatedClient = await ClientModel.create(req.body);
            console.log("Client created: " + CreatedClient)
            return res.status(200).json(CreatedClient);

        } catch (error) {
            return res.status(404).json({ message: "Verify client data" });
        }

    }

    async index(req, res){
        try {
            const Clients = await ClientModel.find();
            return res.status(200).json(Clients);
        } catch (error) {
            return res.status(404).json({ message: "No clients found" });
        }
    }

    async show(req, res){
        try {
            const { email, password } = req.params;
            
            const client = await ClientModel.findOne(email);
            if (!client) return res.status(404).json({ message: "Client not found" });
            

            if (client.password !== password) return res.status(404).json({ message: "Wrong password"});

            return res.status(200).json(client);
            
        } catch (error) {
            return res.status(404).json({ message: "Verify client ID" });
        }
        
    }

    async update(req, res){
        // TODO: validate data from req.body
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