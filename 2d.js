// Create array of numbers
const ages = [24, 31, 46, 78];

// Create new array (a) with some numbers doubled
let a = ages.map(
    (item)=>{
        // check if number is greater than 70
        // if it is, multiply it by 2 an return its value to item, otherwise just return the number
        if(item < 70)
            return item * 2
        else
        return item;
    }
);
//The new array of numbers to the console
console.log(a);