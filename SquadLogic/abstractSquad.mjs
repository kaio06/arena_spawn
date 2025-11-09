import { Creep } from "game/prototypes";

/**
 * Abstract Class AbstractSquad
 */

export default class AbstractSquad {
    /*Private Fields*/
    /** @type {boolean} */
    #squadComplete;
    /** @type {Array<Creep>} */     
    #squadMembers;
    /** @type {Number} */
    #squadSize; 

    /*Public Fields*/


    /**
     * @param {Number} squadSize
     */
    constructor(squadSize){
            if(this.constructor === AbstractSquad){
                throw new Error("Abstract classes can't be instantiated.");
            }
            this.#squadComplete = false;
            this.#squadMembers = [];
            this.#squadSize = squadSize;
    }

    checkSquadComplete(){
        if(this.#squadMembers.length >= this.#squadSize){
            this.#squadComplete = true;
        }
    }

    runSquadLogic(){
         throw new Error("Method 'runSquadLogic()' must be implemented.");
    } 
}