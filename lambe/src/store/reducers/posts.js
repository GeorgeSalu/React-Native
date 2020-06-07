import { ADD_POST } from '../actions/actionTypes'

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
    default:
      return state
  }
}

export default reducer