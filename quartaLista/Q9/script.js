const mensagem = () =>{
    console.log('Olá, Mundo!');
}

const Media = (num1, num2, num3) => {
    return (num1 + num2 + num3) / 3;
}

const quadrado = (num) => {
    return num * num;
}


var global= 0;
const funcaoIf = () => {
    if(global == 0){
        let local = 1;
    }

    console.log(global + local);
}