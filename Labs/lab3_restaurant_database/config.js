require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(' MongoDB Connected Successfully!'))
.catch(err => console.error('MongoDB Connection Error:', err));

module.exports = mongoose;
