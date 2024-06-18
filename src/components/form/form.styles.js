import styled from 'styled-components';

const StyledForm = styled.div`
	width: 90%;
	height: 474px;
	background-color: white;
	margin: 0 auto;
	border-radius: 10px;
	box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.28);
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding-top: 40px;
	font-family: 'Poppins';
	input {
		width: 80%;
		margin: 0 auto;
		height: 56px;
		border-radius: 10px;
		border: 1px solid #dedede;
		padding-left: 15px;
	}
	input[type='submit'] {
		background-color: #38cc8b;
		color: white;
		box-shadow: 0px -11px 4px -4px rgba(51, 185, 126, 0.8) inset;
		font-size: 15px;
		font-weight: 600;
	}
	p {
		font-size: 11px;
		margin: 0 auto;
		color: #bab7d4;
	}
	span {
		color: #ff7979;
		font-weight: bold;
	}
	@media (max-width: 480px) {
		p {
			padding-left: 39px;
			padding-right: 39px;
			text-align: center;
		}
	}
`;

export { StyledForm };
