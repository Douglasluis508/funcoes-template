// Acompanhe a Prática 
// const digitarNome = (nome)=>{
//     return nome

// }
// console.log(digitarNome('Douglas'))
// console.log(digitarNome('Pipoca'))
// console.log(digitarNome('Lenara'))

// const verficarNumperoPar = (numero)=>{
//     const verficarPar = numero %2 === 0
//     const soma = numero + 10
//     const multiplicacao = numero * numero
//     return `O número ${numero} é par? ${verficarPar}.Somado com 10,\no resultado é ${soma} e multiplicado por \nele mesmo o resultado é ${multiplicacao}`
// }
// console.log(verficarNumperoPar(10))

// const verificarCadastro = (login, senha)=>{
//     const loginArmazenado = 'Douglasluis508@gmail.com';
//     const senhaArmazenada = '123456789';
//     console.log(login === loginArmazenado && senha === senhaArmazenada);
//     return [login, senha]
// };
// (verificarCadastro('Douglasluis508@gmail.com', '123456789'));

const checarCadastro = (nome, anoNascimento, anoAtual)=>{
        const maiorOuMenor = anoNascimento - anoAtual;
        console.log(`${nome} é maior de idade? ${maiorOuMenor >= 18}`);  
};
checarCadastro('Douglas' ,'2015', '2023')
checarCadastro('Pipoca', '2017', '2023')
