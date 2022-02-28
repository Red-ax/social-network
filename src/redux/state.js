let posts = [
  {message: 'Hi, i am Igor', likes: 12},
  {message: 'I go walk!', likes: 4},
  {message: 'Hello, world...', likes: 31},
]

let dialogs = [
  {id: 1, name: 'Igor'},
  {id: 2, name: 'Dima'},
  {id: 3, name: 'Lena'},
  {id: 4, name: 'Maksim'},
  {id: 5, name: 'Sveta'},
];

let messages = [
  {id: 1, message: 'Hi, Igor!'},
  {id: 2, message: 'How are you?'},
  {id: 3, message: 'Go for a walk'},
  {id: 4, message: 'Hello world...'},
  {id: 5, message: 'Blabla bla'},
];


let sidebar = [
  {avatar: 'https://mpng.subpng.com/20180523/tha/kisspng-businessperson-computer-icons-avatar-clip-art-lattice-5b0508dc6a3a10.0013931115270566044351.jpg',
    name: 'Denis'},
  {avatar: 'https://www.clipartmax.com/png/full/87-874767_avatar-%C2%AB-avatar-informatique.png',
    name: 'Anna'},
  {avatar: 'https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small/beautiful-latin-woman-avatar-character-icon-free-vector.jpg',
    name: 'Sveta'},
];

let store = {
  _state: {
    profilePage: {
      posts: posts,
      newPostText: '',
    },
    dialogsPage: {
      dialogs: dialogs,
      messages: messages,
    },
    navbar: {
      sidebar: sidebar,
    },
  },
  getState() {
    return this._state
  },
  _callSabscriber() {
    console.log('state onChage test')
  },
  addPostMessage() {
    let newPost = {
      message: this._state.profilePage.newPostText,
      likes: 2,
    };
    posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSabscriber(this._state, this.addPostMessage)
  },
  updatePost(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSabscriber(this._state);
  },
  subscribe(observer) {
    this._callSabscriber = observer;
  },
}

// export { addPostMessage, updatePost, subscribe };
export default store;