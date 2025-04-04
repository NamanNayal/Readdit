import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose
    .connect(process.env.MONGO)
    .then(()=>{
        console.log('MongoDB connected');
    })
    .catch((err)=>{
        console.log(err);
    })

const app = express();

app.listen(7777, ()=>{
    console.log('Server is running on port 7777');
});

app.use('/api/user', userRoutes);

