import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const PetShopSchema = new Schema({
    id: ObjectId,
    name: String,
    password: String,
    email: String,
    cnpj: String,
    phone: String,
    address: String,
});

const PetShopModel = mongoose.model('PetShop', PetShopSchema);

export default PetShopModel;