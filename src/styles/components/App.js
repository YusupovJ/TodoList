import styled, { keyframes } from "styled-components";

const fade = keyframes`
	0% {
		visibility: hidden;
		opacity: 0;
	}
	100% {
		visibility: visible;
		opacity: 1;
	}
`;

const del = keyframes`
	0%{
		visibility: visible;
		opacity: 1;
	}
	100% {
		visibility: hidden;
		opacity: 0;
	}
`;

export const Todo = styled.section`
	.todo__container {
		padding: 0px 15px 30px 15px;
	}
	.todo__body {
		display: flex;
		flex-wrap: wrap;
		padding: 30px 0px 0px 0px;
	}
	.todo__title {
		font-size: 50px;
		font-weight: 700;
		flex: 1 0 100%;
		margin: 0px 0px 10px 0px;
	}
	.todo__input {
		display: inline-block;
		flex: 8 1;
		transition: all 0.2s ease 0s;
		box-shadow: 0px 3px 5px #bababa;
		font-size: 20px;
		font-family: cursive;
		padding: 10px 15px;
		border-bottom-left-radius: 10px;
		border-top-left-radius: 10px;
		border: 1px solid transparent;
		&:focus {
			box-shadow: 0px 1px 5px #1250d5;
			border: 1px solid #1250d5;
		}
		&.err {
			border: 1px solid red;
			&:focus {
				box-shadow: 0px 1px 5px red;
			}
		}
	}
	.todo__add {
		color: #fff;
		border-bottom-right-radius: 10px;
		border-top-right-radius: 10px;
		font-size: 20px;
		background-color: #1250d5;
		transition: all 0.4s ease 0s;
		flex: 2 1;
		display: inline-block;
		transform: translate(-3px, 0);
		&:hover {
			background-color: #103c9c;
		}
		&:active {
			transform: scale(0.98) translate(-3px, 0);
		}
	}
	.line {
		margin: 20px 0px;
		width: 100%;
		display: inline-block;
		height: 1px;
		background-color: #ccc;
	}
	.todo__list {
		padding: 20px;
		min-height: 600px;
		border-radius: 10px;
		background-color: #f5eeee;
		overflow: hidden;
	}
	.todo__item {
		margin: 0px 0px 10px 0px;
		display: flex;
		visibility: hidden;
		opacity: 0;
		justify-content: space-between;
		align-items: center;
		padding: 10px 15px;
		border-radius: 5px;
		background-color: #fff;
		box-shadow: 0px 3px 5px #bababa;
		animation: ${fade} 0.2s ease 0s 1 normal forwards;
		&.del {
			visibility: visible;
			opacity: 1;
			animation: ${del} 0.2s ease 0s 1 normal forwards;
		}
	}
	.todo__del {
		background-color: #f6f3f3;
		display: inline-block;
		padding: 10px;
		color: red;
		font-weight: 700;
		border-radius: 4px;
		transition: all 0.4s ease 0s;
		&:hover {
			background-color: #dfdede;
		}
	}
	.todo__name {
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: 500;
		font-size: 18px;
	}
	.todo__nothing {
		font-weight: 700;
		display: flex;
		justify-content: center;
	}
	@media only screen and (max-width: 767.98px) {
		.todo__add {
			border-radius: 10px;
			padding: 10px 20px;
			flex: 1 0 100%;
			margin: 20px 0px 0px 0px;
			font-size: 16px;
		}
		.todo__input {
			font-size: 16px;
			border-radius: 10px;
			flex: 1 0 100%;
		}
	}
`;
