
<?php
 
   $name =$_POST["Name"];
   $Lastname=$_POST["Lastname"];
   $email=$_POST["email"];

   $server_name="localhost";
   $user_name="root";
   $password="";
   $db_name="tt284";


   $conection= new mysqli( $server_name,$user_name,$password,$db_name);
   
   
   $query= "insert into tt284(firstName, Lastname, email) values('$name', '$Lastname', '$email')";
   mysqli_query($conection, $query);

   
   

    $conection -> close();
?>
  
  <h3>Data submited successfully</h3> 
  <a href="myhtmlform.html"> click here to back </a>
    
    
 
 