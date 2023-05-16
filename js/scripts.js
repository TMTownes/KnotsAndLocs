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

          button.setAttribute('data-toggle', 'modal');
          button.setAttribute('data-target', '#modal-container');
          let capitalized = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1);
          button.innerText = capitalized;
          button.classList.add("style-button", 
            "btn",
            "show-modal");
          listItem.classList.add('list-group-item');
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
          showModal(pokemon);
        });
      }

      let pokemonContainer = document.querySelector('.style__list');
      let modalContainer = document.querySelector('#modal-container');
      let dialogPromiseReject;

      //modal function
      function showModal(pokemon){
        styleRepository.loadDetails(pokemon).then(function(){
          
          modalContainer.innerHTML = '';

          let modal = document.createElement('div');
          modal.classList.add('modal');
          
          //Title details
          let pokemonTitle = document.createElement('h1');
          let capitalized = pokemon.name.charAt(0).toUpperCase()+pokemon.name.slice(1);
          pokemonTitle.innerText = capitalized;
          
          //Image details
          let pokemonImg = document.createElement('img');
          pokemonImg.src = pokemon.imageUrl;
          pokemonImg.classList.add('pokemon-img');

          //Height details
          let pokemonHeight = document.createElement('p');
          pokemonHeight.innerText = "Height: " + pokemon.height;

          //modal close button
          let closeButtonElement = document.createElement('button');
          closeButtonElement.classList.add('modal-close');
          closeButtonElement.setAttribute('data-dismiss', 'modal');
          closeButtonElement.innerText = 'Close';
          closeButtonElement.addEventListener('click', hideModal);


          modal.appendChild(pokemonTitle);
          modal.appendChild(pokemonImg);
          modal.appendChild(pokemonHeight);
          modal.appendChild(closeButtonElement);
          modalContainer.appendChild(modal);

          modalContainer.classList.add('is-visible');

        });
      }
        //hide modal function
        function hideModal(){
          modalContainer.classList.remove('is-visible');
          modalContainer.classList.remove('show');

          if(dialogPromiseReject){
            dialogPromiseReject();
            dialogPromiseReject = null;
          }
        }

      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && pokemonContainer.classList.contains('is-visible')){
          hideModal();
        }
      });

      modalContainer.addEventListener('click', (e) => {
        let target = e.target;
        if(target === pokemonContainer){
          hideModal();
        }
      });

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
        loadDetails: loadDetails,
        showModal: showModal
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
 
  
  
  // Obejct.keys(someObject)- displays array of all properties
  
  