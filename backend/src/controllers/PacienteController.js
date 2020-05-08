const axios = require('axios');
const Paciente = require('../models/Paciente');

module.exports = {
  async index(req, res) {

    const pacientes = await Paciente.find();

    return res.json(pacientes);
  },

  async store(req, res) {
    const { doctor, name, type } = req.body;

    const paciente = await Paciente.create({
     doctor,
     name,
     type
    })

    return res.json(paciente)
  }
};