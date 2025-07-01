import express from 'express';
import { obtainAllLaunches, obtainLaunchRecap } from '../spacexControllsLaun/controlLaunchs.js';

const router = express.Router();

router.get('/launches', obtainAllLaunches);
router.get('/summary', obtainLaunchRecap);

export default router;
