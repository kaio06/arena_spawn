import AbstractSquad from "./abstractSquad.mjs";

/**
 * Class FighterSquad
 */
export default class FighterSquad extends AbstractSquad {

    constructor(squadSize){
        super(squadSize);
    }

    runSquadLogic(){
        console.log("Running squad");
    }
}