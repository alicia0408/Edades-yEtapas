
// Preguntando edad del usuario.


let isInt = function (n) { return parseInt(n) === n };

do {
	let age = parseInt(prompt("¿Cual es tu edad?"));
	 
} while (!isInt === age);
 
   alert("¡Error!");


//ingreso de datos del cliente
if (age >= 1 && age <= 3  ) {
	alert("Por tu edad estas clasificado en toddler");

   } else if (age <= 5  && age >= 12) {
	   alert("Por tu edad estas clasificado en preschooler");

 } else if (age >= 5 && age <= 12){
         alert("Por tu edad estas clasificado en gradeschooler");

     }else if (age >= 12 && age <= 18) {
		    alert("Por tu edad estas clasificado en teenager");
		
      } else if (age >= 18 && age <= 21) {
	alert("Por tu edad estas clasificado en young adult ");
				 
} else{(age >= 22 && age <= 60);
	alert("Por tu edad estas clasificado en adult");
	
}
  
