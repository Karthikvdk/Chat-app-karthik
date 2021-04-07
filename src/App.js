import './App.css';
import { ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';


 const App = () => {
     if(!localStorage.getItem('Username')) return <LoginForm />
    return (
        <ChatEngine 
            height="100vh"
            projectID = "b0ff971d-3552-41f1-9abe-876ad8b5e5a1"
            userName = {localStorage.getItem('Username')}
            userSecret = {localStorage.getItem('Password')}
            renderChatFeed = {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App;