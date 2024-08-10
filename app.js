


//     _________      DATA______
let addItem;
onLoad()

function onLoad(){
   let str=localStorage.getItem('addItem');
   addItem= str ? JSON.parse(str) : [];
   MainPage();
   displayCount();
}


function addTOcard(addid){      
         addItem.push(addid); 
         localStorage.setItem('addItem',JSON.stringify(addItem)) 
         displayCount();
      }

      function displayCount(){
              let counter= document.querySelector(".count")
              if(addItem.length > 0)
              {
                 counter.style.visibility= "visible";
                 counter.innerText= addItem.length;
                 localStorage.setItem(JSON.stringify(addItem))

              }else{
               counter.style.visibility= "hidden"
              }
      }




    
      
      function MainPage(){
   let user=[
 {
   id:"001",
      image: 'image1.jpg',
      rating:{
                  star:4.5,
                  reviews: 1.4+"K"
      },
      company:"Cartoon London",
      item_name:"Rhodium Plates Flora stus",
     item_price:" Rs 600",
     item_cutprice: "Rs 1500",
     item_percentage:"(43% off)"
      
      
 },
 
 {
   id:"002",

     image: 'image2.jpg',
     rating:{
               star:4.6,
               reviews: 4.4+"K"
            },
     company:"star London",
     item_name:"Plates Flora stus lable",
    item_price:" Rs 1000",
    item_cutprice: "Rs 2500",
    item_percentage:"(41% off)"
     
     
},

{
   id:"003",
 image: 'image3.jpg',
 rating:{
    star:4.5,
    reviews: 1.4+"K"
 },
 company:"Cartoon London",
 item_name:"Rhodium Plates Flora stus",
item_price:" Rs 600",
item_cutprice: "Rs 1500",
item_percentage:"(43% off)"
 
 
},

{
id:"004",

 image: 'image4.jpg',
 rating:{
    star:4.5,
    reviews: 1.4+"K"
 },
 company:"Cartoon London",
 item_name:"Rhodium Plates Flora stus",
item_price:" Rs 600",
item_cutprice: "Rs 1500",
item_percentage:"(43% off)"
 
 
},

{
id:"005",
 image: 'image5.jpg',
 rating:{
    star:4.5,
    reviews: 1.4+"K"
 },
 company:"Cartoon London",
 item_name:"Rhodium Plates Flora stus",
item_price:" Rs 600",
item_cutprice: "Rs 1500",
item_percentage:"(43% off)"
 
 
},

{
id:"006",

 image: 'images6.jpg',
 rating:{
    star:4.5,
    reviews: 1.4+"K"
 },
 company:"Cartoon London",
 item_name:"Rhodium Plates Flora stus",
item_price:" Rs 600",
item_cutprice: "Rs 1500",
item_percentage:"(43% off)"
 
 
},

{
id:"007",

image: 'camera.webp',
rating:{
   star:4.5,
   reviews: 1.4+"K"
},
company:"Cartoon London",
item_name:"Rhodium Plates Flora stus",
item_price:" Rs 600",
item_cutprice: "Rs 1500",
item_percentage:"(43% off)"


},

{
id:"008",

image: '6.jpg',
rating:{
   star:4.5,
   reviews: 1.4+"K"
},
company:"Cartoon London",
item_name:"Rhodium Plates Flora stus",
item_price:" Rs 600",
item_cutprice: "Rs 1500",
item_percentage:"(43% off)"


},

]
   
let itemBoxElement = document.querySelector(".mainPArt");
let HTML="";

user.forEach((user)=>{
  HTML+=`
  <div class="item-box ">

              <img src="${user.image}" alt="" width="100%" height="300px">
            
             <div>${user.rating.star}<span style="font-size: 13px;">⭐</span> | ${user.rating.reviews}</div>
                <h5>${user.company}</h5>
              <p  style="margin-bottom: 0;">${user.item_name}</p>
                 <p style="margin-bottom: 0;">
                    <span style="margin-right: 10px; font-weight: 700; ">${ user.item_price}</span> 
                 <span><del>${user.item_cutprice}</del></span>
                   <span style="margin-left: 10px; color: rgb(248, 27, 27);">${user.item_percentage}</span> 
                 </p>
                  <button class="btn btn-primary " type="button" style="width: 100%;" onclick="addTOcard(${user.id})">Add to Card</button>
               </div>`
})


itemBoxElement.innerHTML=HTML;

}