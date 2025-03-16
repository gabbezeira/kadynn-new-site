import { Error, Loader } from "@components";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";

export function DetailsPage() {
	const { numericId } = useParams();
	const [product, setProduct] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const response = await axios.get(
					`https://kadynn-api.vercel.app/accounts/${numericId}`,
				);
				if (response.data) {
					setProduct(response.data);
				} else {
					setError("Produto não encontrado");
				}
			} catch (err) {
				setError("Erro ao carregar produto");
			} finally {
				setLoading(false);
			}
		};

		if (numericId) {
			fetchProduct();
		} else {
			setError("ID inválido");
			setLoading(false);
		}
	}, [numericId]);

	const whatsappMessage = product
		? `Quero comprar a conta "${encodeURIComponent(product.title)}" do jogo "${encodeURIComponent(product.game)}" para "${encodeURIComponent(product.platform.join(", "))}" por R$${encodeURIComponent(product.price)},00`
		: "";
	const whatsappUrl = `https://wa.me/5567993441076?text=${whatsappMessage}`;

	if (loading) {
		return <Loader />;
	}

	if (error || !product) {
		return <Error errorText={error} />;
	}

	return (
		<Container>
			<div className="imageArea">
				<img src={product.image} alt={product.title} className="image" />
			</div>
			<div className="content">
				<div className="header">
					<div className="texts">
						<h1 className="title">{product.title}</h1>
						<p className="platforms">
							{product.platform.map((platform, index) => (
								<span key={index} className="platformItem">
									{platform}
									{index < product.platform.length - 1 && ", "}
								</span>
							))}
						</p>
						<p className="games">
							{product.game.map((game, index) => (
								<span key={index} className="gameItem">
									{`Game: ${game}`}
									{index < product.game.length - 1 && ", "}
								</span>
							))}
						</p>
					</div>
					<a
						href={whatsappUrl}
						className="priceButton"
						target="_blank"
						rel="noopener noreferrer"
					>
						{`Comprar por R$ ${product.price},00`}
					</a>
				</div>
				<p className="descriptionText">Descrição da Conta:</p>
				<div className="infoArea">{product.description}</div>
			</div>
		</Container>
	);
}
