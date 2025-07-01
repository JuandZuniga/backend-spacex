import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import launchesRoutes from './routs/spacexLaunchesRouts.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api', launchesRoutes);

// Servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
