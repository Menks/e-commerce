
/* 
function spellingHomework(words){
    let index=1;
    let wordIndex =0 
    let numberOfWords = 0
    let result = words[0]
   // console.log(result)
    while(index  < words.length ){
       let currentWord = words[wordIndex]
       let nextWord = words[index]
       //console.log(nextWord)
       if(currentWord[currentWord.length-1] === nextWord[0]){
           result.concat(words[index+1])
           numberOfWords = numberOfWords + 1;
        }
        currentWord = nextWord;
        index ++;
        wordIndex ++;
       return result;
    }
    console.log(numberOfWords)
}
const listOfWords =['la','ahb','btc','ckc']
const L =['layal','lfaithful','strong','laugh','weak','feble','modest','humble','easy','simple','big'
,'large','eatble','edible','ready','alert','safe','secure','crazy','mad','handsome','cute','hot','speedy']
//,'','','','','','','','','','','','','','','','','','','','']
const res = spellingHomework(L)
console.log(res) */