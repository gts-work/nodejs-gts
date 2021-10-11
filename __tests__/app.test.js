const request = require("supertest");
const app = require("../app");
const router = require("../routes/api/authRouter");

describe("Api testing", () => {
    const user = {
        email: "user-00@mail.com",
        password: "user-123",
    };

    const resUser = {
        user: {
            email: user.email,
            subscription: "starter",
        },
    };

    it("Create a user", (done) => {
        jest.setTimeout(30000);
        const expectedResponse = resUser;

        request(app)
            .post("/api/users/signup")
            .send(user)
            .set("Accept", "application/json")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual(expectedResponse);
                done();
            });
    });
});
