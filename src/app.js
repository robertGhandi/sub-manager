import { config } from "dotenv";
config();
import authRoutes from "./routes/auth.routes";
import express, { json, urlencoded } from "express";
const app = express();
import cors from "cors";

import { join } from "path";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(join(__dirname, "public")));
app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
	res.sendFile(join(__dirname, "public", "landing-page", "index.html"));
});

app.get("/dashboard", (req, res) => {
	res.sendFile(join(__dirname, "public", "dashboard", "dashboard.html"));
});

app.get("/reset-password", (req, res) => {
	res.sendFile(
		join(__dirname, "public", "resetPassword", "resetPassword.html")
	);
});

export default app;
