let styleList = [
    {name:'Knotless', price: 150, type: 'braids'},
    {name:'Locs', price: 245, type: 'twists'},
    {name: 'Feed In', price: 130, type: ['braids',' cornrows']},


];

let priceAlert = '<p class= "hide">' + 'Wow, that\'s expensive!' + '</p>';

for (i = 0; i<= styleList.length; i++){
    document.write('<div class= "style__item">' + '<h2>' + styleList[i].name+ '</h2>' + '<h5>' +styleList[i].type + '</h5>' + '<p>' +'Price: $' + styleList[i].price + '</p>' + '</div>');
    if (styleList[i].price > 200) {
        document.write(priceAlert);
    }
};
