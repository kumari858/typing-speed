const setofWords = [
"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec",
"ellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
"Old education him departure any arranging one prevailed. Their end whole might began her. Behaved the comfort another fifteen eat. Partiality had his themselves ask pianoforte increasing discovered. So mr delay at since place whole above miles. He to observe conduct at detract because. Way ham unwilling not breakfast furniture explained perpetual. ",
"Or mr surrounded conviction so astonished literature. Songs to an blush woman be sorry young. We certain as removal attempt. ",
"Now is the winter of our discontent Made glorious summer by this sun of York",
"And all the clouds that lour'd upon our house",
" In the deep bosom of the ocean buried. Now are our brows bound with victorious wreaths Our bruised arms hung up for monuments"

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
