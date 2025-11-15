import { Creep } from "game/prototypes";
import { ATTACK, MOVE, ERR_NOT_IN_RANGE } from "game/constants";
import AbstractCreepLogic from "./abstractCreepLogic.mjs";

/** @import {BodyPartType} from "game/prototypes/creep" */

export default class shortAttackCreep extends AbstractCreepLogic {
    
    constructor(creep){
        super(creep)
    }

    run(target){
        if(!this.isBeeingSpawned()){
            if(this.me().attack(target) == ERR_NOT_IN_RANGE) {
            this.me().moveTo(target);
           }
        }
    }
    /** @returns {Array<BodyPartType>} */
    static getRequiredBodyParts(){
        return [ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE,ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE,ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE, ATTACK, MOVE]
    }
}