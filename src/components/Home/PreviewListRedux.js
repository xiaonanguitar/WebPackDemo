const initialState = {
    loading: true,
    error: false,
    articleList: []
}

const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

export function loadArticles() {
    return (dispatch,getState)=>{
        dispatch({type:LOAD_ARTICLES});
        return fetch('/api/articles.json')
        .then(res=>res.json())
        .then(res=>{
            dispatch({
                type: LOAD_ARTICLES_SUCCESS,
                res
            })
        })
    }
}

function previewlist(state=initialState,action) {
    switch(action.type) {
        case LOAD_ARTICLES: {
            return Object.assign({},state,{
                loading: true,
                error: false,
            })
        }
        case LOAD_ARTICLES_SUCCESS: {
            return Object.assign({},state,{
                loading: false,
                error: false,
                articleList: action.res.articleList,
            })
        }
        case LOAD_ARTICLES_ERROR: {
            return Object.assign({},state,{
                loading: false,
                error: true,
            })
        }
        default:
            return state;
    }
}

export default previewlist;