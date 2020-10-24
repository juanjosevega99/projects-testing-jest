const request = require("supertest");
const { response } = require("../app");
const app = require("../app");

describe("test express", () => {
  test("Should respond to GET method", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
