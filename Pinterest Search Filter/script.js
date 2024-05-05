var arr=[
    {name:"India", image:"https://images.unsplash.com/photo-1592635196078-9fdc757f27f4?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"China", image:"https://images.unsplash.com/photo-1571822325911-c01620a65e86?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Mexico", image:"https://images.unsplash.com/photo-1571731446661-3c92b64ee57b?q=80&w=1134&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Jordan", image:"https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Peru", image:"https://images.unsplash.com/photo-1580619305218-8423a7ef79b4?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Brazil", image:"https://images.unsplash.com/photo-1593995863951-57c27e518295?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {name:"Rome", image:"https://images.unsplash.com/photo-1670280221119-434f6384dc00?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
]

function showTheCards(){
    var clutter ="";
    arr.forEach(function(obj){
        clutter += `<div class="box">
        <img class="cursor-pointer" src="${obj.image}" alt="${obj.name}">
        <div class="caption">Lorem ipsum </div>
        </div>`;
    });
    
    document.querySelector(".container").innerHTML = clutter;
}
showTheCards();

function searchFunc(){
    var input=document.querySelector("#searchinput");

    input
    .addEventListener("focus",function(){
        document.querySelector(".overlay").style.display= "block";  })

    input
    .addEventListener("blur",function(){
        document.querySelector(".overlay").style.display= "none";  })

    input
    .addEventListener("input",function(){
        var clutter=" ";
        const filteredArray = arr.filter(obj => obj.name.startsWith(input.value));
        if(filteredArray.length === 0){
            document.querySelector(".searchdata").style.display = "none";
        }else{
            filteredArray.forEach(function(obj){
            clutter += `<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
        });
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
        }
    })
}

searchFunc();
