
class character{
    character={
        affiliation="", //player, ally, or enemy
        mHP='',         //max health points
        cHP='',         //current health points
        buffs='',       //what buffs exist on the character
    }
    constructor(aff,MHP,CHP,buffsArr){
        this.affiliation=aff;
        this.mHP = MHP;
        this.cHP=CHP;
        this.buffs=buffsArr
    }
}