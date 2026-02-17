import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },

    senha: {
      type: String,
      required: true
    },

    telefone: {
      type: String
    },

    cep: {
      type: String
    },

    endereco: {
      type: String
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user"
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Usuario", usuarioSchema);