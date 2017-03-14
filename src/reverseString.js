/**
 * Created by Maranatha Ilesanmi on 3/11/2017.
 */

function reverseString(n){
    if (n.length === 0){
        return null;
    } else {
        var stringLength = n.length;
        var reversedText = "";

        for (i = stringLength; i >= 0; i--) {
            reversedText += n.charAt(i);
        }
        if (n === reversedText) {
            return true;
        }
        return reversedText;
    }
}