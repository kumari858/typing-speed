const setofWords = [
    "The first part is all about the life of young Kalam.There is a mix of his interactions with his family, friends and teachers.",
    " As a boy, he sold newspapers to help his brother and to overcome his own financial challenges while attaining his education. It also covers his early education leading up to his graduation in aeronautical engineering degree from the Madras Institute of Technology.",
    "The next part concentrated on his progress as a man of science and innovation. It revolves around his work with defence and space projects.",
"Defense Research and Development Organization (DRDO) became his first employers after completing his education as he was given a project on hovercrafts.",
"After nearly four years with DRDO, he joined the Indian Space Research Organization (ISRO) where he was mentored by some of the brightest Indian minds of Science like Professor Vikram Sarabhai, Dr Werner Van Braun, and Professor Satish Dhawan etc.",
"Here, Kalam has incorporated minutest of scientific acronyms, details etc. and tried to establish a window into his world of science and innovation. Another noticeable thing is his interactions with the common folks in such an organization and outside.",
"In 1982, Kalam changes his place of work to rejoin the defence labs at the DRDO as its Director.Kalam goes on to give a firsthand account of some of the most incredible scientific innovations of the country like Polar Satellite Launch Vehicle (PSLV), the Integrated Guided Missile Programme of India and its constituent missiles like Akaash, Naga, Trishul and especially Agni, the Indian Intercontinental Ballistic Missile series.",
"He even produced healthcare products using the same missile technology.He earned his moniker of ‘Missile-man of India’ for his achievement in this phase of his life.",
"His insistence on a participative model of management was based on bringing the best out of every person. It made him a scientist with a soul.",
"The section also pays tribute to the greatest scientific minds in the Indian Space journey and has a celebratory and nostalgic feel to it.",
"The last part starts with him becoming the Scientific Advisor to India’s Defense Minister in 1992.",
" In this phase of life, he contributed heavily to the nation becoming a nuclear power and reaching its nuclear destiny with the successful nuclear tests at Pokhran, Rajasthan in 1998.",
"As ex-officio chairman of the Scientific Advisory Committee to the Cabinet (SAC-C), he went to chart out a vision of India 2020 as the World welcomed the new millennium.",
"Kalam would go on to be bestowed with the country’s top three civilian awards: Bharat Ratna (1997), Padma Vibhushan (1990)  and Padma Bhushan (1981 ). Overall, he boasted an astounding haul of honorary degrees from 30+ universities from across the world.",
"The section also notes ideas, his contemplations and advice for the future of India culminating into Kalam’s -Vision 2020. A flag post of India attaining of self-sufficiency in innovation & technology vision. A perfect epilogue to an inspirational life journey.",
"It is an extraordinary story of a seemingly ordinary man with extraordinary drive and talents. It narrates the scientific voyage of a pioneer and far-sighted leader whose actions louder than his speeches and whose conduct disarmed his harshest of critics if there were any.",
"A common man’s journey to the orbit of success and commendation, the autobiography is widely considered one of the most inspiring of its time.",
"Abdul Kalam gave up his personal life for a life in service to his country and his countrymen so much so that he died on the stage giving a lecture.",
"It is the message of the book wings of fire and it is something that young readers of his autobiography must ponder over."




   
]
const typeWords= document.getElementById('input');
const btn= document.getElementById('btn');
const msg = document.getElementById('msg');
let startTime,endTime;
const playGame=() =>{
    let random =Math.floor(Math.random()*setofWords.length)
    msg.innerText = setofWords[random];
    let date= new Date();
    startTime= date.getTime();
    btn.innerText= "Done"


}
const endPlay = () => {
    let date= new Date();
    endTime= date.getTime();
    let totalTime = ((endTime-startTime)/60000);
    let totalStr = typeWords.value;
    let wordCount = wordCounter(totalStr);
    let finalMsg = " you typed total " + wordCount + " words in " +totalTime + " minutes. ";
    finalMsg+= compareWords(msg.innerText, totalStr);
    msg.innerText= finalMsg;

}
const compareWords = (str1, str2) =>
{
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;
    words1.forEach(function (item, index){
        if(item == words2[index]){
            cnt++
        }
    })
    let errorWords = (words1.length - cnt);
    return (cnt + " correct out of "+ words1.length +" words and the total number of errors are "+ errorWords + ".")

}
const wordCounter = (str) =>
{
    let response = str.split( " ").length;
    return  response;

}
btn.addEventListener('click', function(){
    if(this.innerText == 'Start') {
        typeWords.disabled= false;
        playGame();
    }
    else if( this.innerText== "Done"){
        typeWords.disabled= true;
        btn.innerText= "Start";
        endPlay();
    }

})

const startWrite = ()=>{

}
