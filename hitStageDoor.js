function hitStageDoor(hero, map, view){
	for(i=0; i<map.stage.length; i++){
		//ここで、『*0.75』と小数をかけてやれば、当たり判定の範囲が小さくなる。
		var h_left = parseInt(hero.img.style.left),
			h_top = parseInt(hero.img.style.top),
			h_right = parseInt(hero.img.style.left) + parseInt(hero.img.style.width),
			h_bottom = parseInt(hero.img.style.top) + parseInt(hero.img.style.height);

		var e_left = parseInt(map.stage[i].style.left),
			e_top = parseInt(map.stage[i].style.top),
			e_right = parseInt(map.stage[i].style.left) + parseInt(map.stage[i].style.width),
			e_bottom = parseInt(map.stage[i].style.top) + parseInt(map.stage[i].style.height);
		
		if( h_left<e_right && e_left<h_right && h_top<e_bottom && e_top<h_bottom ){
			/*
			var print = document.getElementById("print");
			var debug = document.createElement("div");
			*/
			var low = parseInt(map.stage[i].style.top) / map.mapWidthSize;
			var col = parseInt(map.stage[i].style.left) / map.mapHeightSize;
			var stageArray = map.mapArray[low][col];

			/*
			print.appendChild(debug);
				//alert(map.mapArray[low][col][0][1][1]);
			*/
				clearInterval(ID);
				view.frame.parentNode.removeChild(view.frame);
				main = new game(stageArray[0],stageArray[1],stageArray[2]);
			return true;
		};
	};
};