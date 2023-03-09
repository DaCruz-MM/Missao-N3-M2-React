import { Livro } from '../modelo/Livro';

const livros: Array<Livro> = [
    {
        "codigo": 1,
        "codEditora": 1,
        "titulo": "O nome do vento",
        "resumo": "Ninguém sabe ao certo quem é o herói ou o vilão desse fascinante universo criado por Patrick Rothfuss. Na realidade, essas duas figuras se concentram em Kote, um homem enigmático que se esconde sob a identidade de proprietário da hospedaria Marco do Percurso.",
        "autores": ['Patrick Rothfuss']
    },{
        "codigo": 2,
        "codEditora": 2,
        "titulo": "Use a Cabeça! Java",
        "resumo": "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
        "autores": ['Bert Bates','Kathy Sierra']
    },{
        "codigo": 3,
        "codEditora": 3,
        "titulo": "O Príncipe",
        "resumo": "Nesta obra, que é um clássico sobre pensamento político, o grande escritor Maquiavel mostra como funciona a ciência política.",
        "autores": ['Nicolau Maquiavel']
    },
]

class ControleLivros {
    obterLivros(){
        return livros
    }

    incluir(livro: Livro){
        let Livros = this.obterLivros()
        let maxId = Livros.reduce(
            (max, Livros) => (Livros["codigo"] > max ? Livros["codigo"] : max), 0);
        livro.codigo = maxId+1
        livros.push(livro)
    }

    excluir(codigo:number){
        let index: number = this.obterLivros().findIndex(livro => livro["codigo"] === codigo )
        this.obterLivros().splice(index,1)
    }
}

export default ControleLivros