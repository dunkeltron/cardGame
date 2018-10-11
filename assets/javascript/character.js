
class character{
    
    constructor(aff,MHP,CHP,buffsArr){
        this.affiliation=aff;
        this.mHP = MHP;
        this.cHP=CHP;
        this.buffs=buffsArr
    }
    //manipulators
    addBuff(newBuff){
        this.buffs.push(newBuff);
    }
    removeBuff(buffTarg){
        this.removeBuff(buffTarg);
    }
    //getters
    getAffiliation(){
        return this.affiliation;
    }
    getMHP(){
        return this.mHP;
    }
    getCHP(){
        return this.cHP;
    }
    getBuffs(){
        return this.buffs;
    }
    //setters
    setAffiliation(aff){
        this.affiliation=aff;
    }
    setMHP(newMHP){
        this.mHP=newMHP;
    }
    setCHP(newCHP){
        this.cHP=newCHP;
    }
    setBuffs(newBuffs){
        this.buffs=newBuffs;
    }
}