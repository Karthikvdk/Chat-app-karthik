import { useState } from "react";
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {
            'Project-ID': "b0ff971d-3552-41f1-9abe-876ad8b5e5a1",
            'User-name': username,
            'User-secret': password
        }

        try {
          await axios.get('https://api.chatengine.io/chats', {headers: authObject});

          localStorage.setItem('Username', username);
          localStorage.setItem('Password', password);

          window.location.reload();
        } catch (error) {
            setError('Oops, wrong credentials.!')
        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                    className="input" placeholder="Username" required
                     />
                      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="input" placeholder="Password" required
                     />
                     <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                     </div>
                     <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm