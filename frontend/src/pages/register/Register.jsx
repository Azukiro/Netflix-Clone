import { useState, useRef } from 'react';
import './register.scss'

const Register = () => {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const emailRef = useRef();
    const pwdRef = useRef();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }
    const handleFinish = () => {
        setPwd(pwdRef.current.value);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">

                    <img
                        className="logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
                        alt=""
                    />

                    <button className="login_button">
                        Sign In
                    </button>
                </div>

                <div className="container">
                    <h1>Unlimited movies, TV shows, and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p>
                        Ready to watch? Enter your email to create or restart your membership.
                    </p>{
                        !email ? (
                            <div className="input_field">
                                <input type="email" placeholder='email adress' ref={emailRef} />
                                <button className="register_button" onClick={handleStart}>
                                    Get Started
                                </button>


                            </div>
                        ) : (
                            <form className="input_field">
                                <input type="password" placeholder='password' ref={pwdRef} />
                                <button className="register_button" onClick={handleFinish}>
                                    Start
                                </button>


                            </form>
                        )
                    }


                </div>
            </div>
        </div>
    )
};

export default Register;
