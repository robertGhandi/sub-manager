import Joi from "joi";

const loginUserSchema = object({
    
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8),
    
}).options({ abortEarly: false })


const validator = (validationSchema) => (req, res, next) => {
	try {
		const result = validationSchema.validate(req.body);
		if (result.error) {
			return res.status(400).json({
				status: "error",
				message: "Validation error",
				data: result.error.details,
			});
		}

		req.body = result.value;

		next();
	} catch (error) {
		res.status(400).json({
			status: "error",
			message: "Validation error",
			data: error.message,
		});
	}
};

export const validateLoginUser = validator(loginUserSchema);