const app = require("../app");
const { connectMongo } = require("../model/contacts");

const PORT = process.env.PORT || 3001;

const start = async () => {
    await connectMongo();

    app.listen(PORT, () => {
        console.log(`Server running. Use our API on port: ${PORT}`);
    });
};

start();
