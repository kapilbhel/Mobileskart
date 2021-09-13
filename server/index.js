const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const mobileRoutes = require('./routes/mobile');
const undertenRoutes = require('./routes/underten');
const undertwoRoutes = require('./routes/undertwo')
const cameraRoutes = require('./routes/camera');
const batRoutes = require('./routes/bat');
const redmiRoutes = require('./routes/redmi');
const motoRoutes = require('./routes/moto');
const samsungRoutes = require('./routes/samsung');
const underthreeRoutes = require('./routes/underthree')

// models
const Mobile = require('./models/mobile');
// models
const Underten = require('./models/underten');
const Camera = require('./models/camera');
const Bat = require('./models/bat');
const Redmi = require('./models/redmi');
const Moto = require('./models/moto');
const Samsung = require('./models/samsung');
const Undertwo = require('./models/undertwo');
const Underthree = require('./models/underthree');

const app = express();
const PORT = process.env.PORT || 3001;
mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {
  console.log('Connected to DB!')
});
// Middleware
app.use(express.json());
// Api Routes
app.use('/api/v1/mobiles', mobileRoutes);
// Api Routes
app.use('/api/v1/undertens', undertenRoutes);
app.use('/api/v1/cameras', cameraRoutes);
app.use('/api/v1/bats', batRoutes);
app.use('/api/v1/redmis', redmiRoutes);
app.use('/api/v1/motos', motoRoutes);
app.use('/api/v1/samsungs', samsungRoutes);
app.use('/api/v1/undertwos', undertwoRoutes);
app.use('/api/v1/underthrees', underthreeRoutes);

app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})