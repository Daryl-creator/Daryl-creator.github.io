var aircraft = {
	name: 'SUPER SPEEDO',
	model: 'fantastamania 1171',
	engine: ['space warp company - xes34', 7]
}

function getTheEngine (obj, key) {
	return obj[key];
}

console.log(getTheEngine(aircraft, 'engine'))