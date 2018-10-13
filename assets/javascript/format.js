
function drawEnergy(amount) {
    $("#energy-Amount").text(amount + " / " + 3);
}
function drawDrawPile(amt) {
    $("#draw-Pile").text(amt);
}

function drawDiscardPile(amt) {
    $("#discard-Pile").text(amt);
}
function drawExhaustPile(amt) {
    $("#exhaust-Pile").text(amt);
}
function drawCardsInHand(arr) {
    arr.forEach(element => {
        var card = $("<div>").attr("class","card");
        var topRow = $("<div>");
        var energyCost = $("<div>").text(element.getCardCost());
        var cardTitle = $("<div>").text(element.getName());
        var pictureRow = $("<div>");
        var cardPicture = $("<img src = " + element.getPicSrc() + ">");
        var cardType = $("<div>").text(element.getCardType());
        var cardDescription = $("<div>").text(element.getCardText());
        card.attr("class","card");
        card.attr("name",element.getName());
        topRow.attr("class","top-row");
        energyCost.attr("class","energy-cost");
        cardTitle.attr("class","card-title");
        pictureRow.attr("class","picture-row");
        cardPicture.attr("class","card-picture");
        cardType.attr("class","card-type");
        cardDescription.attr("class","card-description");
        topRow.append(energyCost, cardTitle);
        pictureRow.append(cardPicture.append(cardType));
        card.append(topRow, pictureRow, cardDescription);
        $("#hand").append(card)
    });
}
function draw(character) {
    if (character.getAffiliation() === 'player') {
        $("#player-Picture-Zone").append($("<img src =" + character.getPic() + ">"));
        $("#player-Health-Bar").append($("<div id=health-Bar>").text(character.getCHP() + " / " + character.getMHP()));
        drawCardsInHand(character.getHand());
        drawEnergy(character.getEnergy());
        drawDrawPile(character.getDeckSize());
        drawExhaustPile(character.getExhaustSize());
        drawDiscardPile(character.getDiscardSize());
    }
    if (character.getAffiliation() === "enemy") {
        $(".enemy-picture-zone").append($("<img src =" + character.getPic() + ">"));
        $(".health-bar").append($("<div id=health-Bar>").text(character.getCHP() + " / " + character.getMHP()));
    }
}