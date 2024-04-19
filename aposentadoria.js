const nome = "Silvana";
const sexo = "F"
const idade = 48;
const contribuicao = 23;

const soma = idade + contribuicao 

if (sexo === "F"){
    if (contribuicao >= 30 && soma >= 85  ){
        console.log(`${nome},você pode se aposentar!`);
    }
     else {
        console.log(`${nome},voçê ainda não pode se aposentar!`);
         }
}else if (sexo === "M"){
      if (contribuicao >= 35 && soma >= 95){
         console.log(`${nome},você pode se aposentar!`);
      } else {
        console.log(`${nome}, você ainda não pode se aposentar!`);
      } 
            
}
