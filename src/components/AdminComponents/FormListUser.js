import React from 'react';


export class FormListUser extends React.Component{

    render(){
        return(
            <div className="formListUser">
                <h3>Lista de Usuarios </h3>
                <div className="tabla">
                    <div className='registerHeader'>
                        <h4> ID </h4>
                        <h4> Nombre </h4>
                        <h4> Apellidos </h4>
                        <h4> Nombre de Usuario </h4>
                    </div>
                    <div className="tablaScroll"> </div>
                </div>

                

            </div>
        );

    }
}

export default FormListUser;