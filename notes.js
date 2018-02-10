Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester3' );

Game.creeps[ "Harvester3" ].memory.role = "harvester"


for ( var name in Game.creeps ) {
	var creep = Game.creeps[name];
