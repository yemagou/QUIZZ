const form = document.querySelector('.quizz');
let tableresultat = [];
const reponse = ['a','c','b','a','c'];
const emojis = ['🏆','✨','👀','😭','👎'];
const titreresultat = document.querySelector('.resultat h2');
const texteresultat = document.querySelector('.note');
const aideresultat = document.querySelector('.aide');
const questions = document.querySelectorAll('.question');
let veritable = [];

form.addEventListener('submit', (e) =>{

    e.preventDefault();// n'actualise pas la page!!

    //console.log(document.querySelector('input[name="q1"]:checked').value);

    for( let i = 1; i < 6; i++){
        tableresultat.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    // console.log(tableresultat);
    verifunc(tableresultat);
    tableresultat = [];
})

function verifunc(tableresultat){
    
    for (let a = 0; a < 5; a++){
        
        if(tableresultat[a] === reponse[a]){
            veritable.push(true);
        } else {
            veritable.push(false);
        }

    }

    // console.log(veritable);
    affiche(veritable);
    couleur(veritable);
    veritable = [];
}

function affiche(tabckek){

    const nbrefaute = tabckek.filter(el => el !== true).length;
    // console.log(nbrefaute);

    switch (nbrefaute){
        case 0:
            titreresultat.innerText = "🏆 bravo, c'est un sans faute ! 🏆 "
            aideresultat.innerText = "";
            texteresultat.innerText = "5/5";
            break;
        case 1:
            titreresultat.innerText = "✨ Vous y êtes presque ! ✨ "
            aideresultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            texteresultat.innerText = "4/5";
            break;
        case 2:
            titreresultat.innerText = "✨ Encore un effort ... 👀 "
            aideresultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            texteresultat.innerText = "3/5";
            break;
        case 3:
            titreresultat.innerText = "👀 Il reste quelques erreurs. 😭 "
            aideresultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            texteresultat.innerText = "2/5";
            break;
        case 4:
            titreresultat.innerText = "😭 Peux mieux faire ! 👎 "
            aideresultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            texteresultat.innerText = "1/5";
            break;
        case 5:
            titreresultat.innerText = "👎 Peux mieux faire ! 👎 "
            aideresultat.innerText = "Retentez une autre réponse dans les cases rouges, puis re-validez !";
            texteresultat.innerText = "0/5";
            break;
        default:
            "worps, cas innantendu.";
            break;
    }
    
}

function couleur(bon){
    
    for (let b = 0; b < bon.length; b++) {
        
        if (bon[b] === true){
            questions[b].style.background = 'lightgreen';
        } else {
            questions[b].style.background = '#ffb8b8';
            questions[b].classList.add('echec');

            setTimeout(() => {
                questions[j].classList.remove('echec');
            }, 500)
            }
    }

}

questions.forEach(block =>{
    block.addEventListener('click', () =>{
        block.style.background = "white";
    })
})