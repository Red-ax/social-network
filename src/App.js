import {Routes, Route} from 'react-router-dom';
import './App.css';

//Components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

//

function App(props) {
  return (
      <div className="app-wrapper">
        <Header/>
        <Navbar sidebar={props.state.navbar}/>
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage}
                                                     addPostMessage={props.addPostMessage}
                                                     updatePost={props.updatePost} />}/>
            <Route path='/dialogs/*' element={<Dialogs dialogsPage={props.state.dialogsPage}/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
