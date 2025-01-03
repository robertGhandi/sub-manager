import { object, string } from "joi";

const loginUserSchema = object({
    
    email: string().email().required(),
    password: string().required().min(8),
    
}).options({ abortEarly: false })


const validator = (validationSchema) => (req, res, next) => {
	try {
		const result = validationSchema.validate(req.body);
		if (result.error) {
			return res.status(400).json({
				status: "error",
				message: "Validation error",
				data: result.error,
			});
		}

		req.body = result.value;

		next();
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Validation error",
			data: error,
		});
	}
};

export const validateLoginUser = validator(loginUserSchema);