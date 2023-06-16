import { useState } from 'react';
import axios from "axios";


const LoginForm =()=>{
 

        const [username,setUsername]=useState('');
        const [password,setPassword]=useState('');
        const [error,setError] = useState('');

        const handleSubmit = async (e) =>{
            e.preventDefault();
           const authObject ={ 'Project-ID': "351384b3-385b-4c49-b44a-2359289cd807",'User-Name':username, 'User-Secret':password} ;

           try {
           await axios.get('https://api.chatengine.io/chats/', { headers:authObject})
         
           console.log(localStorage.getItem('username'));
           console.log(localStorage.getItem('username'));
           localStorage.setItem('username',username);
           localStorage.setItem('password',password);
        //    Window.location.reload();
            
           } catch (error) {
            setError (' desolé .....');
            
           }
      

        }
        return (
            <div className="wrapper">

                <div className="form">
                    <h1 className='title'>Chat application</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" 
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        className="input"
                        placeholder="username"
                        required
                        />
                        <input type="password" 
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        className="input"
                        placeholder="password"
                        required
                        />
                        <div align ="center">
                            <button type="submit" className="button">
                                <span>start chatting</span>
                            </button>
                            <h2 className="error">{error}</h2>
                        </div>
                    </form>
                </div>


                
            </div>
        );
    }


export default LoginForm;
