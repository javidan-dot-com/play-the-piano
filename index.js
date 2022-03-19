document.addEventListener('keydown', function(e) {

    const soundA = new Audio('/key-sounds/A.mp3');
    const soundS = new Audio('/key-sounds/S.mp3');
    const soundD = new Audio('/key-sounds/D.mp3');
    const soundF = new Audio('/key-sounds/F.mp3');
    const soundG = new Audio('/key-sounds/G.mp3');
    const soundH = new Audio('/key-sounds/H.mp3');
    const soundJ = new Audio('/key-sounds/J.mp3');

    function audioObject (sound) {
      sound.play()
}

    switch(e.code) {
        case "KeyA":
            audioObject(soundA);
            break;
        case "KeyS":
            audioObject(soundS);
            break;
        case "KeyD":
            audioObject(soundD);
            break;
        case "KeyF":
            audioObject(soundF);
            break;
        case "KeyG":
            audioObject(soundG);
            break;
        case "KeyH":
            audioObject(soundH);
            break;
        case "KeyJ":
            audioObject(soundJ);
            break;
        default:
            console.log('Unbound key is pressed.');
            break;
    }
})