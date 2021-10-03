const { registration } = require("../../services/auth");

const registrationController = async (req, res) => {
    const { email, password } = req.body;
    console.log("registrationController ~ password: ==>  ", password);
    console.log("registrationController ~ email: ==>  ", email);

    await registration(email, password);

    res.json({
        user: {
            email: email,
            subscription: "starter",
        },
    });
};

module.exports = registrationController;
