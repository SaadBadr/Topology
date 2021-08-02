# Topology
Provide the functionality to access, manage and store device topologies.

## Features

- Read a topology from a given JSON file and store it in the memory.
- Write a given topology from the memory to a JSON file.
- Query about which topologies are currently in the memory.
- Delete a given topology from memory.
- Query about which devices are in a given topology.
- Query about which devices are connected to a given netlist node in a given topology.


## Functions

| Function | Description | Params | return |
| ------ | ------ | ------ | ------ |
| readJSON(FileName) | adding new topology from json file | FileName: json file input path| true / false |
| writeJSON(topologyID) | write topology to out-id.json | topologyID: id of the topology to be written| true / false |
| queryTopologies() | query current topologies in the memory | - | Array of toplogies IDs |
| deleteTopology(topologyID) | delete topology from the memory | topologyID: id of the topology to be deleted | - |
| queryDevices(topologyID) | query devices of a topology | topologyID: id of the wanted topology | Array of devices IDs / false|
| queryDevicesWithNetlistNode(topologyID, netlistNodeID) | query devices of a topology with a netlist node | topologyID: id of the wanted topology, netlistNodeID: id of the wanted netlist node | Array of Objects: [ {id: deviceID, terminal: deviceConnectedTerminal} ] / false|

## Usage

Topology requires [Node.js](https://nodejs.org/) to run.

In your code include topology.js

```sh
const topologies = require("./topology.js");
```

#####  Start using the topology functionalities!

1- adding new topology from json file
```sh
topologies.readJSON(fileName);
```

2- write topology to out-id.json
```sh
topologies.writeJSON(topologyID);
```

3- query current topologies in the memory
```sh
topologies.queryTopologies();
```

4- delete topology from the memory
```sh
topologies.deleteTopology(topologyID);
```

5- query devices of a topology
```sh
topologies.queryDevices(topologyID);
```

6- query devices of a topology with a netlist node
```sh
topologies.queryDevicesWithNetlistNode(topologyID, netlistNodeID);
```
---

## Run unit testing
```sh
npm run test
```
> Note: `Jest` is a dependence to run the unit testing, make sure to install dependencies before running unit testing
```sh
npm i
```

---
> Note: for more examples, check `example.js`
