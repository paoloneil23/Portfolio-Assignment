import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SignupForm from '../SignupForm';

test('renders input and button', () => {
  render(<SignupForm onSubmit={() => {}} />);
  expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});

test('fills out form fields', () => {
  render(<SignupForm />);

  const nameInput = screen.getByPlaceholderText(/full name/i);
  const emailInput = screen.getByPlaceholderText(/email address/i);
  const passwordInput = screen.getByPlaceholderText(/password/i);

  fireEvent.change(nameInput, { target: { value: 'Test User' } });
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
  fireEvent.change(passwordInput, { target: { value: 'password123' } });

  expect(nameInput.value).toBe('Test User');
  expect(emailInput.value).toBe('test@example.com');
  expect(passwordInput.value).toBe('password123');
});