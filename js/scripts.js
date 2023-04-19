//List of Hairstyles
let styleRepository = (function () {
    let styleList = [
      { name: "Knotless", price: 150, type: "braids" },
      { name: "Locs", price: 245, type: "twists" },
      { name: "Feed In", price: 130, type: ["braids", " cornrows"] },
    ];
    
      //add check for correct formatting
      function add(styles) {
        if (
          typeof styles === "object" &&
          "name" in styles &&
          "price" in styles &&
          "type" in styles
          ) {
          styleList.push(styles);
        } else {
          console.log("Incorrect style");
        }
      }
      //add listItem
      function addListItem(styles){
          let styleList = document.querySelector(".style__list");
          let listItem = document.createElement("li");
          let button = document.createElement("button");
          button.innerText = styles.name;
          // button.innerHTML = '<button class="show-more">Show More</button>'
          button.classList.add("style-button");
          listItem.appendChild(button);
          styleList.appendChild(listItem);
          addButtonListener(button, styles);
      }

      //Event to show more details from listItem button
      function addButtonListener (button, styles) {
        button.addEventListener('click', function(){
            showDetails(styles);
          });
      }

      function showDetails(styles){
        console.log(styles);
      }

      function getAll() {
        return styleList;
      }
      //add 'remove' function
      return {
        add: add,
        getAll: getAll,
        addListItem: addListItem,
        showDetails: showDetails,
        addButtonListener: addButtonListener
    }
  })();
  console.log(styleRepository.getAll());
  styleRepository.add({ name: "Dreads", price: 1000, type: "twists" });
  console.log(styleRepository.styleList);
  
  styleRepository.getAll().forEach(function(styles){
    styleRepository.addListItem(styles);
  }); 
  
  //Show more information
  
  
  // Obejct.keys(someObject)- displays array of all properties
  
  