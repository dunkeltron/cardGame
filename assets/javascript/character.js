
class Character {

    constructor(aff, MHP, CHP, buffsArr, picSRC) {
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
class Player extends Character{
    constructor(aff, MHP, CHP, buffsArr, picSRC, deck, mNRG,cNRG) {
        super(aff, MHP, CHP, buffsArr, picSRC);
        this.deck = deck;
        this.mEnergy = mNRG;
        this.cEnergy = cNRG;
        this.hand=[];
        this.deckClone=[];
        this.discardPile=[];
        this.exhaustPile=[];
        console.log(this);
    }

    //getters
    getHand(){
        return this.hand;
    }
    getEnergy(){
        return this.cEnergy;
    }
    getMaxEnergy() {
        return this.mEnergy;
    }
    getDeckList() {
        return this.deck;
    }
    getDeckSize(){
        return this.deckClone.length
    }
    getDiscardSize(){
        return this.discardPile.length;
    }
    getExhaustSize(){
        return this.exhaustPile.length;
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
        //mutators
        calcDamage(dam,buffs){
            super.calcDamage(dam,buffs);
        }
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
        drawCards(amount){
            for(i=0;i<amount;i++){
                if(this.deckClone.length==0){
                    this.deckClone = this.discardPile;
                    this.discardPile =[];
                    
                }
                this.hand.push(this.deckClone.pop())
            }
        }
        endTurnCycle() {
    
            //this.iterateBuffs();
        }
        startTurnCycle() {
            this.block = 0;
            resetEnergy();
        }
        initializeCombat() {
            
            
            this.setEnergy(this.getMaxEnergy());
            console.log(this);
            this.deckClone= this.getDeckList();
            this.buffs.forEach(element => {
                if (element.when == "combatStart") {
                    buffs.push(element);
                }
            });
            this.drawCards(5);
        }
}