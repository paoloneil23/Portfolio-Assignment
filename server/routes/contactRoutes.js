//server/routes/contactRoutes.js
import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
  deleteAllContacts
} from '../controllers/contactController.js';

import { requireSignin, requireAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

//Public route to submit contact form
router.post('/', createContact);

//Protected routes
router.get('/', requireSignin, getAllContacts);
router.get('/:id', requireSignin, getContactById);
router.put('/:id', requireSignin, requireAdmin, updateContact);
router.delete('/:id', requireSignin, requireAdmin, deleteContact);
router.delete('/', requireSignin, requireAdmin, deleteAllContacts);

export default router;