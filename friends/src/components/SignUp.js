import React, { useState, useEffect } from 'react';
import api from './Api';



function SignUp(props){
	const [error, setError] = useState()
	const [user, setUser] = useState({
		username: '',
		password: ''
	})

	const handleChange = e =>{
        console.log(user)
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = e =>{
		e.preventDefault()

		api().post('/signup', user)

		props.history.go('/sigin')
	}

	return(
		<div className='sign-in'>
			<h2> Sign Up </h2>
			<form onSubmit={handleSubmit}>
				{error && <div className='error'>{error}</div>}
				<input type='username' name='username' placeholder='username' value={user.username} onChange={handleChange} /> <br/>
				<input type='text' name='password' placeholder='password' value={user.password} onChange={handleChange} /> <br/>

				<button type='submit'> Register </button>
			</form>
		</div>
		)
}

export default SignUp;