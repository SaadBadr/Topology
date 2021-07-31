const x = require("./topology.js");
console.log(x)

x.readJSON("ex.json")
x.writeJSON("top1")
x.queryTopologies()
console.log(x.queryTopologies())
console.log(x.queryDevices('top1'))
x.deleteTopology('top1')
console.log(x.queryTopologies())
