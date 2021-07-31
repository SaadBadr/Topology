const x = require("./topology.js");
console.log(x)

x.readJSON("ex.json")
// x.writeJSON("top1")
// x.queryTopologies()
const y=x.queryDevicesWithNetlistNode('top1', 'n1')
console.log(y)
// console.log(x.queryTopologies())
// console.log(x.queryDevices('top1'))
// x.deleteTopology('top1')
// console.log(x.queryTopologies())

const m = ['saad', 'ahmed', 'mohav']

// console.log(m.findIndex(e=>e=='ahmeds'))