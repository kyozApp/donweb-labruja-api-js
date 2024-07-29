const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const Usuario = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    correo: { type: String, required: true, unique: true },
    clave: { type: String, required: true }
  },
  {
    timestamps: false,
    versionKey: false
  }
);

Usuario.pre('save', async function (next) {
  if (!this.isModified('clave')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.clave = await bcrypt.hash(this.clave, salt);
  next();
});

Usuario.pre('findOneAndUpdate', async function (next) {
  const update = this.getUpdate();
  if (update.clave) {
    const salt = await bcrypt.genSalt(10);
    update.clave = await bcrypt.hash(update.clave, salt);
  }
  next();
});

module.exports = mongoose.model('Usuario', Usuario);
