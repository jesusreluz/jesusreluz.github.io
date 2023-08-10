window.addEventListener('scroll', function(){
	let home = document.getElementById('home');
	let positionhome= home.getBoundingClientRect().top;
	let indice = document.getElementById('indice');
	let positionindice = indice.getBoundingClientRect().top;
	let agradecimientos = document.getElementById('agradecimientos');
	let positiontopagra = agradecimientos.getBoundingClientRect().top;
	let comome = document.getElementById('comomegustaste');
	let positioncomome = comome.getBoundingClientRect().top;
	let porquetu = document.getElementById('porquetu');
	let positionporquetu = porquetu.getBoundingClientRect().top;
	var posi = positionhome * -1;
	console.log(posi);
	console.log(positionindice);
	console.log(positiontopagra);
	let spider = document.getElementById('spider');
	let logo = document.getElementById('logo');
	let object = document.querySelector('.object');
	let object2 = document.querySelector('.img-2');

	if(positionhome > -1 && positionhome < 100){
		object.style.cssText = `transition: all .5s ease; translate: 100%`;
	}

	if(positionindice < 450){
		object.style.cssText = `transition: all .5s ease; translate: 0%`;
		object2.style.cssText = `content-visibility: hidden`;
	} else {
		object.style.cssText = `transition: all .5s ease; translate: 100%`;
	}

	if(positiontopagra > 0 && positiontopagra < 10){
		object.style.cssText = `transition: all .5s ease; translate: 0%`;
	}

	if(positiontopagra < 0){
		object.style.cssText = `transition: all .5s ease; translate: 100%; content-visibility: hidden`;
		object2.style.cssText = `transition: all .5s ease; translate: 0%; content-visibility: visible`;
	}

	if(positioncomome < 450){
		object2.style.cssText = `transition: all .5s ease; translate: 100%; content-visibility: visible`;
	} else {
		object2.style.cssText = `transition: all .5s ease; translate: 100%; content-visibility: hidden`;
	}

	if(positionporquetu > -250 && positionporquetu < 200){
		object2.style.cssText = `transition: all .5s ease; translate: 0%; content-visibility: visible`;
	}
});