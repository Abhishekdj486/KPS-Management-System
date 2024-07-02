const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Get the MongoDB URI from the environment variables
const mongoURI = process.env.MONGO_URI;

// Connect to MongoDB Atlas using environment variable
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://abhishekjagtap486:abhidj486@kps-db.cjxuiue.mongodb.net/data_management?retryWrites=true&w=majority&appName=kps-db';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
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
    const data = new Data(req.body);
    await data.save();
    res.send(data);
});

// Read route
app.get('/data', async (req, res) => {
    const data = await Data.find(req.query);
    res.send(data);
});

// Update route
app.put('/data/:id', async (req, res) => {
    const data = await Data.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(data);
});

// Delete route
app.delete('/data/:id', async (req, res) => {
    await Data.findByIdAndDelete(req.params.id);
    res.send({ message: 'Data deleted' });
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
