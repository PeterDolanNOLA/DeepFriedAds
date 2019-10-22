const obj = {
    "jrDeveloper": {
      "cardGroups": [
        {
          "title": "Card Title",
          "image": "https://deepfried.com/wp-content/uploads/2014/05/astroboy-1600x1000.jpg",
          "link": "https://deepfried.com"
        },
        {
          "title": "Another Card Title Living in the Middle",
          "image": "https://deepfried.com/wp-content/uploads/2014/05/Device-Mockup.png",
          "link": "https://deepfried.com/job/developer/"
        },
        {
          "title": "Title of a Card",
          "image": "https://deepfried.com/wp-content/uploads/2016/01/nola-patio.jpg",
          "link": "https://deepfried.com/featured-brands/"
        },
        {
          "title": "Location & Hours",
          "image": "",
          "link": "https://deepfried.com/contact-us/location-hours/"
        },
        {
          "title": "Deep Fried Ipsum",
          "image": "https://deepfried.com/wp-content/uploads/2014/10/french-fries.jpg",
          "link": "https://deepfried.com/now-introducing-deep-fried-ipsum/"
        },
        {
          "title": "Meet the Family",
          "image": "https://deepfried.com/wp-content/uploads/2014/06/ampersand.jpg",
          "link": "https://deepfried.com/about-us/meet-the-family/"
        }
      ]
    }
  }


 let cards = obj["jrDeveloper"]["cardGroups"];

 let container = document.getElementById('card-container');
 cards.forEach((card)=> {
     let cardBoxDiv = document.createElement("div");
     cardBoxDiv.classList.add('card-box');
     if(card.image.length > 1){
         cardBoxDiv.style.background = `url(${card.image})`;
         cardBoxDiv.style.backgroundSize = "cover";
         cardBoxDiv.style.backgroundRepeat = "no-repeat";
     }
     
      let cardBoxLabelDiv = document.createElement("div");
      cardBoxLabelDiv.classList.add('card-box-label');
        
      let labelContainerDiv = document.createElement("div");
      labelContainerDiv.classList.add('label-text-container');

      let linkBox = document.createElement("a");
      linkBox.setAttribute('href', card.link);

      let labelText = document.createElement("h2");
      labelTextNode = document.createTextNode(card.title);
      labelText.appendChild(labelTextNode);
  
      labelContainerDiv.appendChild(labelText);
    
      cardBoxLabelDiv.appendChild(labelContainerDiv);
      cardBoxDiv.appendChild(cardBoxLabelDiv);
      
      linkBox.appendChild(cardBoxDiv)
      container.appendChild(linkBox);

  })