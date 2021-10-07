const { patchUser } = require("../../services/auth");
const { WrongParametersError } = require("../../helpers/responseError");

const patchUserControler = async (req, res) => {
    const userId = req.user._id;
    const subscriptionList = ["starter", "pro", "business"];

    for (const itemsFromBody in req.body) {
        console.log("patchUserControler ~ itemsFromBody ==>> ", itemsFromBody);
        if (
            itemsFromBody === "subscription" &&
            subscriptionList.includes(req.body.subscription)
        ) {
            const updateUserSubscription = await patchUser(userId, req.body);

            if (!updateUserSubscription) {
                throw new WrongParametersError("Not Found");
            }

            return res.json({
                status: "success",
                message: updateUserSubscription,
            });
        }
    }

    throw new WrongParametersError("Bad parameter subscription");
};

module.exports = patchUserControler;
