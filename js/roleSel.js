const rolesLol = ["Toplane", "Middle", "Botlane", "Support", "Jungler"];


let userBut = document.getElementById("rollPos");
let userRole = document.getElementById("charPos");

userBut.onclick = function() {
    let randomIndex = Math.floor(Math.random() * rolesLol.length);
    let randomRole = rolesLol[randomIndex];
    
    userRole.textContent = randomRole;
}