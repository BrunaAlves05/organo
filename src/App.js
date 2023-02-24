import { useState } from 'react';
import Banner from './componentes/banner/Banner';
import Formulario from './componentes/formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-end',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome:'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'UX e Design',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome: 'Mobile',         
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const NovoColaborador = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>

      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => NovoColaborador(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome = {time.nome} 
        corFundo = {time.corPrimaria} 
        corFundoSecundaria = {time.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome )}
        />)}
      
    </div>  
  );
}

export default App;
