var reverseString = function(string) {


    if(string == ""){
        return "";
    }

    let reverse = "";
    length = string.length;

    for (i = length; i > 0; i--) {
        reverse += string.charAt(i-1);
    }
   
    return reverse;
   
    
}

module.exports = reverseString