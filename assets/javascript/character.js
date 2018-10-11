
class Character{
    
    constructor(aff,MHP,CHP,buffsArr){
        this.affiliation=aff;
        this.mHP = MHP;
        this.cHP=CHP;
        this.buffs=buffsArr
        this.block =0;
    }
    //manipulators
    calcDamage(dam,buffs){
        var totalDam=dam;
        var multiTotal=1;
        buffs.forEach(element => {
            if(element.isDamage() && element.isAdditive()){
                totalDam+=element.modifier(dam);
            }            
        });
        buffs.forEach(element => {
            if(element.isDamage() && element.isMultiplicative()){
                multiTotal*=element.modifier(multiTotal);
            }            
        });
        return totalDam*multiTotal;
    }
    takeDamage(dam){
        this.cHP= this.cHp+this.block - dam;
    }
    addBlock(blockNum){
        this.block=this.block+blockNum;
    }
    addBuff(newBuff){
        this.buffs.push(newBuff);
    }
    removeBuff(buffTarg){
        this.removeBuff(buffTarg);
    }
    iterateBuffs(){
        this.buffs.forEach(element => {
            element.iterateBuff();
        });
    }
    
    endTurnCycle(){
        
        //this.iterateBuffs();
    }
    startTurnCycle(){
        this.block=0;
        resetEnergy();
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