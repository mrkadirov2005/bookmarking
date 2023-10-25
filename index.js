// const switchingButton=document.querySelectorAll("advantages__SSB" )
const switchingButtonSimple=document.getElementById("simple_bookmarking" )
const switchingButtonSpeedy=document.getElementById("speedy_searching" )
const switchingButtonEasy=document.getElementById("easy_sharing" )


const simpleBookmarking=document.getElementById("SB")
const speedySearching=document.getElementById("SS")
const easySharing=document.getElementById("ES")



// console.log(switchingButtonSimple,switchingButtonSpeedy,switchingButtonEasy)


switchingButtonSimple.addEventListener("click",()=>{
    switchingButtonEasy.classList.remove("active__window")
    switchingButtonSpeedy.classList.remove("active__window")
    switchingButtonSimple.classList.add("active__window" )


    easySharing.classList.remove("active__window")
    easySharing.classList.add("disabled__window")
    speedySearching.classList.remove("active__window")
    speedySearching.classList.add("disabled__window")
    simpleBookmarking.classList.add("active__window")
})
switchingButtonSpeedy.addEventListener("click",()=>{
    switchingButtonEasy.classList.remove("active__window")
    switchingButtonSimple.classList.remove("active__window")
    switchingButtonSpeedy.classList.add("active__window" )

    speedySearching.classList.add("active__window")
    easySharing.classList.remove("active__window")
    easySharing.classList.add("disabled__window")
    simpleBookmarking.classList.remove("active__window")
    simpleBookmarking.classList.add("disabled__window")

})
switchingButtonEasy.addEventListener("click",()=>{
    switchingButtonSimple.classList.remove("active__window")
    switchingButtonSpeedy.classList.remove("active__window" )
    switchingButtonEasy.classList.add("active__window")



    easySharing.classList.add("active__window")
    speedySearching.classList.remove("active__window")
    speedySearching.classList.add("disabled__window")
    simpleBookmarking.classList.remove("active__window")
    simpleBookmarking.classList.add("disabled__window")
})



// header responsive
const pieButton=document.getElementById("pie")
const menuWrapper=document.getElementById("switchable_wrapper")
const responsiveLists=document.getElementById("responsive__lists")
pieButton.addEventListener("click",()=>{
menuWrapper.classList.toggle("open__menu")
menuWrapper.classList.toggle("controlled__menu")

responsiveLists.classList.toggle("open__menu")

})