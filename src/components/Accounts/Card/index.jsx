import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./styles";

export function Card({
	cardNumericId,
	cardImage,
	cardTitle,
	cardPlatform,
	cardPrice,
	cardGame,
}) {
	const whatsappMessage = `Quero comprar a conta "${encodeURIComponent(cardTitle)}" do jogo "${encodeURIComponent(cardGame)}" para "${encodeURIComponent(cardPlatform.join(", "))}" por R$${encodeURIComponent(cardPrice)},00`;
	const whatsappUrl = `https://wa.me/5567993441076?text=${whatsappMessage}`;

	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	return (
		<Container>
			<Link to={`/accounts/details/${cardNumericId}`} className="cardImageLink">
				<div
					className="cardImage"
					style={{ backgroundImage: `url(${cardImage})` }}
				/>
			</Link>
			<div className="cardDetails">
				<div className="cardHeader">
					<Link
						to={`/accounts/details/${cardNumericId}`}
						className="cardTitleLink"
					>
						<h1 className="cardTitle">{cardTitle}</h1>
					</Link>
				</div>
				<div className="cardPlatform">
					{cardPlatform.map((platform, index) => (
						<span key={index} className="platformItem">
							{platform}
							{index < cardPlatform.length - 1 && ", "}
						</span>
					))}
				</div>
				<div className="cardFooter">
					<p className="priceText">Comprar por</p>
					<a
						href={whatsappUrl}
						className="priceButton"
						target="_blank"
						rel="noopener noreferrer"
					>
						{`R$ ${cardPrice},00`}
					</a>
				</div>
			</div>
		</Container>
	);
}
