const outOf = document.querySelector(".out-of-title");
const stars = document.querySelectorAll(".stars i");


//loop through the starts 
stars.forEach((star,index)=>{
 star.addEventListener("click" ,()=>{
  stars.forEach((star,index1)=>{
    index>=index1?star.classList.add(".active") : star.classList.remove(".active")
  })
  outOf.textContent=`${index+1} out of 5`;
 })
})

