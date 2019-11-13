import React, { useState, useEffect } from 'react';
import api from './Api';
import FriendForm from './FriendForm'

function FriendsList(){

	const [friends, setFriends] = useState([])

	useEffect(()=>{
		api().get('/friends')
			.then((res)=>{
				setFriends(...friends, res.data)
			})
			.catch((err)=>{
				console.log(err)
			})
	}, [])

	return(
		<div className='friends-list'>
			<h1>Your Friends!</h1>
			<FriendForm />
			{friends.length ? (friends.map((friend)=>{return(
				<div key={friend.id} className='friend'>
					<h3>Name: {friend.name}</h3>
					<p>Age: {friend.age}</p>
					<p>Email: {friend.email}</p>
				</div>
				)})):(<div>Loading...</div>)}
		</div>
	)
}

export default FriendsList;