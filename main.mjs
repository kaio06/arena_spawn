import { getObjectsByPrototype } from 'game/utils';
import FighterSquad from './SquadLogic/fighterSquad.mjs';
import AbstractSquad from './SquadLogic/abstractSquad.mjs';
import shortAttackCreep from './CreepLogic/shortAttackCreep.mjs';   
import { StructureSpawn } from 'game';
import { Flag } from 'game/prototypes/flag';
import AbstractCreepLogic from './CreepLogic/abstractCreepLogic.mjs';

/** @type {Number} */
let totalSquad = 0;
/** @type {Array<AbstractSquad>} */
let squadList = []; 
/** @type {StructureSpawn} */
let mySpawn = getObjectsByPrototype(StructureSpawn).find(spawn => spawn.my);

/** @type {StructureSpawn} */
let ennemySpawn = getObjectsByPrototype(StructureSpawn).find(spawn => !spawn.my);

/** @type {Array<Flag>} */
let flags = getObjectsByPrototype(Flag);
/** @type {Array<AbstractCreepLogic>} */
let creeps = []


export function loop() {
    if(mySpawn.spawning == null){
        spawnACreep(creeps,mySpawn, shortAttackCreep);
    }    
    

    for (const creep of creeps){
        creep.run(ennemySpawn);
    }

    /*if(totalSquad <3){
        squadList.push(new FighterSquad(3));
        totalSquad=totalSquad+1;
    }

    for(const squad of squadList){ 
        squad.run*/
}
/**
 * 
 * @param {Array<AbstractCreepLogic>} listOfCreeps 
 * @param {StructureSpawn} mySpawn 
 * @param {typeof AbstractCreepLogic} creepType 
 */
function spawnACreep(listOfCreeps, mySpawn, creepType){
    let newSpawnCreep = /** @satisfies {Creep}*/ mySpawn.spawnCreep(creepType.getRequiredBodyParts()).object;
    let newCreep = new creepType(newSpawnCreep);
    listOfCreeps.push(newCreep);
}