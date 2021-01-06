const notas = [ 7.1, 5.1, 9.4, 7.5]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'ana',
    sobrenome: 'silva',
    idade: 29,
    peso: 64
}

for(atributo in pessoa){
     console.log(`${atributo} = ${pessoa[atributo]}`)
}