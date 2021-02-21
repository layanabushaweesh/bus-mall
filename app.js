'usestrict'; 

const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
const midImage=document.getElementById('mid-image');


const imagesSection = document.getElementById('images-section');

function Product (name ){
    this.name=name;
    this.path=`./assets/${name}.jpg`;
    this.voits=0;
    this.view=0;
Product.all.push(this)

}

Product.all=[];
for (i=0 ; i<names.length; i++){

    new Product(names[i]);
}

function render (){
    const leftIndex = randomNumber(0, Product.all.length - 1);
 let counter =1
 while(counter<=25 ){ 
    leftImage.src = Product.all[leftIndex].path;
    leftImage.title = Product.all[leftIndex].name;
    leftImage.alt = Product.all[leftIndex].name;
  
    const rightIndex = randomNumber(0, Product.all.length - 1);
    rightImage.src = Product.all[rightIndex].path;
    rightImage.title = Product.all[rightIndex].name;
    rightImage.alt = Product.all[rightIndex].name;


const midtIndex = randomNumber(0, Product.all.length - 1);
    midImage.src = Product.all[midtIndex].path;
    midImage.title = Product.all[midtIndex].name;
    midImage.alt = Product.all[midtIndex].name;


    counter++;
  }
}

  imagesSection.addEventListener('click', handleClick);

  function handleClick(event) {
   
    if (event.target.id !== 'images-section') {
      for (let i = 0; i < Product.all.length; i++) {
        if (Product.all[i].name === event.target.title) {
          Product.all[i].votes++;
         
        }
      }
      console.log(Product.all);
      render();
    }
  }
  
  
  render();