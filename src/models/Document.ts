import { SchemaTypes, model, connection, Schema } from "mongoose";

const schema = new Schema({}, { strict: false })

//https://qastack.com.br/programming/5370846/how-do-you-use-mongoose-without-defining-a-schema
const modelDocument: string = 'Document';

export default(connection && connection.models[modelDocument]) ? connection.models[modelDocument] : model(modelDocument,schema);        