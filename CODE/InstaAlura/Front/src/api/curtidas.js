export const curtiuFoto = (curtiu, likes) => {
	let qnt = likes;
	if(curtiu){
		qnt--;
	}else{
		qnt++;

	}

	return [!curtiu, qnt]
}


export const imageLike = (curtiu) => {
	if (curtiu) {
		return require('../../assets/s2-checked.png')
	} else {
		return require('../../assets/s2.png')
	}
}
