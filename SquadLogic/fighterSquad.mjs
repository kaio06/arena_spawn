import AbstractSquad from "./abstractSquad.mjs";
import shortAttackCreep from "../CreepLogic/shortAttackCreep.mjs";
import AbstractCreepLogic from "../CreepLogic/abstractCreepLogic.mjs";
import { Creep } from "game";
/**
 * Class FighterSquad
 */
export default class FighterSquad extends AbstractSquad {

    #target;

    constructor(mySpawn, myTarget){
        super(FighterSquad.getSquadComposition(), mySpawn);
        this.#target = myTarget;
    }
    

    runSquadLogic(){
        if(this.getSquadMembers().length < this.getSquadSize()){
            this.spawn();
        }
        
        if(this.getSquadMembers().filter(creep => creep.me().spawning).length > 0){
            //Wait for the squad to be fully spawned
        }
        else{
            for ( let creep of this.getSquadMembers()){
                console.log(creep.me().id);
                creep.run(this.#target)
            }
        }

    }

    /** @returns {Array<typeof AbstractCreepLogic>} */
    static getSquadComposition(){
        return [shortAttackCreep, shortAttackCreep, shortAttackCreep];
    }
}