let posts = [
  {likes: 12, message: 'Hi, i am Igor'},
  {likes: 4, message: 'I go walk!'},
  {likes: 31, message: 'Hello, world...'},
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

let state = {
  profilePage: {
    posts: posts,
  },
  dialogsPage: {
    dialogs: dialogs,
    messages: messages,
  },
}

export default state;