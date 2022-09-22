const textarea=document.querySelector("textarea"),
fileNameInput=document.querySelector(".file-name input"),
selectMenu =document.querySelector(".save-as select"),
saveBtn=document.querySelector(".save-btn");


saveBtn.addEventListener("click",(e)=>{
    const blob=new Blob([textarea.value],{type:selectMenu.value})
    const fileurl=URL.createObjectURL(blob);
    const link=document.createElement("a")
    link.download=fileNameInput.value;
    link.href=fileurl;
    link.click()
    console.log(fileurl)
    e.preventDefault();
})
