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
	flex-direction: column;
	justify-content: center;
	align-items: center;

	// top: -2px;
	& input {
		width: 100%;
	}
	overflow: scroll;
	position: overflow;
`;

const align_right = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: flex-end;
`;

const align_left = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: flex-end;
`;

const Intro = styled.h1`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	font-style: normal;
	font-weight: normal;
	line-height: normal;
	font-size: 36px;
	text-align: center;
	color: #fffffc;
`;

const Intro2 = styled.h1`
	font-family: Nunito;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	font-style: normal;
	flex-wrap: wrap;
	font-weight: bold;
	line-height: normal;
	font-size: 110px;
	color: ${({ theme }) => theme.white};
`;

const Intro2_Description = styled.p`
	font-family: Nunito;
	width: 1086px;
	color: ${({ theme }) => theme.white};
	font-size: 36px;
	text-align: right;
	// height: 342px;
`;

const Intro3 = styled.h1`
	font-family: Nunito;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-style: normal;
	font-weight: bold;
	line-height: normal;
	font-size: 110px;
	color: ${({ theme }) => theme.white};
`;

const Intro3_Description = styled.p`
	font-family: Nunito;
	text-align: left;
	font-size: 100px
	color: ${({ theme }) => theme.white};
`;

const Home = props => {
	return (
		<div>
			<Navigation />
			<Logo src="../static/wrapped_logo.png" alt="wrapped_logo" />

			<Container>
				<Intro>wrapped. </Intro>
				<Intro_Description>
					At wrapped, our goal is to make it easy for you to show
					appreciation for your loved ones with the perfect gift,
					every time.
				</Intro_Description>
			</Container>

			<Container>
				<align_right>
					<Intro2>what is wrapped? </Intro2>
					<Intro2_Description>
						wrapped is a web application that helps you find the
						perfect gift for your loved ones. We remind you when to
						purchase your gift with emails, and help you manage all
						the gifts you need to buy for any occasion!
					</Intro2_Description>
				</align_right>
			</Container>

			<Container>
				<align_left>
					<Intro3>why wrapped? </Intro3>
					<Intro3_Description>
						75% of online shoppers use Amazon.
					</Intro3_Description>
				</align_left>
			</Container>

			{/*<Container>
				<Section>Team</Section>
				<Description>Insert Team images here</Description>
				<Logo2 src="../static/alex.jpg" alt="alex.jpg" />
			</Container>*/}
		</div>
	);
};

export default Home;
