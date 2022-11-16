import {useState, useEffect} from 'react';
import {carregaProdutores} from '../';

export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = useState([]);

  useEffect(() => {
    const restorno = carregaProdutores();
    setLista(restorno.lista);
    setTitulo(restorno.titulo);
  }, []);


  return [titulo, lista];

}
