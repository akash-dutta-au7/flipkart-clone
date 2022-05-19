import { CategoryType } from '../../actiontypes';
const { GET_CATEGORIES_REQUEST, GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } = CategoryType;

const InitialState = {
	categories: [],
	loading: false,
	error: '',
	message: '',
};

export const CategoryReducer = (state = InitialState, action) => {
	const { type, payload } = action;
	switch (type) {
		case GET_CATEGORIES_SUCCESS:
			state = {
				...state,
				categories: payload,
			};
			break;
	}

	return state;
};