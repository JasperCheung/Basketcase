import axios from 'axios';
export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';
export const FETCH_FAVORITES = 'FETCH_FAVORITES'


const addFavorite = (playerID) => {
	return {
		type: ADD_FAVORITE,
		payload: playerID 
	}
};

const deleteFavorite = (playerID) => {
	return {
		type: DELETE_FAVORITE,
		payload: playerID
	}
}

const fetchFavorites = (data) => {
	return {
	type: FETCH_FAVORITES,
	payload: data
	}
}
// thunks

export const addFavoriteThunk = (playerID) => (dispatch) => {
	// 
		return axios
		.post(`http://localhost:5000/api/users/1/players/${playerID}`, playerID)
		.then(res => res.data)
		.then(playerID => dispatch(addFavorite(playerID)))
        .catch(err => console.log(err));
};

export const deleteFavoriteThunk = (playerID) => (dispatch) => {
	return axios
	.delete(`http://localhost:5000/api/users/1/players/${playerID}`, playerID)
	.then(res => res.data)
	.then(playerID => dispatch(deleteFavorite(playerID)))
	.catch(err => console.log(err));
};

export const fetchFavoritesThunk = (data) => (dispatch) => {
	return axios
	.get('http://localhost:5000/api/users/1/favorites/')
	.then(res => res.data)
	.then(data => dispatch(fetchFavorites(data)))
	.catch(err => console.log(err));


}
