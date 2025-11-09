import AbstractCreepLogic from "./abstractCreepLogic.mjs";
import { MOVE } from "game/constants";
/** @import {BodyPartType} from "game/prototypes/creep" */

/**
 * Basic logic for a creep that runs to a target
 */

export default class RunnerCreep extends AbstractCreepLogic {
    
    constructor(creep){
        super(creep);
    }

    run(target){
        this.me().moveTo(target);
    }

    /** @returns {Array<BodyPartType>} */
    static getRequiredBodyParts(){
        return [MOVE];
    }
}