
//List of Hairstyles
let styleRepository = (function () {
  let styleList = [
    {name:'Knotless', price: 150, type: 'braids'},
    {name:'Locs', price: 245, type: 'twists'},
    {name: 'Feed In', price: 130, type: ['braids',' cornrows']}
  ];  
    return{
        //add check for correct formatting
       add: function (list) {
            styleList.push(list);
        },
        getAll: function() {
            return styleList;
        }
        //add 'remove' function
    };
})();
console.log(styleRepository.getAll());
styleRepository.add({name:'Dreads', price: 1000, type: 'twists'});
console.log(styleRepository.styleList);




// Obejct.keys(someObject)- displays array of all properties

//Alert for styles over $200
let priceAlert = '<p class= "hide">' + 'Wow, that\'s expensive!' + '</p>';

//Can print from any array classified as a 'list'
// function printArrayDetails (list) {
//     for (i = 0; i<= list.length; i++){
//     document.write('<div class= "style__item">' + '<h2>' + list[i].name + '</h2>' + '<h5>' +list[i].type + '</h5>' + '<p>' +'Price: $' + list[i].price + '</p>' + '</div>');
//     if (list[i].price > 200) {
//         document.write(priceAlert);
//     }
//  };
// }


// forEach() function replacing for loop. Prints any array classified as 'list'
function printArrayDetails(list){
        document.write('<div class= "style__item">' + '<h2>' + list.name + '</h2>' + '<h5>' +list.type + '</h5>' + '<p>' +'Price: $' + list.price + '</p>' + '</div>');
    if (list.price > 200){
        document.write(priceAlert);
    }
    };

styleRepository.getAll().forEach(printArrayDetails);

//Exercise 1.4, part 2
// function div (dividend, divisor){
//     if (divisor === 0) {
//         return "You're trying to divide by zero";
//     } else {
//         let result = dividend/divisor;
//         return result;
//     }
// }

// console.log(div(4,2));

// console.log(div(7,0));

// console.log(div(1,3));

// console.log(div(12, -3));


