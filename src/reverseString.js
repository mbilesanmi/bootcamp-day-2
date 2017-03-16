/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */

function reverseString(word){
    if (word.length === 0){
        return null;
    } else {
        var stringLength = word.length;
        var reversedText = "";

        for (i = stringLength; i >= 0; i--) {
            reversedText += word.charAt(i);
        }
        if (word === reversedText) {
            return true;
        }
        return reversedText;
    }
}
