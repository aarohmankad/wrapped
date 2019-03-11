import React from 'react';
import styled from 'styled-components';
import ActionButton from '../components/Button/ActionButton';
import Navigation from '../components/Navigation';

//my note: everything should be a div unless if in this case for Logo
//its and img. then we can center and make it look nice
//ex was like for a header. can use h1 h2 etc..
//but can put it in a div and style it to be the size, position etc.

//Known Bugs:
//when changing the browser resolution, the page does not scale with it.
// but signin.js does

const Logo = styled.img`
  width: 75px;
  height 75px;
  position: absolute;
  z-index: 10;
  top: 25px;
  left: 25px;
`;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(/static/pink.jpg);
	// background-color: #a0839b;
	background-size: cover;

	display: flex;

	& input {
		width: 100%;
	}

	// position: scroll;
	overflow: hidden;
	// border: 3px solid #73ad21;
`;

const Intro = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	//used this so that it would align in the middle with justify content
	width: 100vw;
	height: auto

	font-family: Nunito;
	font-style: normal;
	font-weight: bold;
	line-height: normal;
	font-size: 144px;

	color: ${({ theme }) => theme.white};
`;

const Intro_Description = styled.p`
	width: 1086px;

	font-family: Nunito;
	font-size: 36px;
	text-align: center;
	color: #fffffc;
`;

const Intro2 = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	//used this so that it would align in the middle with justify content
	width: 100vw;
	padding-right: 84px;

	font-family: Nunito;
	font-style: normal;
	flex-wrap: wrap;
	font-weight: bold;
	line-height: normal;
	font-size: 110px;
	color: ${({ theme }) => theme.white};
`;

const Intro2_Description = styled.p`
	width: 1086px;
	font-family: Nunito;
	font-size: 36px;
	color: ${({ theme }) => theme.white};
	text-align: right;
	color: #fffffc;
`;

const Intro3 = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding-left: 124px;

	width: 100vw;
	font-family: Nunito;
	font-style: normal;
	flex-wrap: wrap;
	font-weight: bold;
	line-height: normal;
	font-size: 110px;
	color: ${({ theme }) => theme.white};
`;

const Intro3_Description = styled.p`
	width: 1086px;
	font-family: Nunito;
	font-size: 36px;
	color: ${({ theme }) => theme.white};
	text-align: left;
	color: #fffffc;
`;

const ListStyle = styled.li`
	list-style-type: none;

	li:before {
		content: '- ';
	}
`;

const Intro4 = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100vw;

	font-family: Nunito;
	font-style: normal;
	font-weight: bold;
	line-height: normal;
	font-size: 110px;
	color: ${({ theme }) => theme.white};
`;

const SelfieContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	padding-top: 110px;
`;

const Selfie = styled.img`
	border-radius: 50%;
	width: 300px;
	height: 300px;
	background: #8ddcfb;
	display: flex;
	margin-left: 100px;
	margin-right: 100px;
	flex-wrap: wrap;
`;

const Personal_Links = styled.div`
	display: flex;
	font-size: 50px;
	text-align: left;
`;

const Team = styled.div`
	text-align: center;
	font-size: 25px;
	color: ${({ theme }) => theme.white};
`;

const Social = styled.div`
	text-align: center;
	display: flex;
	justify-content: space-evenly;
	margin-top: 12px;
	width: 300px;
	padding-left: 97px;
	margin-top: 20px;
	font-size: 40px;
	color: white;
`;

const Name = styled.div`
	margin-top: 38px;
`;

const Bottle = styled.img`
	color: white;
`;

const Footer = styled.div`
	position: sticky;
	left: 0;
	bottom: 0;
	width: 100%;
	color: white;
	text-align: center;
	font-size: 15px;
	padding-top: 130px;
`;

const Home = props => {
	return (
		<div>
			<link
				rel="stylesheet"
				href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"
				integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
				crossorigin="anonymous"
			/>
			<Navigation />
			<Logo src="../static/wrapped_logo.png" alt="wrapped_logo" />
			<Container>
				<Intro>
					wrapped.
					<Intro_Description>
						At wrapped, our goal is to make it easy for you to show
						appreciation for your loved ones with the perfect gift,
						every time.
					</Intro_Description>
				</Intro>
			</Container>
			<Container>
				<Intro2>
					what is wrapped?
					<Intro2_Description>
						wrapped is a web application that helps you find the
						perfect gift for your loved ones. We remind you when to
						purchase your gift with emails, and help you manage all
						the gifts you need to buy for any occasion!
					</Intro2_Description>
				</Intro2>
			</Container>
			<Container>
				<Intro3>
					why wrapped?
					<Intro3_Description>
						<ListStyle>
							<li>75% of online shoppers use Amazon. </li>
							<li>53% are last minute shoppers</li>
							<li>
								52% of shoppers prefer guarenteed dates over
								free shipping
							</li>
						</ListStyle>
					</Intro3_Description>
				</Intro3>
			</Container>

			<Container>
				<Intro4>
					team.
					<SelfieContainer>
						<Team>
							<Selfie
								src="../static/natasha.jpg"
								alt="natasha.jpeg"
							/>
							<Name>Natasha Orie</Name>
							<Social>
								<a
									href="https://www.linkedin.com/in/alexte/"
									target="_blank"
								>
									<i class="fas fa-globe" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-github" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-linkedin" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-twitter" />
								</a>
							</Social>
						</Team>
						<Team>
							<Selfie
								src="../static/aaroh.png"
								alt="aaroh.jpeg"
							/>
							<Name>Aaroh Mankad</Name>
							<Social>
								<a
									href="https://www.linkedin.com/in/alexte/"
									target="_blank"
								>
									<i class="fas fa-globe" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-github" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-linkedin" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-twitter" />
								</a>
							</Social>
						</Team>
						<Team>
							<Selfie src="../static/alex.jpg" alt="alex.jpg" />
							<Name>Alex Te</Name>
							<Social>
								<a
									href="https://www.linkedin.com/in/alexte/"
									target="_blank"
								>
									<i class="fas fa-globe" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-github" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-linkedin" />
								</a>
								<a
									href="https://www.google.com/"
									target="_blank"
								>
									<i class="fab fa-twitter" />
								</a>
							</Social>
						</Team>
					</SelfieContainer>
					<Footer>Made with &lt;3 in Riverside</Footer>
				</Intro4>
			</Container>
		</div>
	);
};

export default Home;
