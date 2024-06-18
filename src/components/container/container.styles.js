import styled from 'styled-components';

const StayledMainContainer = styled.div`
	display: flex;
	width: 90%;
	margin: 121px auto;
	@media (max-width: 480px) {
		display: block;
		width: 100%;
		margin: 0 auto;
	}
`;
const InfoContainer = styled.div`
	width: 40%;
	height: 60vh;
	margin: 0 auto;
	color: white;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
	@media (max-width: 480px) {
		height: auto;
		margin-top: 40px;
		width: 80%;
		text-align: center;
	}
`;
const FormContainer = styled.div`
	width: 50%;
	display: flex;
	flex-direction: column;
	gap: 24px;
	@media (max-width: 480px) {
		width: 90%;
		margin: 0 auto;
	}
`;
const Content = styled.div`
	width: 100%;
	font-family: 'Poppins';
	h1 {
		font-size: 50px;
		line-height: 55px;
		letter-spacing: -0.52px;
		margin-bottom: 0;
	}
	p {
		font-size: 16px;
		line-height: 26px;
	}
	@media (max-width: 480px) {
		h1 {
			font-size: 28px;
			line-height: 36px;
			letter-spacing: -0.29px;
			margin-bottom: 0;
		}
	}
`;
const Banner = styled.div`
	display: flex;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
	margin: 0 auto;
	width: 90%;
	height: 60px;
	background-color: #5f54a4;
	border-radius: 10px;
	align-items: center;
	justify-content: center;

	p {
		color: white;
		font-size: 15px;
		text-align: center;
	}
	@media (max-width: 480px) {
		height: 88px;
		padding-left: 68px;
		padding-right: 68px;
		text-align: center;
		line-height: 26px;
	}
`;

export { StayledMainContainer, InfoContainer, FormContainer, Banner, Content };
