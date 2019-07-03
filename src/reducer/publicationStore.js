import {
    GET_PUBLICATION_LIST_LOADING,
    GET_PUBLICATION_LIST_SUCCESS,
    GET_PUBLICATION_LIST_ERROR,
    GET_PUBLICATION_SUCCESS,
    ERROR_CODES,
} from '../util/constants';

const inicialState = {
    publication: {
        list: [
        ],
        currentCurrent: {
            id: 0,
            title: '',
            description: '',
        },
        isLoading: false,
        error: {},
        listInfo: {
            hits: 0,
            page: 0,
        }
    },
};

const publicationStore = (state = inicialState, action) => {
    switch (action.type) {
        case GET_PUBLICATION_LIST_LOADING:
            return {
                ...state,
                publication: {
                    ...state.publication,
                    isLoading: true,
                }
            };
        case GET_PUBLICATION_SUCCESS:
            return {
                ...state,
                publication: {
                    ...state.publication,
                    currentCurrent: {
                        ...action.payload,
                    }
                }
            };
        case GET_PUBLICATION_LIST_SUCCESS:
            return {
                ...state,
                publication: {
                    ...state.publication,
                    list: action.payload.data,
                    listInfo: {
                        ...state.publication.listInfo,
                        hits: action.payload.hits,
                    }
                }
            };
        case GET_PUBLICATION_LIST_ERROR:
            return {
                ...state,
                publication: {
                    ...state.publication,
                    error: action.payload,
                }
            };

        default:
            return state;
    }
};

export default publicationStore;