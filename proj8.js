const textareEl = document.getElementById("textarea")
const totalCounterEl = document.getElementById("totalConter")
const remainCounterEl = document.getElementById("remainConter")
textareEl.addEventListener("keyup" , ()=>{
updatecounter ()
})
function updatecounter() {
    totalCounterEl.innerText = textareEl.value.length
    remainCounterEl.innerText = textareEl.getAttribute("maxlength") - textareEl.value.length ;
}