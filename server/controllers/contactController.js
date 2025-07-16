import Contact from '../models/Contact.js';

export const getAllContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

export const getContactById = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
};

export const createContact = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, message } = req.body;

    const newContact = new Contact({
      firstname,
      lastname,
      email,
      phone,
      message
    });

    await newContact.save();

    res.status(201).json({
      firstname: newContact.firstname,
      lastname: newContact.lastname,
      email: newContact.email,
      phone: newContact.phone,
      message: newContact.message
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: 'Contact deleted' });
};

export const deleteAllContacts = async (req, res) => {
  await Contact.deleteMany();
  res.json({ message: 'All contacts deleted' });
};