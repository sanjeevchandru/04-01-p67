document.write("31.to find the largest of three given integers."+"<br>");
function test31(x,y,z){
    if(x==y || y==z ||z==x){
        return "both values are equal";
    }
    if(x>y && x>z){
        return x;
    }
    else if(y>x && y>z){
        return y
    }
    else if(z>x && z>y){
        return z;
    }
    
}
document.write("The numbers are :10,20,30, Ans: "+test31(10,20,30)+"<br>");
document.write("The numbers are :30,30,30, Ans: "+test31(30,30,30)+"<br><br>");