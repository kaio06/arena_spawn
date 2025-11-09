import RunnerCreep from "../CreepLogic/runnerCreep.mjs";
import AbstractSquad from "./abstractSquad.mjs";
import AbstractCreepLogic from "../CreepLogic/abstractCreepLogic.mjs";

export default class FlagRunnerSquad extends AbstractSquad {
    
    #flagList=[]
    
    constructor(mySpawnManager, flagList){
        super(FlagRunnerSquad.getSquadComposition(), mySpawnManager);
        this.#flagList = flagList;
    }
    
    runSquadLogic(){
        if(this.getSquadMembers().length < this.getSquadSize()){
            this.spawn();
        }
        let i=0
        for ( let creep of this.getSquadMembers()){
                creep.run(this.#flagList[i]);
                i++;
            }
    }

    /** @returns {Array<typeof AbstractCreepLogic>} */
    static getSquadComposition(){
        return [RunnerCreep, RunnerCreep];
    }
}