import express from 'express';
import router from './routes.js';
import { connectDB } from './config/db.js';

const app = express();
connectDB();
const PORT = 3000;

app.use(express.json());
app.use('/api', router);

// Escuchando en el puerto PORT
app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
})
