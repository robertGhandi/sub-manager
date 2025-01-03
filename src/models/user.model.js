import { Schema, model } from "mongoose";

const userSchema = new Schema(
	{
		fullName: {
			type: String,
			required: [true, "please enter full name"],
		},

		email: {
			type: String,
			unique: true,
			lowercase: true,
			required: [true, "please enter email"],
		},
		password: {
			type: String,
			min: 8,
			required: true,
		},
		verified: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = model("User", userSchema);
export default User;
