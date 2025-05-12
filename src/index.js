import app from "./app.js";
import dotenv from "dotenv";
import databaseConnection from "./db/DB.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, "../.env"),
});

const PORT = process.env.PORT || 9000;
databaseConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Failed to run the server", error);
        process.exit(1);
    });
