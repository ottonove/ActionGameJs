function LadderTest(hero, map){
	var i;
	for(i=0; i<map.mapLadder.length; i++){
		var h_left = parseInt(hero.img.style.left) + parseInt(hero.img.style.width)/4,
			h_top = parseInt(hero.img.style.top) - hero.LadderSpeed,
			h_right = parseInt(hero.img.style.left) + parseInt(hero.img.style.width)/4*3,
			h_bottom = h_top + parseInt(hero.img.style.height)/2;

		var e_left = parseInt(map.mapLadder[i].style.left),
			e_top = parseInt(map.mapLadder[i].style.top),
			e_right = parseInt(map.mapLadder[i].style.left) + parseInt(map.mapLadder[i].style.width),
			e_bottom = parseInt(map.mapLadder[i].style.top) + parseInt(map.mapLadder[i].style.height);
		
		if( h_left<e_right && e_left<h_right && h_top<e_bottom && e_top<h_bottom ){
			return true;
		};
	};
	
	//hero.onLadder = false;
};