import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './Components/Header';
import NuevaCita from './Components/NuevaCita';
import ListaCitas from './Components/ListaCitas';

class App extends Component {
  state = {
    citas: [] //Las citas son un arreglo de objetos
  };

  //Cuando la aplicacion carga
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({
        citas: JSON.parse(citasLS)
      });
    }
  }

  //Cuando agregamos o eliminamos una cita
  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  crearNuevaCita = datos => {
    //Copiar el state actual
    const citas = [...this.state.citas, datos];

    //Agregar el nuevo state
    this.setState({
      citas: citas
    });
  };

  //elimina las citas del state
  eliminarCita = id => {
    //Tomar una copia del state
    const citasActuales = [...this.state.citas];

    //Utilizar filter para sacar el elemento id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id);

    this.setState({ citas });
  };

  render() {
    return (
      <div className='container'>
        <Header titulo='Administrador de pacientes de veterinaria' />
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
          <div className='mt-5 col-md-10 mx-auto'>
            <ListaCitas
              citas={this.state.citas}
              eliminarCita={this.eliminarCita}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
