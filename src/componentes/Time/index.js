import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const css = { backgroundColor: props.corFundoSecundaria }

    return (
       (props.colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: props.corFundo}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador cor={props.corFundo} key={colaborador.nome} nome = {colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}
            </div>
       </section> 
       : ''
    )
}

export default Time