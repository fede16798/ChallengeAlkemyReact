import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Listado = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(!token) {
            console.log('Ejecucion');
            navigate('/login');
        }
    })
    
    return (
        <h2>Pagina de listado</h2>
    )
}

export default Listado;