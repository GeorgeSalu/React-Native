import { ADD_POST, ADD_COMMENT } from '../actions/actionTypes'

const initialState = {
  posts: [{
    id: Math.random(),
    nickname: 'rafael pereira filho',
    email: 'rafael@gmail.com',
    image: require('../../../assets/imgs/fence.jpg'),
    comments: [{
      nickname: 'john',
      comment: 'stuning'
    }, {
      nickname: 'ana',
      comment: 'foto linda'
    }]
  },{
    id: Math.random(),
    nickname: 'francisco pereira filho',
    email: 'rafael@gmail.com',
    image: require('../../../assets/imgs/fence.jpg'),
    comments: []
  }]
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: state.posts.concat({
          ...action.payload
        })
      }
    case ADD_COMMENT:
        return {
          ...state,
          posts: state.posts.map(post => {
            if(post.id === action.payload.postId) {
              if(post.comments) {
                post.comments = post.comments.concat(
                  action.payload.comment
                )
              } else {
                post.comments = [action.payload.comment]
              }
            }
            return post
          })
        }
    default:
      return state
  }
}

export default reducer