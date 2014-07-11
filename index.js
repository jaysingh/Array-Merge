/**
 * Escape special characters in the given string of html.
 *
 * @param  {Array} array_1, {Array} array_2
 * @return {Array}
 */

module.exports = {
	merge : function (array_1, array_2) {
		return mergeTwoArray(array_1, array_2);
	}
}

function mergeTwoArray(array_1, array_2) {

    var merged_array = [];
    var i = 0, j = 0, k = 0;

    while (i < array_1.length && j < array_2.length)
    {
        if (array_1[i] < array_2[j]) {
            merged_array[k++] = array_1[i++];
        }
        else {
            merged_array[k++] = array_2[j++];
        }     
    }

    while (i < array_1.length)  
        merged_array[k++] = array_1[i++];


    while (j < array_2.length)    
        merged_array[k++] = array_2[j++];

    return merged_array;
}