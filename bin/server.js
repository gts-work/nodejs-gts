const app = require("../app");
const { connectMongo } = require("../model/contacts");

const PORT = process.env.PORT || 3001;

const start = async () => {
    try {
        await connectMongo();
        console.log("Database connection successful");

        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
        });
    } catch (err) {
        console.error(
            `Failed to launch application with error: ${err.message}`
        );
        process.exitCode = 1;
    }
};

start();
