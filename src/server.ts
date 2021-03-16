import express from 'express';
import cors from 'cors';

export const api = express();

api.use(express.json());
api.use(cors());

api.listen(3333, () => {
    console.log('🚀 Server started at port 3333!')
})