 //conversion page JS code
 
 var input = document.getElementById("input")
 var output =document.getElementById("output")
 var inputtype =document.getElementById("inputtype")
 var outputtype =document.getElementById("outputtype")
 var inputtypevalue,outputtybevalue;

 input.addEventListener("keyup",  myoutput);
 inputtype.addEventListener("change",myoutput);
 outputtype.addEventListener("change",myoutput)
 
 inputtypevalue=inputtype.value;
 outputtybevalue =outputtype.value;
 
 function myoutput(){
    inputtypevalue=inputtype.value;
    outputtybevalue =outputtype.value;
   
//Bit Byte KiloBits KiloBytes MegaBits MegaMytes GigaBits GigaBytes
// convert from bit to any unit
    if(inputtypevalue==="Bit" && outputtybevalue==="Bit"){
        output.value=Number(input.value);
        
    }else if(inputtypevalue==="Bit" && outputtybevalue==="Byte"){
        output.value=Number(input.value)*0.125;
        
    }
    else if(inputtypevalue==="Bit" && outputtybevalue==="KiloBits"){
        output.value=Number(input.value)*0.001;
        
    }else if(inputtypevalue==="Bit" && outputtybevalue==="KiloBytes"){
        output.value=Number(input.value)*0.125*0.001;
        
    }
    else if(inputtypevalue==="Bit" && outputtybevalue==="MegaBits"){
        output.value=Number(input.value)*0.000001;
        
    }
    else if(inputtypevalue==="Bit" && outputtybevalue===" MegaMytes"){
        output.value=Number(input.value)*0.125*0.000001;
        
    }
    else if(inputtypevalue==="Bit" && outputtybevalue==="GigaBits"){
        output.value=Number(input.value)*0.000000001;
        
    }
    else if(inputtypevalue==="Bit" && outputtybevalue==="GigaBytes"){
        output.value=Number(input.value)*0.125*0.000000001;
        
    }

    


//convert from byte to any unit
    if(inputtypevalue==="Byte" && outputtybevalue==="Bit"){
        output.value=Number(input.value)*8;
        
    }else if(inputtypevalue==="Byte" && outputtybevalue==="Byte"){
        output.value=Number(input.value) 
        
    }
    else if(inputtypevalue==="Byte" && outputtybevalue==="KiloBits"){
        output.value=Number(input.value)*0.001*8;
        
    }else if(inputtypevalue==="Byte" && outputtybevalue==="KiloBytes"){
        output.value=Number(input.value)*0.001;
        
    }
    else if(inputtypevalue==="Byte" && outputtybevalue==="MegaBits"){
        output.value=Number(input.value)*0.000001*8;
        
    }
    else if(inputtypevalue==="Byte" && outputtybevalue===" MegaMytes"){
        output.value=Number(input.value)*0.000001;
        
    }
    else if(inputtypevalue==="Byte" && outputtybevalue==="GigaBits"){
        output.value=Number(input.value)*0.000000001*8;
        
    }
    else if(inputtypevalue==="Byte" && outputtybevalue==="GigaBytes"){
        output.value=Number(input.value) *0.000000001;
        
    }




    //convert from kiloBits to any unit
    if(inputtypevalue==="KiloBits" && outputtybevalue==="Bit"){
        output.value=Number(input.value)*1000;
        
    }else if(inputtypevalue==="KiloBits" && outputtybevalue==="Byte"){
        output.value=Number(input.value)*0.125*1000;
        
    }
    else if(inputtypevalue==="KiloBits" && outputtybevalue==="KiloBits"){
        output.value=Number(input.value);
        
    }else if(inputtypevalue==="KiloBits" && outputtybevalue==="KiloBytes"){
        output.value=Number(input.value)*0.125;
        
    }
    else if(inputtypevalue==="KiloBits" && outputtybevalue==="MegaBits"){
        output.value=Number(input.value)*0.001;
        
    }
    else if(inputtypevalue==="KiloBits" && outputtybevalue===" MegaMytes"){
        output.value=Number(input.value)*0.125*0.001;
        
    }
    else if(inputtypevalue==="KiloBits" && outputtybevalue==="GigaBits"){
        output.value=Number(input.value)*0.000001;
        
    }
    else if(inputtypevalue==="KiloBits" && outputtybevalue==="GigaBytes"){
        output.value=Number(input.value)*0.125*0.000001;
        
    }




    //convert from KiloByte to any unit
    if(inputtypevalue==="KiloBytes" && outputtybevalue==="Bit"){
        output.value=Number(input.value)*8*1000;
        
    }else if(inputtypevalue==="KiloBytes" && outputtybevalue==="Byte"){
        output.value=Number(input.value)*1000;
        
    }
    else if(inputtypevalue==="KiloBytes" && outputtybevalue==="KiloBits"){
        output.value=Number(input.value)*8;
        
    }else if(inputtypevalue==="KiloBytes" && outputtybevalue==="KiloBytes"){
        output.value=Number(input.value);
        
    }
    else if(inputtypevalue==="KiloBytes" && outputtybevalue==="MegaBits"){
        output.value=Number(input.value)*8*0.001;
        
    }
    else if(inputtypevalue==="KiloBytes" && outputtybevalue===" MegaMytes"){
        output.value=Number(input.value)*0.001;
        
    }
    else if(inputtypevalue==="KiloBytes" && outputtybevalue==="GigaBits"){
        output.value=Number(input.value)*8*0.000001;
        
    }
    else if(inputtypevalue==="KiloBytes" && outputtybevalue==="GigaBytes"){
        output.value=Number(input.value)*0.000001;
        
    }




    //convert from megabit to any unit
    if(inputtypevalue==="MegaBits" && outputtybevalue==="Bit"){
        output.value=Number(input.value)*1000000;
        
    }else if(inputtypevalue==="MegaBits" && outputtybevalue==="Byte"){
        output.value=Number(input.value)*0.125*1000000;
        
    }
    else if(inputtypevalue==="MegaBits" && outputtybevalue==="KiloBits"){
        output.value=Number(input.value)*1000;
        
    }else if(inputtypevalue==="MegaBits" && outputtybevalue==="KiloBytes"){
        output.value=Number(input.value)*0.125*1000;
        
    }
    else if(inputtypevalue==="MegaBits" && outputtybevalue==="MegaBits"){
        output.value=Number(input.value);
        
    }
    else if(inputtypevalue==="MegaBits" && outputtybevalue===" MegaMytes"){
        output.value=Number(input.value)*0.125;
        
    }
    else if(inputtypevalue==="MegaBits" && outputtybevalue==="GigaBits"){
        output.value=Number(input.value)*0.001;
        
    }
    else if(inputtypevalue==="MegaBits" && outputtybevalue==="GigaBytes"){
        output.value=Number(input.value)*0.125*0.001;
        
    }



    //convert from megabit to any unit

    if(inputtypevalue==="MegaMytes" && outputtybevalue==="Bit"){
        output.value=Number(input.value)*8*1000000;
        
    }else if(inputtypevalue==="MegaMytes" && outputtybevalue==="Byte"){
        output.value=Number(input.value)*1000000;
        
    }
    else if(inputtypevalue==="MegaMytes" && outputtybevalue==="KiloBits"){
        output.value=Number(input.value)*8*1000;
        
    }else if(inputtypevalue==="MegaMytes" && outputtybevalue==="KiloBytes"){
        output.value=Number(input.value)*1000;
        
    }
    else if(inputtypevalue==="MegaMytes" && outputtybevalue==="MegaBits"){
        output.value=Number(input.value)*8;
        
    }
    else if(inputtypevalue==="MegaMytes" && outputtybevalue===" MegaMytes"){
        output.value=Number(input.value);
        
    }
    else if(inputtypevalue==="MegaMytes" && outputtybevalue==="GigaBits"){
        output.value=Number(input.value)*880.001;
        
    }
    else if(inputtypevalue==="MegaMytes" && outputtybevalue==="GigaBytes"){
        output.value=Number(input.value)*0.001;
        
    }



    //convert from gigabit to any unit
    if(inputtypevalue==="GigaBits" && outputtybevalue==="Bit"){
        output.value=Number(input.value)*1000000000;
        
    }else if(inputtypevalue==="GigaBits" && outputtybevalue==="Byte"){
        output.value=Number(input.value)*0.125*1000000000;
        
    }
    else if(inputtypevalue==="GigaBits" && outputtybevalue==="KiloBits"){
        output.value=Number(input.value)*1000000;
        
    }else if(inputtypevalue==="GigaBits" && outputtybevalue==="KiloBytes"){
        output.value=Number(input.value)*0.125*1000000;
        
    }
    else if(inputtypevalue==="GigaBits" && outputtybevalue==="MegaBits"){
        output.value=Number(input.value)*1000;
        
    }
    else if(inputtypevalue==="GigaBits" && outputtybevalue===" MegaMytes"){
        output.value=Number(input.value)*0.125*1000;
        
    }
    else if(inputtypevalue==="GigaBits" && outputtybevalue==="GigaBits"){
        output.value=Number(input.value);
        
    }
    else if(inputtypevalue==="GigaBits" && outputtybevalue==="GigaBytes"){
        output.value=Number(input.value)*0.125;
        
    }





    //convert from gigabyte to any unit
    if(inputtypevalue==="GigaBytes" && outputtybevalue==="Bit"){
        output.value=Number(input.value)*8*1000000000;
        
    }else if(inputtypevalue==="GigaBytes" && outputtybevalue==="Byte"){
        output.value=Number(input.value)*1000000000;
        
    }
    else if(inputtypevalue==="GigaBytes" && outputtybevalue==="KiloBits"){
        output.value=Number(input.value)*8*1000000;
        
    }else if(inputtypevalue==="GigaBytes" && outputtybevalue==="KiloBytes"){
        output.value=Number(input.value)*1000000;
        
    }
    else if(inputtypevalue==="GigaBytes" && outputtybevalue==="MegaBits"){
        output.value=Number(input.value)*8*1000;
        
    }
    else if(inputtypevalue==="GigaBytes" && outputtybevalue===" MegaMytes"){
        output.value=Number(input.value)*1000;
        
    }
    else if(inputtypevalue==="GigaBytes" && outputtybevalue==="GigaBits"){
        output.value=Number(input.value)*8;
        
    }
    else if(inputtypevalue==="GigaBytes" && outputtybevalue==="GigaBytes"){
        output.value=Number(input.value)*0.125;
        
    }

    
 }