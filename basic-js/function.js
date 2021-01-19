var numbers = [89,65,34,32,65,34,43,99];

function largestNumber(numbers){
    var larger = numbers[0];
    for(var i=0; i < numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}

var output = largestNumber([12,43,3]);
console.log('output', output);