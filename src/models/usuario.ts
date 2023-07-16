import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    id: { type: String },
    nome: { type: String, required: [true, "nome obrigatorio"] },
  },
)

const UserModel = mongoose.model("user", UserSchema)

export default UserModel;