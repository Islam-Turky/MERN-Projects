import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export const Login = () => {
    const history = useNavigate();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    var submit = async (e) => {
        e.preventDefault();

        try{
            await axios.post('http://localhost:8080/', {
                name,
                email,
                password
            }).then((res) => {
                if (res.data === "exists") {
                    history('/home', { state: { id : email } });
                }else if (res.data === "notexists") {
                    alert('User is not signed up');
                }
            }).catch((err) => {
                alert('Wrong Details');
                console.log(err);
            });

        }catch(err){
            console.log(err);
        }
    };

    return (
        <div id="login">
            <h1>Login</h1>
            <form action="POST">
                <div className="input-data">
                    <input type="text" name="name" id="name" required placeholder='NAME' onChange={(e) => { setName(e.target.value) }}/>
                </div>
                <div className="input-data">
                    <input type="email" name="email" id="email" required placeholder='EMAIL' onChange={(e) => { setEmail(e.target.value) }}/>
                </div>
                <div className="input-data">
                    <input type="password" name="password" id="password" required placeholder='PASSWORD' onChange={(e) => { setPassword(e.target.value) }}/>
                </div>
                <div>
                    <input type='submit' name="submit" id="submit" value='submit' onClick={submit}/>
                </div>
            </form>
            <Link to="/signup">Signup</Link>
        </div>
    );
};

export default Login;