const { login } = require("../../services/auth");

const loginController = async (req, res) => {
    const { email, password } = req.body;
    const token = await login(email, password);

    res.json({
        token: token,
        user: {
            email: email,
            subscription: "starter",
        },
    });
};

module.exports = loginController;
