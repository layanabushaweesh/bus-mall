'usestrict'; 


const names = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const leftImage = document.getElementById('left-image');
const rightImage = document.getElementById('right-image');
const midImage=document.getElementById('mid-image');



const imagesSection = document.getElementById('images-section');
Product.all=[];

function Product (name ){
    this.name=name;
    this.path=`./assets/${name}.jpg`;
    this.votes=0;
    this.views=0;
    this.showTimes=0;
    this.avgLikes=0;

Product.all.push(this)

}

Product.all=[];

for (let i=0 ; i<names.length; i++){

    new Product(names[i]);
}

function render (){
    const leftIndex = randomNumber(0, Product.all.length - 1);
 
  
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

    for (let i = 0; i < Product.all.length; i++) {
      switch (i) {
        case leftIndex:
        case midtIndex:
        case rightIndex:
          Product.all[i].showTimes++;
          break;
        default:
          break;
      
        }
      }

    }
  
    let listenStop =0;

  imagesSection.addEventListener('click', clickHanler);

  
  function clickHanler(event) {
    
     if (event.target.id !== 'images-section') {
      for (let i = 0; i < Product.all.length; i++) {

        if (Product.all[i].name === event.target.title) {
          Product.all[i].votes++;
          listenStop++;
         
        }

      }
    if( listenStop === 26){
      imagesSection.removeEventListener('click', clickHanler)
      for ( let i=0 ; i<Product.all.length;i++){
        Product.all[i].avgLikes =`${Math.floor((Product.all[i].votes /Product.all[i].showTimes) * 100)}%`;
        results();
      }
     
    } else {
      render();
    }
  }
}

  render();


  function results() {
    const ulEl = document.createElement('ul');
    imagesSection.appendChild(ulEl);
     for (let i = 0; i <   Product.all.length; i++) {
       const liEl = document.createElement('li');
       ulEl.appendChild(liEl);
       liEl.textContent = `${Product.all[i].name} had ${Product.all[i].votes}  and was shown ${Product.all[i].showTimes} times....it's liked by ${Product.all[i].avgLikes}`;
     }
    
  }    

  
  function rendChart() {
    const ctx=document.getElementById('chart').getContext('2d');
    const names=[];
    const votes=[];
    const shown=[];
    const avg=[];
    for (let i = 0; i < Product.all.length; i++) {
      names.push(Product.all[i].name);
      votes.push(Product.all[i].votes);
      shown.push(Product.all[i].showTimes);
      avg.push(Product.all[i].avgLikes*100);
    }



    new Chart(ctx, {
    type: 'bar',
    data: {
      labels:names,
      datasets: [{
        label:'votes#',
        barPercentage: 0.5,
        barThickness: 40,
        maxBarThickness: 8,
        minBarLength: 2,
        data: votes
      },{
        label:'views#',
        barPercentage: 0.5,
        barThickness: 50,
        maxBarThickness: 8,
        minBarLength: 2,
        data: shownTimes
      }]
    },
    option
  })

}