const express = require('express');
const { body, validationResult } = require('express-validator');

const app = express();
app.use(express.json()); 
app.post(
  '/submit',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('age').isInt({ min: 18 }).withMessage('Age must be a number and at least 18'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    res.json({ message: 'Data is valid and processed' });
  }
);

app.listen(3000, () => console.log('Server running on port 3000'));