
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
            if (typeof "object"){
                styleList.push(list);
            }else {
                console.log("Incorrect data");
            }
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



// forEach() function replacing for loop. Prints any array classified as 'list'
function printArrayDetails(list){
        document.write('<div class= "style__item">' + '<h2>' + list.name + '</h2>' + '<h5>' +list.type + '</h5>' + '<p>' +'Price: $' + list.price + '</p>' + '</div>');
    if (list.price > 200){
        document.write(priceAlert);
    }
    };

styleRepository.getAll().forEach(printArrayDetails);




