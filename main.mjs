import { getObjectsByPrototype } from 'game/utils';
import AbstractSquad from './SquadLogic/abstractSquad.mjs';
import shortAttackCreep from './CreepLogic/shortAttackCreep.mjs';   
import { StructureSpawn } from 'game';
import { Flag } from 'game/prototypes/flag';
import AbstractCreepLogic from './CreepLogic/abstractCreepLogic.mjs';
import FighterSquad from './SquadLogic/fighterSquad.mjs';
import SpawnManager from './SpawnLogic/spawnManager.mjs';
import FlagRunnerSquad from './SquadLogic/flagRunnerSquad.mjs';

/** @type {Array<AbstractSquad>} */
let squadList = []; 
/** @type {StructureSpawn} */
let mySpawn = getObjectsByPrototype(StructureSpawn).find(spawn => spawn.my);

/** @type {StructureSpawn} */
let ennemySpawn = getObjectsByPrototype(StructureSpawn).find(spawn => !spawn.my);

/** @type {Array<Flag>} */
let flags = getObjectsByPrototype(Flag);

/** @type {SpawnManager} */
let mySpawnManager = new SpawnManager(mySpawn);

export function loop() {
    mySpawnManager.resetSpawnThisTurn();
    if(squadList.length < 3){
        console.log("Creating new squad...");
        if(squadList.length ==0){
            squadList.push(new FlagRunnerSquad(mySpawnManager, flags));
        }
        else{
            squadList.push(new FighterSquad(mySpawnManager, ennemySpawn));
        }
    }

    for(const squad of squadList){
        console.log("Running squad logic..."); 
        squad.runSquadLogic();
    }
}