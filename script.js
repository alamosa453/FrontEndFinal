var jsonContainer = document.getElementById("json");
var btn= document.getElementById("btn");

btn.addEventListener("click", function(){
    let newRequest= new XMLHttpRequest();
    newRequest.open("GET", "https://api.github.com/users/alamosa453/repos");
    newRequest.onload= function(){
        if(this.readyState== 4 && this.status == 200){
            let firstObj= JSON.parse(this.responseText);
            console.log(firstObj)
            document.getElementById("json").innerHTML;
            renderHTML(firstObj);
        }
    }
    newRequest.send();
});




function renderHTML(data){
var htmlString="";

for (i = 0; i < data.length; i++){
    htmlString +=`<p>${data[i].name} ${data[i].url}</p>`
}
    jsonContainer.insertAdjacentHTML("beforeend", htmlString);
}



$(function(){
    $('.btn').on('click', function(){
        $('body').toggleClass('bodyChange')
   });
});

