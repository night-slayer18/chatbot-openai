const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/chat', require('./routes/chat'));

app.get('/', (req, res) => {
    res.send('Server is running');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




