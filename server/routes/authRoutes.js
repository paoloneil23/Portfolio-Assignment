import express from 'express';
import { signin, signout } from '../controllers/authController.js';

const router = express.Router();

router.post('/signin', signin);
router.get('/signout', signout);

router.get('/test', (req, res) => {
  res.send('Auth route is working');
});

export default router;