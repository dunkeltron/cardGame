
var deck = [];
for (i = 0; i < 5; i++) {
    deck.push(new Card('attack', "assets/images/cardPics/attack.png", 1,  "Deal 6 damage to an enemy.", "Attack", "builder"));
    deck.push(new Card("defend", "assets/images/cardPics/attack.png", 1,  "Gain 5 Block.", "Skill", "builder"));
}

var testChar = new Player('player', 75, 75, [], "assets/images/charPics/builderPlaceholder.png", deck, 3, 3);
var testEnemy = new Character("enemy", 12, 12, [], "assets/images/charPics/badGuyPlaceholder.png");
function startCombat() {
    var actors = [testChar, testEnemy];
    actors.forEach(element => {
        
        element.initializeCombat();
        draw(element);
    });
    //startCombatBuffs();

}
$("#hand").on("click",'.card',function(element){
    
    console.log("wedaBest");
})
startCombat();





























//deprecated but too scared to commit to a delete

// $("#start-Game-Button").click(function () {
//     //$("#main-Menu-View").attr("visibility", "hidden");
//     var myNode = $("#main-Menu-View");
//     for (i = 0; i < myNode.children; i++) {
//         myNode[0].childNodes[i].style.visbility = ("hidden");
//     }
//     myNode.removeClass("visible");
//     myNode.addClass("invisible");

//     myNode = $("#top-Bar");
//     myNode[0].classList.remove("invisible");
//     myNode[0].style.visbility = ("visible");
//     console.log(myNode[0].children);
//     allChildsVisible(myNode[0]);


//     myNode = $("#combat-View");
//     myNode.removeClass("invisible");
//     myNode.addClass("visible");
//     for (i = 0; i < myNode.children; i++) {
//         myNode[0].childNodes[i].style.visbility = ("visible");
//     }
//     console.log("hello ian");
// });
// function allChildsVisible(element) {
//     console.log(element)
//     if (element.children[0] == null) {
//         element.style.visbility = ("visible");
//         element.classList.remove("invisible");
//     }
//     else {
//         console.log(element.children[i]);
//         for(i=0; i < element.children.length; i++){
//             console.log("I found Something");
//             allChildsVisible(element.children[i]);
//         }
//     }

// }