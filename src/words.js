/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */


function words(n){
    var splitString = n.split(/\s+|\n/m);
    var arr = {};
    function stringCount(n, word){
        var count = 0;
        string = n.split(/\s+|\n/m);
        for (var i = 0; i < string.length; i++) {
            if (string[i] === word){
                count++;
            }
        }
        return count;
    }
    for (var i = 0; i < splitString.length; i++) {
        if (!arr.hasOwnProperty(splitString[i])){
            var value = splitString[i];
            arr[splitString[i]] = stringCount(n, splitString[i]);

        }
    }
    return arr;
}