var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
ry=10;
rx=10;
x=10
y=280
bgimage="racing.jpg";
car1image="car1.png";
car2image="car2.jpg";
function add(){
    backgroung_img=new Image();
    backgroung_img.onload=uploadBackground;
    backgroung_img.src=bgimage;

    car1_img=new Image();
    car1_img.onload=uploadcar1;
    car1_img.src=car1image;

    car2_img=new Image();
    car2_img.onload=uploadcar2;
    car2_img.src=car2image;
} 
function uploadBackground(){
ctx.drawImage(backgroung_img,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_img,rx,ry,200,100);
    }
    
function uploadcar2(){
    ctx.drawImage(car2_img,x,y,200,100);
}
   window.addEventListener("keydown" ,my_keydown);
        
       function my_keydown(e){
             keypressed=e.keyCode;
                console.log(keypressed);
                if(keypressed=="38"){
                    up1();
                    console.log("up");
                }
                if(keypressed=="40"){
                    down1();
                    console.log("down");
                }
                if(keypressed=="37"){
                    left1();
                    console.log("left");
                }
                if(keypressed=="39"){
                    right1();
                    console.log("right");
                }

                if(keypressed=="65"){
                    up2();
                    console.log("up2");
                }
                if(keypressed=="66"){
                    down2();
                    console.log("down2");
                }
                if(keypressed=="67"){
                    left2();
                    console.log("left2");
                }
                if(keypressed=="68"){
                    right2();
                    console.log("right2");
                }
            }
            function up1(){
                if(ry>=0){
                    ry=ry-10;
                    uploadBackground();
                    uploadcar1();
                    uploadcar2();
                }
            }
            function down1(){
                if(ry<=300){
                    ry=ry+10;
                    uploadBackground();
                    uploadcar1();
                    uploadcar2();
                }
            }
            function left1(){
                if(rx>=0){
                    rx=rx-10;
                    uploadBackground();
                    uploadcar1();
                    uploadcar2();
                }
            }
            function right1(){
                if(rx<=700){
                    rx=rx+10;
                    uploadBackground();
                    uploadcar1();
                    uploadcar2();
                    if(rx>=620){
                        window.alert("Car1 has won");
                    }
                }
            }
            
            function up2(){
                if(y>=0){
                    y=y-10;
                    uploadBackground();
                    uploadcar2();
                    uploadcar1();
                }
            }
            function down2(){
                if(y<=300){
                    y=y+10;
                    uploadBackground();
                    uploadcar2();
                    uploadcar1();
                }
            }
              
               function left2(){
                   if(x>=0){
                       x=x-10;
                       uploadBackground();
                       uploadcar2();
                       uploadcar1();
                   }
               }
               function right2(){
                   if(x<=700){
                       x=x+10;
                       uploadBackground();
                       uploadcar2();
                       uploadcar1();
                       if(x>=620){
                        window.alert("Car2 has won");
                    }
                   }
               }