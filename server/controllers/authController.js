import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';

// Generate a JWT token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN || '1d' }
  );
};

// @desc    Sign in user
// @route   POST /api/auth/signin
// @access  Public
export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log('[Auth] User not found:', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('[Auth] Password mismatch for:', email);
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);

    console.log('[Auth] Login successful for:', email);
    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });

  } catch (err) {
    console.error('[Auth] Server error during signin:', err);
    const message = process.env.NODE_ENV === 'development' ? err.message : 'Server error';
    res.status(500).json({ message });
  }
};

// @desc    Sign out user
// @route   GET /api/auth/signout
// @access  Public
export const signout = (req, res) => {
  res.status(200).json({ message: 'Signout success' });
};