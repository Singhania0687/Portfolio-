import Contact from '../models/Contact';

// Handle form submission
const submitForm = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        // Save contact form data to database
        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(200).json({ success: true, message: 'Form submitted successfully!' });
    } catch (error) {
        console.error('Error submitting form:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

export default { submitForm };
