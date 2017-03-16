/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */


function words(string){
    var splitString = string.split(/\s+|\n/m);
    var arr = {};
    function stringCount(string, word){
        var count = 0;
        str = string.split(/\s+|\n/m);
        for (var i = 0; i < str.length; i++) {
            if (str[i] === word){
                count++;
            }
        }
        return count;
    }
    for (var i = 0; i < splitString.length; i++) {
        if (!arr.hasOwnProperty(splitString[i])){
            var value = splitString[i];
            arr[splitString[i]] = stringCount(string, splitString[i]);

        }
    }
    return arr;
}
