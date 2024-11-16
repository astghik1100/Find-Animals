const animalList = document.querySelector('.game-board');

animals.forEach(animal => {
    // Ստեղծում ենք նոր div տարր յուրաքանչյուր կենդանու համար
    let animalDiv = document.createElement('div');
    animalDiv.classList.add('animal-item');
    animalDiv.setAttribute('data-id', animal.id);

    // Պատկերը
    let img = document.createElement('img');
    img.src = 'animal/'+animal.thumbImg;
    img.alt = animal.name;

    // Անունը
    let name = document.createElement('h3');
    name.textContent = animal.name;

    // Ավելացնում ենք պատկերը և անունը div տարրում
    animalDiv.appendChild(img);
    animalDiv.appendChild(name);

    // Ավելացնում ենք կենդանու տարրը ցուցակի մեջ
    animalList.appendChild(animalDiv);
});

let timer=document.querySelector('.timer');
let scoreGameOver=document.querySelector('.scoreGameOver');
let reklama=document.querySelector('.reklama');
let currAnimal=document.querySelector('.current-animal');
let score=document.querySelector('.score');
let animal_item=document.querySelectorAll('.animal-item');
let randomImage=document.querySelector('#randomImage');
let randomName=document.querySelector('.randomName');

let randomItem;
const time=10;
let itemValue=time;
let scoreValue=0;
score.innerHTML=scoreValue;
animal_item.forEach(animal => {
    animal.addEventListener('click',() => {
        console.error(animal)
        if(+animal.getAttribute('data-id')===randomItem.id){
            randomAnimal()
            scoreValue+=1
            score.innerHTML=scoreValue
        }
    })
})



function randomAnimal(){
    let rand=Math.floor(Math.random()*animals.length);
    randomItem=animals[rand]
    randomImage.src=`animal/${randomItem.thumbImg}`;
    randomName.innerHTML=randomItem.name;
}
randomAnimal()


function myInterval(){
    let interval=setInterval(()=>{
        if(itemValue===0){
            reklama.style.display='flex'
            document.body.style.overflow='hidden'
            scoreGameOver.innerHTML=scoreValue
            clearInterval(interval)
        } else {
            itemValue--
            timer.innerHTML='00:'+itemValue.toString().padStart(2,'0')
        }
    },1000)
}
myInterval()
function closeBox(){
    reklama.style.display='none';
    document.body.style.overflow='unset'
}

function newGames(){
itemValue=time
    scoreValue=0
    score.innerHTML=0
    reklama.style.display='none'
    randomAnimal()
    myInterval()
}