
class Character {

    constructor(aff, MHP, CHP, buffsArr, picSRC) {
        if (aff == 'player') {
            return new Player()
        }
        else {

        }
        this.affiliation = aff;
        this.mHP = MHP;
        this.cHP = CHP;
        this.buffs = buffsArr
        this.block = 0;
        this.pic = picSRC;
    }
    //manipulators
    calcDamage(dam, buffs) {
        var totalDam = dam;
        var multiTotal = 1;
        buffs.forEach(element => {
            if (element.isDamage() && element.isAdditive()) {
                totalDam += element.modifier(dam);
            }
        });
        buffs.forEach(element => {
            if (element.isDamage() && element.isMultiplicative()) {
                multiTotal *= element.modifier(multiTotal);
            }
        });
        console.log(Math.floor(totalDam * multiTotal));
        return Math.floor(totalDam * multiTotal);
    }
    takeDamage(dam) {
        dam = this.block - dam;
        if (dam <= 0) {
            this.cHP = this.cHP + dam;
        }
        console.log(this.cHP);

    }
    heal(amount) {
        this.cHP += amount;
    }
    addBlock(blockNum) {
        this.block = this.block + blockNum;
    }
    addBuff(newBuff) {
        this.buffs.push(newBuff);
    }
    removeBuff(buffTarg) {
        this.removeBuff(buffTarg);
    }
    iterateBuffs() {
        this.buffs.forEach(element => {
            element.iterateBuff();
        });
    }

    endTurnCycle() {

        //this.iterateBuffs();
    }
    startTurnCycle() {
        this.block = 0;
        resetEnergy();
    }
    initializeCombat() {
        this.buffs.forEach(element => {
            if (element.when == "combatStart") {
                buffs.push(element);
            }
        });
    }
    //getters
    getPic() {
        return this.pic;
    }
    getAffiliation() {
        return this.affiliation;
    }
    getMHP() {
        return this.mHP;
    }
    getCHP() {
        return this.cHP;
    }
    getBuffs() {
        return this.buffs;
    }
    //setters
    setPic(src) {
        this.pic = src;
    }
    setAffiliation(aff) {
        this.affiliation = aff;
    }
    setMHP(newMHP) {
        this.mHP = newMHP;
    }
    setCHP(newCHP) {
        this.cHP = newCHP;
    }
    setBuffs(newBuffs) {
        this.buffs = newBuffs;
    }
}
class Player extends Character {
    constructor(aff, MHP, CHP, buffsArr, picSRC, deck, mNRG,cNRG) {
        this.affiliation = aff;
        this.mHP = MHP;
        this.cHp = CHP;
        this.buffs = buffsArr;
        this.pic = picSRC;
        this.deck = deck;
        this.mEnergy = mNRG;
        this.cEnergy = cNRG;
    }
    //mutators
    addToDeck(card){
        this.deck.push(card);
    }
    removeFromDeck(card){
        this.deck.forEach(element => {
           if(element.getName()==card.getName()){
                deck.pop(element);
           } 
        });
    }
    spendEnergy(amt){
        this.cEnergy = this.cEnergy - amt;
    }
    //getters
    getCEnergy(){
        return this.cEnergy;
    }
    getMaxEnergy() {
        return this.maxEnergy;
    }
    getDeckList() {
        return this.deck;
    }
    //setters
    setMaxEnergy(amt){
        this.maxEnergy = amt;
    }
    setDeckList(deckArr){
        this.deck = deckArr;
    }
    setEnergy(amt){
        this.cEnergy = amt;
    }
}