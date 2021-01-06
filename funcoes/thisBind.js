function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa


// criar uma const mantém o this true, não importa quem estiver chamando a função, sempre vai apontar para o objeto.

// usar o bind no final da função referenciando ao this. 
