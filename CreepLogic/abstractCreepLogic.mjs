import { Creep, Structure} from "game/prototypes";
import { getObjectsByPrototype } from "game";

/** @import {BodyPartType} from "game/prototypes/creep" */

export default class AbstractCreepLogic {
    /** @type {Creep} */
    #myCreep;
    
    /**
     * 
     * @param {Creep} creep 
     */
    constructor(creep){
        if(this.constructor === AbstractCreepLogic){
                throw new Error("Abstract classes can't be instantiated.");
        }
        this.#myCreep = creep;
    }
    /** 
     * @param {Creep | Structure | null} target
     */
    run(target = undefined){
        throw new Error("Method 'run' must be implemented.");
    }
    /** @returns {Array<BodyPartType>} */
    static getRequiredBodyParts(){
        throw new Error("Method 'getRequiredBodyParts()' must be implemented.");
    }
    /** @returns {boolean} */
    isBeeingSpawned(){
        return this.#myCreep.spawning;
    }

    me(){
        return this.#myCreep;
    }

    /**
     * 
     * @returns {boolean}
     */
    isDead(){
        return this.#myCreep.hits <= 0; 
    }
}