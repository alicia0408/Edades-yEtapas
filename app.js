// Preguntando edad del usuario.
const age = parseInt(prompt("¿Cual es tu edad?"));

//ingreso de datos del cliente
if ( age <= 3 && age >= 1 ) {
	alert("Por tu edad estas clasificado en toddler");

   } else if ( age <= 5  && age >= 12 ) {
	   alert("Por tu edad estas clasificado en preschooler");

 } else if ( age <= 12 && age >= 5 ){
         alert("Por tu edad estas clasificado en gradeschooler");

     }else if ( age <= 18 && age >= 12 ) {
		    alert("Por tu edad estas clasificado en teenager");
		
      } else if ( age <= 21 && age >= 18 ) {
	alert("Por tu edad estas clasificado en young adult ");
				 
} else if (age <= 60 && age >= 21) {
	alert("Por tu edad estas clasificado en adult")
	
}
  
