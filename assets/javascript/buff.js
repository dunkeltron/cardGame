class Buff{
    constructor(duration,effect,when){
        this.duration=duration;
        this.effect = effect;
        this.when = when;
    }

    //getters
    getDuration(){
        return this.duration;
    }
    getEffect(){
        return this.effect;
    }
    getWhen(){
        return this.when;
    }

    //setters
    setDuration(amount){
        this.duration += amount;
    }
}