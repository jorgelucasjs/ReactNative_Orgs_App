const lerFotos = async ()=>{

	const fotosHTTP = await fetch('http://192.168.2.122:3030/feed');
	return  fotosJson = fotosHTTP.json();
	
};

export default lerFotos;
