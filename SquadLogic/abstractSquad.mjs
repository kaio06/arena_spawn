import { Creep } from "game/prototypes";
import AbstractCreepLogic from "../CreepLogic/abstractCreepLogic.mjs";
import SpawnManager from "../SpawnLogic/spawnManager.mjs";
/**
 * Abstract Class AbstractSquad
 */

export default class AbstractSquad {
    /*Private Fields*/
    /** @type {boolean} */
    #squadComplete;
    /** @type {Array<AbstractCreepLogic>} */     
    #squadMembers;
    /** @type {Number} */
    #squadSize;
    
    /** @type {Array<typeof AbstractCreepLogic>} */
    #squadComposition = [];
    /** @type {SpawnManager} */
    #mySpawnManager
    /*Public Fields*/


    /**
     * @param {Array<typeof AbstractCreepLogic>} squadComposition
     * @param {SpawnManager} mySpawnManager
     */
    constructor(squadComposition, mySpawnManager){
            if(this.constructor === AbstractSquad){
                throw new Error("Abstract classes can't be instantiated.");
            }
            this.#squadComplete = false;
            this.#squadMembers = [];
            this.#squadSize = squadComposition.length;
            this.#squadComposition = squadComposition;
            this.#mySpawnManager = mySpawnManager;
    }

    checkSquadComplete(){
        if(this.#squadMembers.length >= this.#squadSize){
            this.#squadComplete = true;
        }
    }
    /**
     * 
     * @returns {boolean}
     */
    isSquadReady(){
        let creepBeingSpawned = this.#squadMembers.filter(member => member.isBeeingSpawned() != true)
        if ((creepBeingSpawned.length > 0) && (this.#squadComplete ==true)) {
            return true;
        }
        else{
            return false;
        }
    }

    runSquadLogic(){
        throw new Error("Method 'runSquadLogic()' must be implemented.");
    }

    /** @returns {Array<typeof AbstractCreepLogic>} */
    reportSquadComposition(){
        return this.#squadComposition;
    }
    /** @returns {Array<AbstractCreepLogic>} */
    getSquadMembers(){
        return this.#squadMembers;
    }
    /** @returns {Number} */
    getSquadSize(){
        return this.#squadSize;
    }

    /** @returns {Array<typeof AbstractCreepLogic>} */
    static getSquadComposition(){
        throw new Error("Method 'runSquadLogic()' must be implemented.");
    }

    spawn(){
        if(this.#mySpawnManager.availableForSpawn()==true){
            console.log("Try to spawn for squad...");  
            let creepLogicToSpawn = this.#squadComposition[this.#squadMembers.length];
            this.#mySpawnManager.spawnACreep(this.#squadMembers, creepLogicToSpawn);
            console.log("total spawned creeps: " + this.#squadMembers.length);
        }
    }
 }