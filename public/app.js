var app = function(){

  var cats = [{name: "Boba", FavouriteFood: "Sock Fluff", src: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"},
{name: "Barnaby", FavouriteFood: "Tuna", src: "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg"},
{name: "Max", FavouriteFood: "Whiskas Temptation", src: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"},
{name: "Garfield", FavouriteFood: "Fish", src: "Garfield.jpg"}]


  var createUnordered = function(){
    var unordered = document.createElement('ul');
    unordered.classList.add('cat');
    unordered.style.backgroundColor = "#ccffe6";
    unordered.style.alignContent = "flex-start";
    unordered.style.alignContent = "space-around";
    unordered.style.alignContent = "space-between";
    return unordered;
  }

  var createNameList = function(name){
    var list1 = document.createElement('li');
    list1.innerText = "Name: " + name;
    return list1;
  }

  var createFoodList = function(food){
    var list2 = document.createElement('li');
    list2.innerText = "Favourite food: " + food;
    return list2;
  }

  var createImageList = function(){
    var list3 = document.createElement('li');
    return list3;
  }

  var createImage = function(src){
    var image = document.createElement('img');
    image.src = src;
    image.style.height = "250px";
    image.style.width = "250px";
    image.style.borderRadius = "30px";
    return image;
  }

  var appendElements = function(unordered, list1, list2, list3, image){
    list3.appendChild(image);
    unordered.appendChild(list1);
    unordered.appendChild(list2);
    unordered.appendChild(list3);
    var cats = document.querySelector('#cats');
    cats.appendChild(unordered);
  }

  var addCat = function(cat){
    var unorderedList = createUnordered();
    var nameList = createNameList(cat.name);
    var foodList = createFoodList(cat.FavouriteFood);
    var imageList = createImageList();
    var image = createImage(cat.src);

    appendElements(unorderedList, nameList, foodList, imageList, image);
  }
   for (var i = 0; i < cats.length; i++){
   addCat(cats[i]);
 }
}


window.onload = app;
