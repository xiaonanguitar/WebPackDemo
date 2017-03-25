const initialState = {
    loading: true,
    error: false,
    articleList: []
}

const LOAD_ARTICLES = 'LOAD_ARTICLES';
const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
const LOAD_ARTICLES_ERROR = 'LOAD_ARTICLES_ERROR';

export function loadArticles() {
    return {
        type: [LOAD_ARTICLES,LOAD_ARTICLES_SUCCESS,LOAD_ARTICLES_ERROR],
        url: '/api/articles.json'
    }
}

function previewlist(state=initialState,action) {
    switch(action.type) {
        case LOAD_ARTICLES: {
            return {
                articleList: state.articleList,
                loading: true,
                error: false,
            }
        }
        case LOAD_ARTICLES_SUCCESS: {
            return {
                loading: false,
                error: false,
                articleList: action.payload.articleList,
            }
        }
        case LOAD_ARTICLES_ERROR: {
            return {
                articleList: state.articleList,
                loading: false,
                error: true,
            }
        }
        default:
            return state;
    }
}

export default previewlist;