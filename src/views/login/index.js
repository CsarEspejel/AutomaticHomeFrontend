import React, {useState, useEffect} from 'react';
import Header from '../../components/header/Header';
import Axios from 'axios';
import AuthService from '../../services/AuthService';
import './login.css';

const Login = () => {
	const [username, changeUsername] = useState('');
	const [password, changePassword] = useState('');

	// useEffect(() => {
	// 	const fetchData = async (user, pass) =>{
	// 		try{
	// 			const {data} = await Axios.post(
	// 				"http://localhost:8000/api/login",
	// 				{
	// 					"username": user,
	// 					"password": pass
	// 				}
	// 			);
	// 			console.log("datos", data);
	// 		}catch(error){
	// 			console.log("error", error);
	// 		}
	// 	}
	// 	fetchData(
	// 		"cesaer@gmail.com",
	// 		"chalemente"
	// 	);
	// });

	const changeState = (e) => {
		if(e.target.name === 'email'){
			changeUsername(e.target.value);
		} else if(e.target.name === 'password'){
			changePassword(e.target.value);
		}
	}

	const onSubmit = async (e) => {
		e.preventDefault();

		const credenciales = {
			"email": username,
			"password": password
		};
		try{
			const {data} = await Axios.post(
				"http://localhost:8000/api/login",
				credenciales
			);
			console.log("datos", data);
		}catch(error){
			console.log("error", error);
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