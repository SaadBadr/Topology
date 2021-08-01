const topology = require("./topology");

test("properly reads a topology", () => {
  topology.readJSON("ex.json");
});
