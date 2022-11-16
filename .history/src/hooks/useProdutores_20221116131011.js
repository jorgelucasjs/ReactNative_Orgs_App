import {useState, useEffect} from 'react';
import { carregaProdutores } from '../../.history/src/servicos/carregaDados_20221116090756';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const restorno = carregaProdutorestores();
    setLista(restorno.lista);
    setTitulo(restorno.titulo);
  }, []);
}
