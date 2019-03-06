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

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.pink};
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	// font-size: 30px;
	top: -2px;
	align-items: center;
	& input {
		width: 100%;
	}
	overflow: scroll;
	position: fixed;
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

const maple = styled.h1`
	font-family: Nunito;
	font-style: normal;
	font-weight: bold;
	line-height: normal;
	font-size: 110px;
	color: ${({ theme }) => theme.white};
`;

const whatis_description = styled.p`
	font-family: Nunito;
	color: ${({ theme }) => theme.white};
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
				<maple>
					what is wrapped?
					<whatis_description>
						wrapped. is a web application that helps you find the
						perfect gift for your loved ones. We remind you when to
						purchase your gift with emails, and help you manage all
						the gifts you need to buy for any occasion!
					</whatis_description>
				</maple>
				{/*
				<Section>Why wrapped?</Section>
				<Description2>
					75% of online shoppers use Amazon.
				</Description2>
				<Section>Team</Section>
				<Description>Insert Team images here</Description>
				<Logo2 src="../static/alex.jpg" alt="alex.jpg" />*/}
			</Container>
		</div>
	);
};

export default Home;
