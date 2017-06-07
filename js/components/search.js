'use strict';
const Gasolinera = (data,update)=>{
    const contenedor = $("<div></div>");
    const dato = $("<span>"+data.name+"</span>");
    const info = $("<p>"+data.address+"</p>");

    contenedor.append(dato);
    contenedor.append(info);

    return contenedor;

};

const reRender = (estaciones,finded)=>{
    estaciones.empty();

    finded.forEach(station=>{
        estaciones.append(Gasolinera(station, _ =>{reRender(estaciones,finded); }));

    });
};

const Search = (update)=>{
    const contenedor2 = $("<div></div>");
    const input = $("<input type='text'>");
    const estaciones = $("<div></div>");

    contenedor2.append(input);
    contenedor2.append(estaciones);

    input.on("keyup", () =>{		
        if(input.val() != ""){
            console.log(filterByDistrict(state.stations,input.val()));
            var finded = filterByDistrict(state.stations,input.val());
        }

        reRender(estaciones,finded);	
    });

    return contenedor2;	
};