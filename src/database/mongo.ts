import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const mongoConnect = async () => {
    try {
        await connect(process.env.MONGO_URL as string);
        console.log("conectado com sucesso!");
    } catch (error) {
        console.log("Erro ao conectar no banco do MongoDB.", error);
    }
}