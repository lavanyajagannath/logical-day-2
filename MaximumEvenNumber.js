function max_even(array){
    array.sort((x,y)=> y-x);
    for (var i = 0; i < array.length; i++){
        if (array[i] %2 == 0) return array[i];
    }
}
console.log(max_even([20,40,200]));
console.log(max_even([20,40,200,300]));