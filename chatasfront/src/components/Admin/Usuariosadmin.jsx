import React, { useState ,useEffect} from 'react'
import Axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import InsertEmoticonTwoToneIcon from '@mui/icons-material/InsertEmoticonTwoTone';


const Usuariosadmin = () => {

    const [empleados, setEmpleados] = useState([])

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [birthdate,setBirthdate] = useState('');

    useEffect(()=>{
        listarUsuarios();
    },[])

    const listarUsuarios = async() => {
        const token= sessionStorage.getItem('token')
        const response = await Axios.get('/users/list-all',{headers:{'autorizacion':token}});
        console.log(response.data);
        setEmpleados(response.data);

    }
    
    const borrarUsuario = async(id) => {
        const token= sessionStorage.getItem('token')
        const response = await Axios.put('/users/delete/'+id,{headers:{'autorizacion':token}});
        const mensaje = response.data.message;
        Swal.fire({  
            icon: 'success',
            title: mensaje,
            showConfirmButton: false,
            timer: 1500
        });

    }

    return (
        <div>
            <h1>Usuarios</h1>
                <div class="card">
                    <div class="card-header">
                        Lista de usuarios
                    </div>
                    <div class="card-body">
                        <Button variant="contained" color="primary">
                        <InsertEmoticonTwoToneIcon /> &nbsp; Insertar Nuevo usuario
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
                                    
                                        {
                                            empleados.map((empleado,i)=>(
                                                <tr key= {empleado._id}>
                                                    <td>{i+1}</td>
                                                    <td>{empleado.name}</td>
                                                    <td>{empleado.surname}</td>
                                                    <td>{empleado.email}</td>
                                                    <td>{empleado.birthdate}</td>
                                                    <td>{empleado.birthdate}</td>
                                                    <td>
                                                        <Link variant="outlined" color="secondary" to={'/actualizar/'+empleado._id}>
                                                        <SendIcon />Editar
                                                        </Link> | <Button variant="outlined" color="error" onClick={()=>borrarUsuario(empleado._id)}>
                                                        <DeleteIcon />Eliminar
                                                        </Button>   
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>      
        </div>
    )
};

export default Usuariosadmin
