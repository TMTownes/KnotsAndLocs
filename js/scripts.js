//List of Hairstyles
let styleRepository = (function () {
    let styleList = [];
    let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';
    
      //add check for correct formatting
      function add(pokemon) {
        if (
          // typeof styles === "object" &&
          // "name" in styles &&
          // "price" in styles &&
          // "type" in styles
          typeof pokemon === "object" 
          // &&
          // "name" in pokemon &&
          // "height" in pokemon &&
          // "type" in pokemon
          ) {
          styleList.push(pokemon);
        } else {
          console.log("Incorrect style");
        }
      }
      //add listItem
      function addListItem(pokemon){
          let styleList = document.querySelector(".style__list");
          let listItem = document.createElement("li");
          //Add button to styleList
          let button = document.createElement("button");
          button.innerText = pokemon.name;
          button.classList.add("style-button");
          listItem.appendChild(button);
          styleList.appendChild(listItem);
          addButtonListener(button, pokemon);

          //Add img to styleList
          //let img = document.createElement("img");
          //img.src = "image.png";
          //let src = document.getElementById("hairstyles");
          //src.appendChild(img);
      }

      //Event to show more details from listItem button
      function addButtonListener (button, pokemon) {
        button.addEventListener('click', function(){
            showDetails(pokemon);
          });
      }

      function showDetails(pokemon){
        loadDetails(pokemon).then(function(){
          console.log(pokemon);
        });
      }

      function getAll() {
        return styleList;
      }
      //add 'remove' function

      //add loadList function
      function loadList() {
        return fetch(apiUrl).then(function (response){
          return response.json();
        }).then(function(json){
          json.results.forEach(function (item){
            let pokemon = {
              name: item.name,
              detailsUrl: item.url
            };
            addListItem(pokemon);
          });
        }).catch(function (e){
          console.error(e);
        });
      }

      //load the details of each item
      function loadDetails(item){
        let url =item.detailsUrl;
        return fetch(url).then(function (response){
          return response.json();
        }).then(function (details){
          //add the details of each item
          item.imageUrl= details.sprites.front_default;
          item.height = details.height;
          item.types= details.types;
        }).catch(function (e){
          console.error(e);
        });
      }

      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        addButtonListener: addButtonListener,
        loadList: loadList,
        loadDetails: loadDetails
    }
  })();
  console.log(styleRepository.getAll());
  styleRepository.add({ name: "Dreads", price: 1000, type: "twists" });
  console.log(styleRepository.styleList);
  
  //Data is loaded
  styleRepository.loadList().then(function(){
    styleRepository.getAll().forEach(function(pokemon){
    styleRepository.addListItem(pokemon);
  }); 
  });
 
  
  //Show more information
  
  
  // Obejct.keys(someObject)- displays array of all properties
  
  