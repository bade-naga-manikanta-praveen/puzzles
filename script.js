var rows=3;
var columns=3;

var currTile; //tile with which the user presses and want to exchange with blank tile
var otherTile; //blank tile

var turns=0;

function getRandomNumber(min,max){
    let result=Math.floor(Math.random()*(max-min+1));
    return result;
}

function createarray(start,end){
    let myarray=[];
    for(let i=start-1;i<=end-1;i++){
         myarray[i]=i+1;
          //console.log(myarray[i])
    }
    //console.log(myarray)
    return myarray;
}

var a=[];
//var a1=[];
var a1=createarray(1,9);
for(let i=0;i<9;i++){
    var randomindex=getRandomNumber(0,a1.length-1);
    a[i]=a1[randomindex];
    a1.splice(randomindex,1);
}

var flag3=0;
let tile=[];


var time=0;
function updatecountdown(){
    time++;
    document.getElementById("time").innerText = `${time}s`;
}
setInterval(updatecountdown,1000);

var time2=0;
function updatecountdown2(){
    time2++;
    document.getElementById("time2").innerHTML = `${time2}s`;
}
setInterval(updatecountdown2,1000);


//second

var rows2=5;
var columns2=5;
var currTile2; //tile with which the user presses and want to exchange with blank tile
var otherTile2; //blank tile
var turns2=0;

var b=[];
var b1=createarray(1,25);
for(let i=0;i<25;i++){
    var randomindex=getRandomNumber(0,b1.length-1);
    b[i]=b1[randomindex];
    b1.splice(randomindex,1);
}

var flag3_2=0;
var tile2=[];


var turns2=0;
function CLICK2(){
   
    currTile2=this;
    if(currTile2.src.includes("_5.jpg")){
        return;
    }
    for(let l=0;l<25;l++){
        if(tile2[l].src.includes("_5.jpg")){
            otherTile2=tile2[l];
        }
    }
    let currcoords2 = currTile2.id.split(".");// ex)"0-0" -> ["0","0"]
    let r_2 = parseInt(currcoords2[0]);
    let c_2 = parseInt(currcoords2[1]);
    let otherCoords2 = otherTile2.id.split(".");
    let r2_2=parseInt(otherCoords2[0]);
    let c2_2=parseInt(otherCoords2[1]);
    let moveLeft2 = r_2==r2_2 && c2_2==c_2-1;
    let moveRight2 = r_2==r2_2 && c2_2==c_2+1;
    let moveUp2 = r2_2==r_2-1 && c2_2==c_2;
    let moveDown2 = r2_2==r_2+1 && c2_2==c_2;
    let isAdjacent2 = moveLeft2 || moveRight2 || moveDown2 || moveUp2;
    if(isAdjacent2){
    let currImg2=currTile2.src;
    let otherImg2=otherTile2.src;
    currTile2.src=otherImg2;
    otherTile2.src=currImg2;
    turns2++;
    document.getElementById("turns2").innerText = turns2;
    }
}

function CLICK(){
   
    currTile=this;
    if(currTile.src.includes("3.jpg")){
        return;
    }

    for(let l=0;l<9;l++){
        if(tile[l].src.includes("3.jpg")){
            otherTile=tile[l];
        }
    }

    let currcoords = currTile.id.split("-");// ex)"0-0" -> ["0","0"]
    let r = parseInt(currcoords[0]);
    let c = parseInt(currcoords[1]);

    let otherCoords = otherTile.id.split("-");
    let r2=parseInt(otherCoords[0]);
    let c2=parseInt(otherCoords[1]);

    let moveLeft = r==r2 && c2==c-1;
    let moveRight = r==r2 && c2==c+1;

    let moveUp = r2==r-1 && c2==c;
    let moveDown = r2==r+1 && c2==c;

    let isAdjacent = moveLeft || moveRight || moveDown || moveUp;
    if(isAdjacent){
    let currImg=currTile.src;
    let otherImg=otherTile.src;

    currTile.src=otherImg;
    otherTile.src=currImg;

    turns++;
    document.getElementById("turns").innerText = turns;
    }
}




var x;


//third
var rows3=4;
var columns3=4;
var currTile3; //tile with which the user presses and want to exchange with blank tile
var otherTile3; //blank tile
var turns3=0;

var c10=[];
var c11=createarray(1,16);
for(let i=0;i<16;i++){
    var randomindex=getRandomNumber(0,c11.length-1);
    c10[i]=c11[randomindex];
    c11.splice(randomindex,1);
}
var ele_r,ele_c;
var flag3_3=0;
let tile3=[];

window.onload = function(){ 

    for(let r=0;r<rows3;r++){
        for(let c=0;c<columns3;c++){
            if(c10[0]==16){
                 ele_r=r;
                 ele_c=c;
               }
            tile3[flag3_3] = document.createElement("div");
            tile3[flag3_3].id=r.toString()+","+c.toString();
           
           document.getElementById("board3").append(tile3[flag3_3]);
           
           document.getElementById(tile3[flag3_3].id).innerHTML =c10.shift();

           tile3[flag3_3].addEventListener("click",CLICK3);
           flag3_3++;

        }
    }
 document.getElementById(ele_r.toString()+","+ele_c.toString()).innerHTML=" ";


    for(let r=0;r<rows;r++){
        for(let c=0;c<columns;c++){
            
            //tile is an img tag
            //<img id="0-0" src="1.jpg">
             tile[flag3] = document.createElement("img");
            tile[flag3].id=r.toString()+"-"+c.toString();
            tile[flag3].src= (a.shift()).toString() + ".jpg";


            
            tile[flag3].addEventListener("click",CLICK);
          
            document.getElementById("board").append(tile[flag3]);
            flag3++;
        }
    }

    for(let r=0;r<rows2;r++){
        for(let c=0;c<columns2;c++){
            
            //tile is an img tag
            //<img id="0-0" src="1.jpg">
             tile2[flag3_2] = document.createElement("img");
            tile2[flag3_2].id=r.toString()+"."+c.toString();
            tile2[flag3_2].src= ("_"+b.shift()).toString() + ".jpg";

            
            tile2[flag3_2].addEventListener("click",CLICK2);
            document.getElementById("board2").append(tile2[flag3_2]);
            
            flag3_2++;
        }
    }

   
}

var time3=0;
function updatecountdown3(){
    time3++;
    document.getElementById("time3").innerText = `${time3}s`;
}
setInterval(updatecountdown3,1000);

var flag3_3_3=0;
function CLICK3(){
   
    currTile3=this;
    if(currTile3.innerHTML.includes(" ")){
        return;
    }
    for(let l=0;l<4;l++){
        {
     // console.log("ji")
        for(let i=0;i<4;i++){
            
           console.log(flag3_3_3+" "+l+" "+i);
            if(document.getElementById(l.toString()+","+i.toString()).innerHTML==" "){
                otherTile3=tile3[flag3_3_3];
                break;
            }
           flag3_3_3++;
        }
    }  
    }
    flag3_3_3=0;
    let currcoords = currTile3.id.split(",");// ex)"0-0" -> ["0","0"]
    let r = parseInt(currcoords[0]);
    let c = parseInt(currcoords[1]);
    let otherCoords = otherTile3.id.split(",");
    let r2=parseInt(otherCoords[0]);
    let c2=parseInt(otherCoords[1]);
    let moveLeft = r==r2 && c2==c-1;
    let moveRight = r==r2 && c2==c+1;
    let moveUp = r2==r-1 && c2==c;
    let moveDown = r2==r+1 && c2==c;
    let isAdjacent = moveLeft || moveRight || moveDown || moveUp;
    if(isAdjacent){
    let currImg=currTile3.innerHTML;
    let otherImg=otherTile3.innerHTML;
   console.log(currImg+" "+otherImg)
    currTile3.innerHTML=otherImg;
    otherTile3.innerHTML=currImg;
    turns3++;
    document.getElementById("turns3").innerText = turns3;
    }
}


let para =document.getElementById('para');
    function togglehide(){
   let btn=document.getElementById('btn');
   let para =document.getElementById('para');
   if(para.style.display != 'none'){
   para.style.display='none';
   console.log(para.style.display);
   }
   else{
    para.style.display ='block';
   console.log(para.style.display);
   }
}

   let para2 =document.getElementById('para2');
    function togglehide2(){
   let btn2=document.getElementById('btn2');
   let para2 =document.getElementById('para2');
   if(para2.style.display != 'none'){
   para2.style.display='none';
   console.log(para2.style.display);
   }
   else{
    para2.style.display ='block';
   console.log(para2.style.display);
   }
    }

    let para3 =document.getElementById('para3');
    function togglehide3(){
   let btn3=document.getElementById('btn3');
   let para3 =document.getElementById('para3');
   if(para3.style.display != 'none'){
   para3.style.display='none';
   console.log(para2.style.display);
   }
   else{
    para3.style.display ='block';
   console.log(para3.style.display);
   }

    }

