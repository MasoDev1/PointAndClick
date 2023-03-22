document.getElementById("main-Title").innerText = "Point and click adventure";

const characterOffset = 16;

const gameWindow = document.getElementById("gameWindow");
const mainCharacter = document.getElementById("mainCharacter");

gameWindow.onclick = function(e){
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;

    mainCharacter.style.left = x- characterOffset + "px";
    mainCharacter.style.top = y - characterOffset + "px";

    switch(e.target.id){
        case "door1":
        console.log("grrr get away baby dont hurt me");
        break;
        case "default":
            console.log("wrist so icy wonder why she like me bitch im drowning")
            break;
        

    }

    console.log(e.target.id);
}