// EXAMPLE FILE

// Importing the package

const topologies = require("./topology.js");

// adding new topology from ex.json

topologies.readJSON("ex.json");

// query current topologies in the memory

let currentTopologies = topologies.queryTopologies();
console.log(`topologies in memory: ${currentTopologies}`);

// query devices of a topology 'ex: 1st stored topology'

let devices = topologies.queryDevices(currentTopologies[0]);
console.log(`devices in ${currentTopologies[0]}: ${devices}`);

// query devices of a topology with a netlist node

devices = topologies.queryDevicesWithNetlistNode(currentTopologies[0], "n1");
console.log(
  `devices connect to n1 in ${currentTopologies[0]}:\n ${JSON.stringify(
    devices
  )}`
);

// write topology to output.json
topologies.writeJSON(currentTopologies[0]);

// delete topology
topologies.deleteTopology(currentTopologies[0]);

// query current topologies in the memory

currentTopologies = topologies.queryTopologies();
console.log(`topologies in memory: ${currentTopologies}`);

// done
console.log("-------DONE-------");
