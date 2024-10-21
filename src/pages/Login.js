import { useState } from 'react';
import { client } from '../supabase/client';

function Login() {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await client.auth.signInWithOtp({ email });
            console.log(result)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="youremail@site.com" onChange={(e) => setEmail(e.target.value)} // Actualiza el estado
                    value={email} />
                <button>Send</button>
            </form>
        </div>
    )
}

export default Login;