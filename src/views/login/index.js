import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Header from '../../components/header/Header';
import './login.css';

const Login = () => {
	const [lista, changeLista] = useState([])
	const [username, changeUsername] = useState('');
	const [password, changePassword] = useState('');

	useEffect(() => {
		Axios({
			url: "https://jsonplaceholder.typicode.com/posts",
		})
		.then((response) => {
			changeLista(response.data);
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
	}, [changeLista]);

	const changeState = (e) => {
		if(e.target.name === 'email'){
			changeUsername(e.target.value);
		} else if(e.target.name === 'password'){
			changePassword(e.target.value);
		}
	}

	const onSubmit = (e) => {
		e.preventDefault();

		if (username === 'csaer@gmail.com' && password === 'chale')  {
			alert('credenciales correctas')
		}else{
			alert('intenta de nuevo')
		}
	}

	return (
		<div>
			<Header />
			<div className="container login">
				<div className="card text-center">
					<div className="card-header">
						Iniciar Sesión
					</div>
					<div className="card-body">
						<form action="" onSubmit={onSubmit}>
							<div className='form-group'>
								<label htmlFor="email">Correo</label>
								<input 
									type="email" 
									className='form-control' 
									id='email' 
									name='email' 
									aria-describedby='emailHelp'
									onChange={changeState}
								/>
								<small id='emailHelp' className='form-text text-muted'>También puedes usar tu nombre de usuario</small>
							</div>
							<div className='form-group'>
								<label htmlFor="password">Contraseña</label>
								<input 
									type="password" 
									className='form-control' 
									id='password' 
									name='password'
									onChange={changeState}
								/>
							</div>
							<button type='submit' className="btn btn-primary">Entremos</button>
						</form>

					</div>
					<div className="card-footer text-muted">
						Vamo a armar algo chido
					</div>
					</div>
			</div>
		</div>
		);
}

export default Login;