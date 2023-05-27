
import "./Login.scss"
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'


function Login(){

    const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

    const onSubmit = e => {		
		e.preventDefault()

		if (email === 'elbekboltayev@gmail.com' && password === '12345678') {
			navigate('/home')
			localStorage.setItem(
				'accessToken',
				'7eadfjahehcfq7jkdafkcvzxvbajhznxbvcayu032432r**-/234/v*cv'
			)
			setError('')
		} else {
			setError('Xatolik yuz berdi')
		}
	}


    return(
        <div className="login_parent">
            <div className="login_block">
                <form onSubmit={onSubmit} className="sign_in">
                    <h2>Sign In</h2>
                    <label>Email Address</label>
                    <input type="text" onChange={({ target }) => setEmail(target.value)}
                    />

                    <label>Passwordd</label>
                    <input type="password" onChange={({ target }) => setPassword(target.value)} /> 


                    <button type="submit" className="butt">Sign In</button>

                    <div className="forgot">
                        <h5>Forget Password?</h5>
                        <div className="account">
                            <span>Don't have an account?</span>
                            <h4>Sign Up</h4>
                        </div>
                    </div>
                </form>
                <div className="imagess"></div>

            </div>
        </div>
    )
}

export default Login