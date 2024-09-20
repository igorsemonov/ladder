
const ladder = {
    i: 0,

    up: function(){
        this.i++;
        return this;
    },

    down: function(){
        this.i--;
        return this;
    },

    showStep: function(){
        console.log(this.i);
        return this;
    }
};

ladder.down().down().down().showStep().down().down().down().showStep().up().showStep();