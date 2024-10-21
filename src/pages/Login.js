import { useState, useEffect } from 'react';
import { supabase } from '../supabase/client';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await supabase.auth.signInWithOtp({ email });
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if(supabase.auth.getUser()){
            navigate('/')
        }
    }, [navigate])

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="youremail@site.com" onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
                    value={email} />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Login;