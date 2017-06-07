'use strict';
const StationDetails = (update)=>{
	const detalles = $("<div id='detalles'></div>");
	const name = $("<p class='titulo'>"+state.selectedStation.name+"</p>");
	const address = $("<p>"+state.selectedStation.address+"</p>");
	const containerProduct = $("<div class='container-product'></div>");

	state.selectedStation.products.forEach((elem)=>{
		let product = $("<div class='product'>"+elem+"</div>");
		containerProduct.append(product);
	});

	detalles.append(name);
	detalles.append(address);
	detalles.append(containerProduct);

	return detalles;
};