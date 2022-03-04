function daruz(){
    var re1 = Number(val1.value)
    var re2 = Number(val2.value)
    var re3 = Number(val3.value)
    var re4 = Number(val4.value)
   result.value = re1 + re2 + re3 + re4
   if(result.value>100){
       result.value = "invalid"
       result.style.color = "blue"
   }
}
function gpaValue(){
    if (result.value>100){
        val7.value = "invalid"
        val7.style.color ="white"
        val7.style. backgroundColor ="red"
    }
    else{
        val7.value = result.value/20
    }
}
function grade(){
    if (val7.value>4.5 || val7.value==5){
        seventhval.value = " Excellent A "
    }else if (val7.value>4 || val7.value==4.5) {
        seventhval.value = " Very good B "
        
    }
    else if (val7.value>3.5 || val7.value==4) {
        seventhval.value = " Good C " 
        seventhval.style.backgroundColor = "blue"  
        seventhval.style.color = "white"       
    }
    else if (val7.value>2 || val7.value==3.5) {
        seventhval.value = " Accepted D "
        seventhval.style.backgroundColor = "green"  
        seventhval.style.color = "white"        
    }
    else if(val7.value>0 || val7.value==2){
        seventhval.value = " Fail E " 
        seventhval.style.backgroundColor = "red"  
        seventhval.style.color = "white"  

    }
    else{
        seventhval.value = " Invalid "   
        
    } 
    


}