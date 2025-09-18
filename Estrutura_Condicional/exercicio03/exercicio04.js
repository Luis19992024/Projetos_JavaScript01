const idade = 18;

if(idade<16){
    console.log(" Não elegível!")
}else
     if(idade>=18 && idade<=65){
    console.log(idade + " Eleitor obrigatório!")
}else 
    if(idade>=16 && idade<=18  || idade>=65){
    console.log(" Eleitor facultativo");
}