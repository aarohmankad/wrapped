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

const Title2 = styled.div`
	color: white;
`;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url(/static/login_background.jpg);
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-size: 30px;
	align-items: center;
	& input {
		width: 100%;
	}
`;

const Title = styled.div`
	color: ${({ theme }) => theme.white};
	font-family: 'Nunito', sans-serif;
	font-style: normal;
	font-weight: bold;
	font-height: normal;
	font-size: 72px;
	ajustify-content: start;
	top: 750px;
`;

const Home = props => {
	return (
		<div>
			<Navigation />
			<Logo src="../static/wrapped_logo.png" alt="wrapped_logo" />
			<Container>
				<Title>wrapped.</Title>
				<Title2>
					At wrapped, our goal is to make it easy for you to show appreciation
					for your loved ones with the perfect gift.
				</Title2>
			</Container>
		</div>
	);
};

export default Home;
