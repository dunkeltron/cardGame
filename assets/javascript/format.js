function draw(character){
    if (character.getAffiliation()==='player'){
        $("#player-Picture-Zone").append($("<img src ="+character.getPic()+">"));
        $("#player-Health-Bar").append($("<div id=health-Bar>").text(character.getCHP()+" / "+character.getMHP()));
    }
    if (character.getAffiliation()==="enemy"){
        $(".enemy-picture-zone").append($("<img src ="+character.getPic()+">"));
        $(".health-bar").append($("<div id=health-Bar>").text(character.getCHP()+" / "+character.getMHP()));
    }
}
function drawEnergy(amount){
    $("#energy-Amount").text(amount+ " / "+3);
}
drawEnergy(4);