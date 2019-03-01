var nums = [8, 9, 10, 40, -1, 100, -50];

function num(array) {
    var max = array[0];
    var min = array[0];
    for (var i = 0; i <= array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
        if (array[i] < min) {
            min = array[i];
        }
    }
    console.log("max" + max + "min" + min);
}
num(nums);
