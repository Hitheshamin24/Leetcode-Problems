/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        let arr = image[i];
        let k = 0, j = arr.length - 1;
        while (k < j) {
            [arr[k], arr[j]] = [arr[j], arr[k]];
            k++;
            j--;
        }

    }
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            image[i][j] = image[i][j] == 1 ? 0 : 1
        }
    }
    return image;
};