const cat_btn=document.getElementById("cat_btn");
const cat_result=document.getElementById("cat_result");
//creat and eventlistness when user click on button

cat_btn.addEventListener("click",()=>{
    fetch("https://aws.random.cat/meow")
    .then((res)=>res.json())
    .then((data)=>{
        //console.log(data);
        // data to UI
        cat_result.innerHTML=`<img src="${data.file}" alt="cat" width=800 height=500/>
        `
    }).catch((err)=>{
        cat_result.innerHTML="Data not found"
    })
})

