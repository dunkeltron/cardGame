class Card {
    constructor(name, picSrc, cost, text, type, cardclass) {
        this.cardName = name;
        this.cardPicture = picSrc;
        this.cardCost = cost;
        this.cardText = text;
        this.cardType = type;
        this.cardClass = cardclass;
    }
    //getters
    getName() {
        return this.cardName;
    }
    getPicSrc(){
        return this.cardPicture;
    }
    getCardCost(){
        return this.cardCost;
    }
    getCardText(){
        return this.cardText        
    }
    getCardType(){
        return this.cardType;
    }
    getCardClass(){
        return this.cardClass;
    }
    //setters
    setCardText(text){
        this.cardText=text;
    }
}