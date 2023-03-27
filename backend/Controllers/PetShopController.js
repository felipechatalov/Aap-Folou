import PetShopModel from "../Models/PetShopModel.js"

class PetShopController {
    async store(req, res){
        const { name, email, cnpj, phone, adress } = req.body;

        let PetShopAlreadyExists = await PetShopModel.findOne({ email: email });
        if (PetShopAlreadyExists) return res.status(400).json({ message: "Email already registered" });

        PetShopAlreadyExists = await PetShopModel.findOne({ cnpj: cnpj });
        if (PetShopAlreadyExists) return res.status(400).json({ message: "CNPJ already registered" });

        const CreatedPetShop = await PetShopModel.create(req.body);
        console.log("PetShop created: " + CreatedPetShop)

        return res.status(200).json(CreatedPetShop);
    }

    async index(req, res){
        try {
            const PetShops = await PetShopModel.find();
            if (!PetShops) return res.status(404).json({ message: "No PetShops found" });

            return res.status(200).json(PetShops);
        } catch (error) {
            return res.status(404).json({ message: "No PetShops found" });
        }
    }

    async show(req, res){
        try {
            const { email, password } = req.params;
            
            const PetShop = await PetShopModel.findOne(email);
            if (!PetShop) return res.status(404).json({ message: "PetShop not found" });
            

            if (PetShop.password !== password) return res.status(404).json({ message: "Wrong password"});

            return res.status(200).json(PetShop);
            
        } catch (error) {
            return res.status(404).json({ message: "Verify client ID" });
        }
    }

    async update(req, res){
        // TODO: validate data from req.body
        try {

            const { id } = req.params;

            const PetShopUpdated = await PetShopModel.findByIdAndUpdate(id, req.body);

            if (!PetShopUpdated) return res.status(404).json({ message: "PetShop not found" });

            return res.status(200).json({ message: "PetShop updated" });

        } catch (error) {
            return res.status(404).json({ message: "Verify PetShop ID" });
        }
    }

    async destroy(req, res){
        try {
            const { id } = req.params;

            const PetShopDeleted = await PetShopModel.findByIdAndDelete(id);

            if (!PetShopDeleted) return res.status(404).json({ message: "PetShop not found" });

            return res.status(200).json({ message: "PetShop deleted" });

        } catch (error) {
            return res.status(404).json({ message: "Verify PetShop ID" });
        }
    }
} 

export default new PetShopController();