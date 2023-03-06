import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ClientSchema = new Schema({
    id: ObjectId,
    name: String,
    password: String,
    email: String,
    cpf: String,
    phone: String,
});

const ClientModel = mongoose.model('Client', ClientSchema);

export default ClientModel;