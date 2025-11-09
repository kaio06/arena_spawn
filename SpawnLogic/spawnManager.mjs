import { StructureSpawn } from "game";
import AbstractCreepLogic from '../CreepLogic/abstractCreepLogic.mjs';

export default class SpawnManager {
    /** @type {StructureSpawn} */
    #mySpawn;
    /** @type {boolean} */
    #spawnThisTurn;

    constructor(mySpawn){
        this.#mySpawn = mySpawn;
        this.#spawnThisTurn = false;
    }

    /**
     * 
     * @param {Array<AbstractCreepLogic>} listOfCreeps 
     * @param {typeof AbstractCreepLogic} creepType 
     */
    spawnACreep(listOfCreeps, creepType){
        if(this.availableForSpawn()==true){
            let newSpawnCreep = /** @satisfies {Creep}*/ this.#mySpawn.spawnCreep(creepType.getRequiredBodyParts()).object;
            let newCreep = new creepType(newSpawnCreep);
            listOfCreeps.push(newCreep);
            this.setSpawnThisTurn();
        }    
    }

    availableForSpawn(){
        if((this.#mySpawn.spawning == null) && (this.#spawnThisTurn == false)){
            return true;
        }
        else{
            return false;
        }
    }

    setSpawnThisTurn(){
        this.#spawnThisTurn = true;
    }

    resetSpawnThisTurn(){
        this.#spawnThisTurn = false;
    }

}
