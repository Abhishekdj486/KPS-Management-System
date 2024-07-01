const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB Atlas using environment variable
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://username:password@host/databasename?retryWrites=true&w=majority&appName=appname';
mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a schema
const DataSchema = new mongoose.Schema({
    invoiceNo: String,
    unitSerialNo: String,
    batterySerialNo: String,
    oldBatterySerialNo: String,
    model: String,
    capacity: String,
    deliveryDate: String,
    consumerName: String,
    address: String,
    contactNo: String,
    warranty: String,
    totalAmount: Number,
    amountPaid: Number,
    balanceAmount: Number
});

const Data = mongoose.model('Data', DataSchema);

// Create route
app.post('/data', async (req, res) => {
    try {
        const data = new Data(req.body);
        await data.save();
        res.send(data);
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).send({ message: 'Error saving data', error });
    }
});

// Read route
app.get('/data', async (req, res) => {
    try {
        const data = await Data.find(req.query);
        res.send(data);
    } catch (error) {
        console.error('Error retrieving data:', error);
        res.status(500).send({ message: 'Error retrieving data', error });
    }
});

// Update route
app.put('/data/:id', async (req, res) => {
    try {
        const data = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.send(data);
    } catch (error) {
        console.error('Error updating data:', error);
        res.status(500).send({ message: 'Error updating data', error });
    }
});

// Delete route
app.delete('/data/:id', async (req, res) => {
    try {
        await Data.findByIdAndDelete(req.params.id);
        res.send({ message: 'Data deleted' });
    } catch (error) {
        console.error('Error deleting data:', error);
        res.status(500).send({ message: 'Error deleting data', error });
    }
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
