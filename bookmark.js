const First=document.getElementById("first_toggler")
const First_answer=document.getElementById("first")

const Second=document.getElementById("second_toggler")
const Second_answer=document.getElementById("second")


const Third=document.getElementById("third_toggler")
const Third_answer=document.getElementById("third")

const Fourth=document.getElementById("fourth_toggler")
const Fourth_answer=document.getElementById("fourth")
console.log(First,First_answer,Second,Second_answer,Third,Third_answer,Fourth,Fourth_answer)



First.addEventListener("click",()=>{ First_answer.classList.toggle("enabled_faq"),First.style.borderBottom="none"})
Second.addEventListener("click",()=>{ Second_answer.classList.toggle("enabled_faq"),Second.style.borderBottom="none"})

Third.addEventListener("click",()=>{ Third_answer.classList.toggle("enabled_faq"),Third.style.borderBottom="none"})

Fourth.addEventListener("click",()=>{ Fourth_answer.classList.toggle("enabled_faq"), Fourth.style.borderBottom="none"})
