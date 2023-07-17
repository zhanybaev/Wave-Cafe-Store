import { useState } from "react";

const Auth = () => {
	const [isLogin, setIslogin] = useState(true)
	const handleCheckBox =()=>setIslogin(prev=>!prev)

    return (
        <div className="section authForm">
		<div className="container">
			<div className="row full-height justify-content-center">
				<div className="col-12 text-center align-self-center py-5">
					<div className="section pb-5 pt-5 pt-sm-2 text-center">
						<div className="controlBar">
							<h6><span>Log In </span><span>Sign Up</span></h6>
								<div>
									<input onChange={handleCheckBox} checked={isLogin} className="checkbox" type="checkbox" id="reg-log" name="reg-log"/>
									<label htmlFor="reg-log"></label>
								</div>
						</div>
						<div className="card-3d-wrap mx-auto">
							<div 
								style={{transform: isLogin ? 'rotateY(180deg)' :  'rotateY(0deg)'}}
								className="card-3d-wrapper"
								>
								<div className="card-front">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Log In</h4>
											<div className="form-group">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button className="btn mt-4">Log in</button>
				      					</div>
			      					</div>
			      				</div>
								<div className="card-back">
									<div className="center-wrap">
										<div className="section text-center">
											<h4 className="mb-4 pb-3">Sign Up</h4>
											<div className="form-group">
												<input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off"/>
												<i className="input-icon uil uil-user"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off"/>
												<i className="input-icon uil uil-at"></i>
											</div>	
											<div className="form-group mt-2">
												<input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off"/>
												<i className="input-icon uil uil-lock-alt"></i>
											</div>
											<button className="btn mt-4">Sign up</button>
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