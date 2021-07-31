const fs = require('fs');
const { promisify } = require('util');

class Topology {
    constructor(id, components) {
        this.id = id;
        this.components = components;
    }
};

class Topologies {

    constructor() {
        this.currentTopologies = [];
    }

    readJSON(fileName) {
        try {
            const topology = fs.readFileSync(fileName);
            const topologyOBJ = JSON.parse(topology);
            this.currentTopologies.push(topologyOBJ);
            console.log("Topology read success");
    
        } catch (error) {
            console.log("Topology read failed");
            console.log(error);
        }        
    }

    writeJSON(TopologyID) {
        const topology = this.currentTopologies.find(t => t.id === TopologyID)
        
        if(!topology)
        {
            console.log("this topology doesn't exist!");
            return;
        }
        
        try {
            fs.writeFileSync("outpus.json", JSON.stringify(topology))
            console.log("Topology write success");
    
        } catch (error) {
            console.log("Topology write failed");
            console.log(error);   
        }

    }

    // queryTopology() {

    // }

    // deleteTopology() {

    // }

    // queryDevices(TopologyID) {

    // }

    // queryDevicesWithNetlistNode(TopologyID, NetlistNodeID) {

    // }
}


module.exports = new Topologies()