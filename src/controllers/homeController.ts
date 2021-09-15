import { Request, Response } from 'express';

import { Product } from '../models/Product';

import Document from '../models/Document';

export const home = async (req: Request, res: Response)=>{
    
    let documentos = await Document.find({});
    let totalDocumetos = await Document.find({}).count();

    res.render('pages/home', {
        documentos,
        totalDocumetos
    });
};