import React, { Component } from 'react';
import './bootstrap.min.css';
import Header from './Components/Header';
import NuevaCita from './Components/NuevaCita';

class App extends Component {
  state = {
    citas: [] //Las citas son un arreglo de objetos
  };

  crearNuevaCita = datos => {
    //Copiar el state actual
    const citas = [...this.state.citas, datos];

    //Agregar el nuevo state
    this.setState({
      citas: citas
    });
  };

  render() {
    return (
      <div className='container'>
        <Header titulo='Administrador de pacientes de veterinaria' />
        <div className='row'>
          <div className='col-md-10 mx-auto'>
            <NuevaCita crearNuevaCita={this.crearNuevaCita} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
