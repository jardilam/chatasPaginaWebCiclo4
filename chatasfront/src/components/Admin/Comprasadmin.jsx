import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';

const Comprasadmin = () => {
    return (
        <div>
            <h1>Productos</h1>
            <div class="card">
                <div class="card-header">
                    Lista de productos
                </div>
                <div class="card-body">
                    <Button variant="contained" color="primary">
                        <InsertEmoticonTwoToneIcon /> &nbsp; Insertar Nuevo producto
                    </Button>
                    <br /><br />
                    <div class="table-responsive">
                        <table class="table table-bordered align-middle table-striped">
                            <tbody>
                                <tr>
                                    <th>#</th>
                                    <th>Nombres</th>
                                    <th>Apellidos</th>
                                    <th>Correo</th>
                                    <th>Fecha de nacimiento</th>
                                    <th>Ultima fecha de inicio</th>
                                    <th>Acciones</th>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>Juan Camilo Torres</td>
                                    <td>jucato@mail.com</td>
                                    <td>12-11-2021 17:35:15 </td>
                                    <td>15.000</td>
                                    <td>
                                        <button type="button" class="btn btn-success">Editar</button> |
                                        <button type="button" class="btn btn-danger">Eliminar</button>

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comprasadmin
