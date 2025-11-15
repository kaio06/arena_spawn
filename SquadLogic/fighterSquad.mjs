import AbstractSquad from "./abstractSquad.mjs";
import shortAttackCreep from "../CreepLogic/shortAttackCreep.mjs";
import AbstractCreepLogic from "../CreepLogic/abstractCreepLogic.mjs";
import { Creep, findInRange, getObjectsByPrototype, findClosestByRange } from "game";
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

            let closestTarget = this.findClosestennemiesInRange(5);
            if(closestTarget != null){
                for ( let creep of this.getSquadMembers()){
                    creep.run(closestTarget)
                }
            }
        }
        else{
            let closestTarget = this.findClosestennemiesInRange(5);
            console.log("Closest target: " + closestTarget);
            let variableTarget = this.#target;
            if(closestTarget != null){
                variableTarget = closestTarget;
            }
            for ( let creep of this.getSquadMembers()){
                creep.run(variableTarget)
            }
        }

    }

    /** @returns {Array<typeof AbstractCreepLogic>} */
    static getSquadComposition(){
        return [shortAttackCreep, shortAttackCreep, shortAttackCreep,shortAttackCreep];
    }

    /**
     * 
     * @param {Number} range 
     * @returns {Creep}
     */
    findClosestennemiesInRange(range){
        let barycentre = this.getSquadPosition();
        let ennemies = getObjectsByPrototype(Creep).filter(creep => creep.my != true && creep.spawning != true);
        let ennemies_inRange = findInRange(barycentre,ennemies, range);
        let closestTarget = findClosestByRange(barycentre, ennemies_inRange);
        return closestTarget;
    }
}