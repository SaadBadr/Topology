const topology = require("./topology");
const fs = require("fs");

test("properly read and write a topology", () => {
  expect(topology.readJSON("ex.json")).toBe(true);
  expect(topology.readJSON("nothere.json")).toBe(false);

  expect(topology.writeJSON("top1")).toBe(true);
  expect(topology.writeJSON("top10")).toBe(false);

  const writtenFile = JSON.parse(fs.readFileSync("out-top1.json"));
  const originalFile = JSON.parse(fs.readFileSync("ex.json"));

  expect(writtenFile).toEqual(originalFile);
});

test("properly store ids in memory", () => {
  console.log(topology.queryTopologies());
  expect(topology.queryTopologies()).toEqual(["top1"]);
});

test("properly store only unique ids in memory", () => {
  expect(topology.readJSON("ex.json")).toBe(false);
});

test("properly retrieve topology devices", () => {
  expect(topology.queryDevices("top10")).toBe(false);
  expect(topology.queryDevices("top1")).toEqual(["res1", "m1"]);
});

test("properly retrieve topology devices connected to a netlist node", () => {
  expect(topology.queryDevicesWithNetlistNode("top10", "x")).toBe(false);

  expect(topology.queryDevicesWithNetlistNode("top1", "vdd")).toEqual([
    {
      id: "res1",
      terminal: "t1",
    },
  ]);
});

test("properly delete topology from memory", () => {
  topology.deleteTopology("top1");
  expect(topology.queryTopologies()).toEqual([]);
});
