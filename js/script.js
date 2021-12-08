//conditional statement;

var age = 15;
var gender ="male";

if(age>=15 && age<=20){
    if(gender=="male"){
        document.write("You're permitted for the tour with your Gardian.");
    }else{
        document.write("You're not eligible for this tour.");
    }        
}else if(age>=21){
    if (gender=="male"){
        document.write("Congratulations!! You're Eligible For Solo Tour.");
    }else if(age>=26 && gender=="female"){
        document.write("Congratulations!! Your're Selected For This Tour.");
    }else{
        document.write("Sorry!! You're Not Eligible For This Tour.");
    }
}else{
    document.write("Oop!! Try Next Year.");    
    
    
}


