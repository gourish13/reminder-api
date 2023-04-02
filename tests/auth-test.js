const server = require("../server");
const chai = require("chai");
chai.should();

chai.use(require("chai-http"));

describe("Auth Tests", () => {
  describe("GET /ping", () => {
    it("should get PONG", (done) => {
      chai
        .request(server)
        .get("/ping")
        .end((_, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          done();
        });
    });
  });
});
