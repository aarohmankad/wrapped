import React from 'react';
import styled from 'styled-components';
import ActionButton from '../components/Button/ActionButton';
import Navigation from '../components/Navigation';

//my note: everything should be a div unless if in this case for Logo
//its and img. then we can center and make it look nice
//ex was like for a header. can use h1 h2 etc..
//but can put it in a div and style it to be the size, position etc.

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
	background-color: ${({ theme }) => theme.pink};
	background-size: cover;

	display: flex;
	// flex-direction: column;
	// justify-content: center;
	// align-items: center;

	position: static;
	border: 3px solid #73ad21;
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

const listStyle = styled.li`
	list-style-type: none;

	&:before {
		content: '-';
	}
`;

const Section = styled.h1`
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

const pictures = styled.div`
	display flex:
	flex-direction: row;
`;

const Logo2 = styled.img`
	display: flex;
	flex-direction: column;
	border-radius: 50%;
	width: 300px;
	height: 300px;
	6background: #8ddcfb;
`;

const Home = props => {
	return (
		<div>
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
						<listStyle>
							<li>75% of online shoppers use Amazon. </li>
							<li>53% are last minute shoppers</li>
							<li>
								52% of shoppers prefer guarenteed dates over
								free shipping
							</li>
						</listStyle>
					</Intro3_Description>
				</Intro3>
			</Container>

			<Container>
				<Section>
					team.
					<picutres>
						<Logo2 src="../static/alex.jpg" alt="alex.jpg" />
						{/*<Logo2 src="../static/aaroh.png" alt="alex.jpeg" />*/}
					</picutres>
				</Section>
			</Container>
		</div>
	);
};

export default Home;
