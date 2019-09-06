import React, { useState, Fragment } from 'react';

const Date = ({date, index, DeleteDate}) => {
  return ( 
    <div className="cita">
      <p>Mascota: <span>{date.mascota}</span></p>
      <p>Dueno: <span>{date.propietario}</span></p>
      <p>Fecha: <span>{date.fecha}</span></p>
      <p>Hora: <span>{date.hora}</span></p>
      <p>Sintomas: <span>{date.sintomas}</span></p>
      <button 
        onClick={ () => DeleteDate(index)}
        type="button" class="button eliminar u-full-width">Eliminar X</button>
    </div>
   );
}

const Formulario = ({createDate}) => {
  const stateInitial = {
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  }
  const [date, updateDate] = useState(stateInitial)

  const handleChange = e => {
    updateDate({
      [e.target.name]: e.target.value
    })
  }

  const sendDate = e => {
    e.preventDefault();
    console.log(date)
    createDate(date)
    updateDate(stateInitial)
  }
  console.log(date)

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={ sendDate }>
        <label>Nombre Mascota</label>
        <input 
          type="text" 
          name="mascota"
          className="u-full-width" 
          placeholder="Nombre Mascota"
          onChange={ handleChange }
          value={date.mascota}
        />

        <label>Nombre Dueño</label>
        <input 
          type="text" 
          name="propietario"
          className="u-full-width"  
          placeholder="Nombre Dueño de la Mascota"
          onChange={ handleChange }
          value={date.propietario}
        />

        <label>Fecha</label>
        <input 
          type="date" 
          className="u-full-width"
          name="fecha"
          onChange={ handleChange }
          value={date.fecha}
        />               

        <label>Hora</label>
        <input 
          type="time" 
          className="u-full-width"
          name="hora"
          onChange={ handleChange }
          value={date.hora}
        />

        <label>Sintomas</label>
        <textarea 
          className="u-full-width"
          name="sintomas"
          onChange={ handleChange }
          value={date.sintomas}
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Agregar</button>
      </form>
  </Fragment>
  )
}

function App() {

  const [dates, setDates] = useState([])

  const createDate = date => {
    const newDate = [...dates, date];
    console.log(newDate)
    setDates(newDate)
  }

  const DeleteDate = index => {
    const newDate = [...dates];
    newDate.splice(index, 1);
    setDates(newDate)
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              createDate={createDate}
            />
          </div>
          <div className="one-half column">
            {
              dates.map( (date, index) => (
                <Date 
                  key={index}
                  index={index}
                  date={date}
                  DeleteDate={DeleteDate}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
