const data=[
  {
    id:'1',
    question:"What are the accordian components",
    answer:"They are commonly employed in various context,including..."
    
  },{ 
    id:'2',
  question:"What are they used for?",
  answer:"They are commonly employed in various context,including..."
},{
    id:'3',
    question:"Accordion as a musical instrument",
    answer:"They accordian is musical instrument with keyboard and context,including..."
  },{
    id:'4',
    question:"Can i create an accordian components with a diffrent ",
    answer:"yes of course,it is very possible to create an accordian "
  }
]

const accordianWrapper= document.querySelector('.accordian-container');

function createAccordianData(){
  accordianWrapper.innerHTML=data.map(dataItem=>`
  <div class="accordian_item">
  <div class="accordian_title">
  <h3>${dataItem.question}</h3>
  <i class="fa-solid fa-arrow-up"></i>
  </div>
  <div class="accordian_content">
  <p>${dataItem.answer}</p>
  </div>
  </div>
  `).join(" ");
}
createAccordianData();

const getAccordianTitle =document.querySelectorAll('.accordian_title');
console.log(getAccordianTitle)

getAccordianTitle.forEach(currentItem=>{
  currentItem.addEventListener('click',(event)=>{
    if(currentItem.classList.contains('active')){
      currentItem.classList.remove('active')
    }else{
      let getAlreadyAddedActiveClasses = document.querySelectorAll('.active')
      getAlreadyAddedActiveClasses.forEach(currentActiveItem=>{
        currentActiveItem.classList.remove('active')
      })
      currentItem.classList.add("active");
    }
  })
})