let profession = "bombeiro";

console.log(`Profissão: ${profession}`);

switch (profession) {
    case 'fiscal':
        console.log('Sua camisa será verde');
        break;
    case 'bombeiro':
        console.log('Sua camisa será vermelha');
        break;
    case 'policial':
        console.log('Sua camisa será azul');
        break;
    default: 
        console.log('Sua camisa é preta');
    break;
}