import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";
import { useNavigate } from "react-router-dom";
import { setAuthError } from "../store/slices/authSlice";
import { logIn, signUp } from "../store/actions/auth.action";

const Auth = () => {
	const [isLogin, setIslogin] = useState(true)
	const error = useAppSelector(state=>state.auth.error)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	
	const loginEmailRef = useRef<HTMLInputElement>(null)
	const loginPasswordRef = useRef<HTMLInputElement>(null)
	const signupEmailRef = useRef<HTMLInputElement>(null)
	const signupPasswordRef = useRef<HTMLInputElement>(null)
	
	const cleanErrors = ()=>dispatch(setAuthError(''))

	const handleCheckBox=()=>{
		setIslogin(prev=>!prev)
		cleanErrors()
	}
	const sumbit = (e:React.FormEvent) =>{
		e.preventDefault()
		if(isLogin){
			if(loginEmailRef.current?.value && loginPasswordRef.current?.value ){
				logIn(dispatch, loginEmailRef.current.value, loginPasswordRef.current.value, navigate)
				return;
			}
			dispatch(setAuthError('Please fill in all fields'))
			return;
		}
		if(signupEmailRef.current?.value && signupPasswordRef.current?.value){
			signUp(dispatch, signupEmailRef.current.value, signupPasswordRef.current?.value, navigate)
			return;
		}
		dispatch(setAuthError('Please fill in all fields'))
		return;
	}

    return (
        <div className="section authForm">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<div className="controlBar">
							<h6><span>Log In </span><span>Sign Up</span></h6>
								<div>
									<input onChange={handleCheckBox} checked={!isLogin} className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
									<label htmlFor="reg-log"></label>
								</div>
						</div>
						<div className="card-3d-wrap mx-auto">
							<div 
								style={{transform: isLogin ? 'rotateY(0deg)' :  'rotateY(180deg)'}}
								className="card-3d-wrapper"
								>
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4>Log In</h4>
											<span className="error-text">{error}</span>
											<form onSubmit={sumbit}>
												<div className="form-group">
													<input 
														type="email" className="form-style" placeholder="Your Email" autoComplete="off" ref={loginEmailRef}/>
													<i className="input-icon uil uil-at"></i>
												</div>	
												<div className="form-group mt-2">
													<input type="password" className="form-style" placeholder="Your Password" autoComplete="off" ref={loginPasswordRef}/>
													<i className="input-icon uil uil-lock-alt"></i>
												</div>
												<button type="submit" className="btn mt-4">Log in</button>
											</form>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
											<span className="error-text">{error}</span>
											<form onSubmit={sumbit}>
												<div className="form-group mt-2">
													<input type="email" className="form-style" placeholder="Your Email" autoComplete="off" ref={signupEmailRef}/>
													<i className="input-icon uil uil-at"></i>
												</div>	
												<div className="form-group mt-2">
													<input ref={signupPasswordRef} type="password" className="form-style" placeholder="Your Password" autoComplete="off"/>
													<i className="input-icon uil uil-lock-alt"></i>
												</div>
												<button type="submit" className="btn mt-4">Sign up</button>
											</form>
				      					</div>
			      					</div>
			      				</div>
			      			</div>
			      		</div>
			      	</div>
		      	</div>
	      	</div>
	    </div>
	</div>
    );
};

export default Auth;