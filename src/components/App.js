import './App.css';
import Signin from './Signin';
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from './Firebase';
import Chat from './Chat';

function App() {
  const [user] = useAuthState(auth)
  return (
    <div className='App'>
    { user ? <Chat /> : <Signin />}
    </div>
  );
}

export default App;
