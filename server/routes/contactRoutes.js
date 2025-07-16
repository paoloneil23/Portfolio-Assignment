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

// Accessible by signed-in users (regular users can view)
router.get('/', requireSignin, getAllContacts);
router.get('/:id', requireSignin, getContactById);

// Admin-only operations
router.post('/', requireSignin, requireAdmin, createContact);
router.put('/:id', requireSignin, requireAdmin, updateContact);
router.delete('/:id', requireSignin, requireAdmin, deleteContact);
router.delete('/', requireSignin, requireAdmin, deleteAllContacts);

export default router;