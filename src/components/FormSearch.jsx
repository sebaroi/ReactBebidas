import React from 'react';

const FormSearch = ({busqueda, TextoBoton}) => {
    return (
        <div>
          <form className="d-flex">
            <input className="form-control me-sm-2" type="text" placeholder={busqueda} />
            <button className="btn btn-secondary my-2 my-sm-0" type="submit">{TextoBoton}</button>
          </form>
        </div>
    );
}

export default FormSearch;
