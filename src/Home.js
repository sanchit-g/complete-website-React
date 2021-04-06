import React from "react";
import { NavLink } from "react-router-dom";
import HomeImg from "./images/img1.svg";
const Home = () => {
	return (
		<>
			<section id="header" className="d-flex align-items-center">
				<div className="container-fluid">
					<div className="row">
						<div className="col-10 mx-auto">
							<div className="row">
								<div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
									<h1>
										Grow your business with{" "}
										<strong className="brand-name">
											Gupta Consultancy
										</strong>
									</h1>
									<h2 className="my-3">
										We are a team of talented developers
									</h2>
									<div className="mt-3">
										<NavLink
											to="/services"
											className="btn-get-started"
										>
											Get Started
										</NavLink>
									</div>
								</div>
								<div className="col-lg-6 order-1 order-lg-2 header-img">
									<img
										src={HomeImg}
										alt="home img"
										className="img-fluid animated"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Home;
