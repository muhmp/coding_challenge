/**Try 1  */
/*
 * 1.Split
 * 2. initialize for hold the length of the longest word
 * 3. for loop for each string plus compare inside loop
 
function LongestWord(sen) { 
    //split
    var strSplit = sen.split(' ');
    //initialize hold longest word
    var longWord = 0;
    //loop
    for(var i = 0 ; i<strSplit.length;i++){
        if(strSplit[i].length > longWord){
        longWord = strSplit[i].length;

        }
    }

    //results
    return longWord;

    }
console.log(LongestWord("hello I am human"));
*/

/**Solution 2 */


function LongestWord(sen) { 
    //regex
    var regex = sen.match(/\w+/g);
    //set initiale longest word
    var longest = regex[0];
    //compare
    for (var i =0 ; i<regex.length;i++){
        if(regex[i].length > longest.length){
            longest = regex[i]
        }
    }
    //results
    return longest;
    }

// keep this function call here 
console.log(LongestWord(readline()));
