exports.greet = function(){
    var date = new Date();
    var h = date.getHours();
    if(h < 12){
        console.log("Good Morning")
    } else if(h > 12 && h < 17){
        console.log("Good Afternoon")
    }else if(h > 17);
        console.log("Good Evening")
    
   

}