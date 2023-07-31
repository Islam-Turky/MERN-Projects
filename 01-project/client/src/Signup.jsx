import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom';

export const Signup = () => {
    const history = useNavigate();


    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    async function submit (e) {
        e.preventDefault();

        try{
            await axios.post('http://localhost:8080/signup', {
                name,
                email,
                password
            }).then((res) => {
                if (res.data === "exists") {
                    alert('User already exist');
                }else if (res.data === "notexists") {
                    history('/home', { state: { id : email } });
                }
            }).catch((err) => {
                alert('Wrong Details');
                console.log(err);
            });

        }catch(err){
            console.log(err);
        }
    }

    return (
        <div id="signup">
            <h1>Signup</h1>
            <form action="POST">
                <div className="input-data">
                    <input type="text" name="name" id="name" required placeholder='NAME' onChange={(e) => { setName(e.target.value) }}/>
                </div>
                <div className="input-data">
                    <input type="email" name="email" id="email" placeholder='EMAIL' required onChange={(e) => { setEmail(e.target.value) }}/>
                </div>
                <div className="input-data">
                    <input type="password" name="password" id="password" placeholder='PASSWORD' required onChange={(e) => { setPassword(e.target.value) }}/>
                </div>
                <div>
                    <input type="submit" name="submit" id="submit" value="submit" onClick={submit}/>
                </div>
            </form>
            <Link to="/">login</Link>
        </div>
    );
};

export default Signup;