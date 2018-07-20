var sumAll = function(start, finish) {


    if(!Number.isInteger(start) || !Number.isInteger(finish)){
        return "ERROR";
    } else if(start < 0 || finish < 0) {
        return "ERROR";
    } else if (start == finish) {
        return 0;
    }

    if(finish < start) {
        tempFinish = finish;
        finish = start;
        start = tempFinish
    } 

    tempNum = 0;

    for (i = start; start <= finish; start++) {
        tempNum += start;
    }

    return tempNum;


}

module.exports = sumAll
