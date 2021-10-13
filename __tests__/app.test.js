const request = require("supertest");
const app = require("../app");
const router = require("../routes/api/authRouter");

describe("Api testing", () => {
    let user = {
        email: "user-00@mail.com",
        password: "user-123",
    };

    let resUser = {
        user: {
            email: user.email,
            subscription: "starter",
        },
    };

    let data = {
        // id: "1",
        email: "user-00@mail.com",
        password: "user-123",
    };

    it("respond with 201 created", function (done) {
        request(app)
            .post("/api/users/signup")
            .send(data)
            .set("Accept", "application/json")
            .expect("Content-Type", /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });

    // it("respond with 201 created", (done) => {
    //     // jest.setTimeout(30000);
    //     const expectedResponse = resUser;

    //     request(app)
    //         .post("/api/users/signup")
    //         .send(user)
    //         .set("Accept", "application/json")
    //         .expect(function (res) {
    //             console.log("res ===>>>   ", res);
    //             // res.body.id = "some fixed id";
    //             // res.body.name = res.body.name.toLowerCase();
    //         })
    //         .expect(200)
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             expect(res.body).toEqual(expectedResponse);
    //             done();
    //         });
    // });
});
