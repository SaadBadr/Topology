const { Error } = require("console");
const fs = require("fs");

class Topologies {
  constructor() {
    this.currentTopologies = [];
  }

  /**
   * Reads a topology from a given JSON file and store it in the memory
   * @date 2021-08-01
   * @param {String} fileName
   * @returns {boolean}
   */
  readJSON(fileName) {
    try {
      const topology = fs.readFileSync(fileName);
      const topologyOBJ = JSON.parse(topology);
      if (this.currentTopologies.find((t) => t.id === topologyOBJ.id)) {
        throw "Topology id already exists in memory!";
      }
      this.currentTopologies.push(topologyOBJ);
      console.log("Topology read success");
    } catch (error) {
      console.log("Topology read failed");
      console.log(error);
      return false;
    }
    return true;
  }

  /**
   * Write a given topology from the memory to a out-id.json file
   * @date 2021-08-01
   * @param {String} TopologyID
   * @returns {boolean}
   */
  writeJSON(TopologyID) {
    const topology = this.currentTopologies.find((t) => t.id === TopologyID);

    try {
      if (!topology) {
        throw "Topology not exist in memory!";
      }
      fs.writeFileSync(`out-${topology.id}.json`, JSON.stringify(topology));
      console.log("Topology write success");
    } catch (error) {
      console.log("Topology write failed");
      console.log(error.message);
      return false;
    }
    return true;
  }

  /**
   * Query about which topologies are currently in the memory
   * @date 2021-08-01
   * @returns {Array} topologies IDs
   */
  queryTopologies() {
    return this.currentTopologies.map((t) => t.id);
  }

  /**
   * Delete a given topology from memory
   * @date 2021-08-01
   * @param {String} TopologyID
   * @returns {null}
   */
  deleteTopology(TopologyID) {
    this.currentTopologies = this.currentTopologies.filter(
      (t) => t.id != TopologyID
    );
  }

  /**
   * Query about which devices are in a given topology
   * @date 2021-08-01
   * @param {String} TopologyID
   * @returns {Array} devices IDs in the topology
   */
  queryDevices(TopologyID) {
    const topology = this.currentTopologies.find((t) => t.id === TopologyID);

    if (!topology) {
      console.log("this topology doesn't exist!");
      return false;
    }

    return topology.components.map((c) => c.id);
  }

  /**
   * Query about which devices are connected to a given netlist node in a given topology
   * @date 2021-08-01
   * @param {String} TopologyID
   * @param {String} NetlistNodeID
   * @returns {Array} Objects in returned array: {String} device id, {String} connected terminal
   */
  queryDevicesWithNetlistNode(TopologyID, NetlistNodeID) {
    const topology = this.currentTopologies.find((t) => t.id === TopologyID);

    if (!topology) {
      console.log("this topology doesn't exist!");
      return false;
    }

    const devices = topology.components.reduce((result, component) => {
      const idx = Object.values(component.netlist).findIndex(
        (n) => n == NetlistNodeID
      );
      if (idx !== -1)
        result.push({
          id: component.id,
          terminal: Object.keys(component.netlist)[idx],
        });

      return result;
    }, []);

    return devices;
  }
}

module.exports = new Topologies();
