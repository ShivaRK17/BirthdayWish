let bgmusic = new Audio('song.mp3');
let bdperson = prompt("What is the name of Birthday Boy/Girl?");
let bdwisher = prompt("Birthday Wish from (You can skip I can wish)");
if (bdperson=="") {
    bdperson="BirthdayPerson";
    bgmusic.play();
}
else{
    bgmusic.play();
}
if(bdwisher==""){
    bdwisher="ShivaRK"
}
document.querySelector('.nametag').innerText="To "+bdperson+" From "+bdwisher;
