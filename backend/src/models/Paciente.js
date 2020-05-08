const mongoose = require('mongoose');

const PacienteSchema = new mongoose.Schema({
  doctor: String,
  name: String,
  type: String
});

module.exports = mongoose.model('Paciente', PacienteSchema);