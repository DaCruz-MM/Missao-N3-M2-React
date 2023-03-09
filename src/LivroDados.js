import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import ControleLivros from './controle/ControleLivros';
import ControleEditoras from './controle/ControleEditora';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditoras();

export default function LivroDados() {
    const opcoes = controleEditora.getEditoras().map(function(editora) {
        const vetor = {};
        vetor['value'] = editora.codEditora;
        vetor['text'] = editora.nome;
        return vetor;
    });

    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(opcoes[0].value);
    const navigate = useNavigate();

    const tratarCombo = (e) => setCodEditora(Number(e.target.value));
    const incluir = (e) => {
        e.preventDefault();
        var livro = {
            codigo: 0,
            codEditora: codEditora,
            titulo: titulo,
            resumo: resumo,
            autores: autores.split("\n")
        }
        controleLivro.incluir(livro)
        navigate("/")
    }

    return(
        <main>
            <h1 class="text-center">Dados do Livro</h1>
            <div class="container mb-4">
                <form class="custom-centered" onSubmit={incluir}>
                    <div class="form-group mb-1">
                        <label for="titulo">Título</label><br/>
                        <input name="titulo" class="form-control" onChange={(e) => setTitulo(e.target.value)} required></input><br/>
                    </div>

                    <div class="form-group mb-1">
                        <label for="resumo">Resumo</label><br/>
                        <textarea name="resumo" class="form-control" onChange={(e) => setResumo(e.target.value)} ></textarea><br/>
                    </div>

                    <div class="form-group mb-1">
                        <label for="editora">Editora</label><br/>
                        <select name="editora" class="form-control" onChange={tratarCombo}>
                            {opcoes.map((opcao, index) => (
                                <option value={opcao.value} key={index}>{opcao.text}</option>
                            ))}
                        </select><br/>
                    </div>

                    <div class="form-group mb-1">
                        <label for="autores">Autores (1 por linha)</label><br/>
                        <textarea name="autores" class="form-control" onChange={(e) => setAutores(e.target.value)}></textarea><br/>
                    </div>

                    <button class="btn btn-primary" type="submit">Salvar Dados</button>
                </form>
            </div>
        </main>
    );
};