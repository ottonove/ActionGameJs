//当たり判定
function hitTest(hero,enemyArray){
	for(i=0; i<enemyArray.length; i++){
		//ここで、『*0.75』と小数をかけてやれば、当たり判定の範囲が小さくなる。
		var h_left = parseInt(hero.img.style.left),
			h_top = parseInt(hero.img.style.top),
			h_right = parseInt(hero.img.style.left) + parseInt(hero.img.style.width),
			h_bottom = parseInt(hero.img.style.top) + parseInt(hero.img.style.height);

		var e_left = parseInt(enemyArray[i].img.style.left),
			e_top = parseInt(enemyArray[i].img.style.top),
			e_right = parseInt(enemyArray[i].img.style.left) + parseInt(enemyArray[i].img.style.width),
			e_bottom = parseInt(enemyArray[i].img.style.top) + parseInt(enemyArray[i].img.style.height);
		
		if( h_left<e_right && e_left<h_right && h_top<e_bottom && e_top<h_bottom ){
			var print = document.getElementById("print");
			var debug = document.createElement("p");
			debug.innerHTML = "DAMAGE";
			print.appendChild(debug);
			return true;
		};
	};
};

//踏みつけ当たり判定
function AttackTest(hero,enemyArray){
	var hit = false;
	for(i=0; i<enemyArray.length; i++){
		//ここで、『*0.75』と小数をかけてやれば、当たり判定の範囲が小さくなる。
		var h_left = parseInt(hero.img.style.left),
			h_top = parseInt(hero.img.style.top) + parseInt(hero.img.style.height),
			h_right = parseInt(hero.img.style.left) + parseInt(hero.img.style.width),
			h_bottom = h_top + hero.vy;

		var e_left = parseInt(enemyArray[i].img.style.left),
			e_top = parseInt(enemyArray[i].img.style.top),
			e_right = parseInt(enemyArray[i].img.style.left) + parseInt(enemyArray[i].img.style.width),
			e_bottom = parseInt(enemyArray[i].img.style.top) + parseInt(enemyArray[i].img.style.height);
		
		if( h_left<e_right && e_left<h_right && h_top<e_bottom && e_top<h_bottom ){
				hit = true;
				//alert(hero.vy);
			//if(h_bottom < e_bottom){
				//hero.img.style.top = parseInt(enemyArray[i].img.style.top) - parseInt(hero.img.style.height) + "px";
					//alert(hero.vy);
				//hero.vy = -hero.jump/3*2;//踏みつけ後のジャンプ力。３分の２。数値は適当。
				//hero.jumpFlag = true;
				enemyArray[i].img.parentNode.removeChild(enemyArray[i].img);
				enemyArray.splice(i,1);
				i--;
			//} else {
				var print = document.getElementById("print");
				var debug = document.createElement("p");
				debug.innerHTML = "HIT";
				print.appendChild(debug);
			//};
		};
	};
	if(hit){
		hero.vy = -hero.jump/3*2;//踏みつけ後のジャンプ力。３分の２。数値は適当。
		hero.jumpFlag = true;
	};
};


//ブロックに立つ判定
function blockStandTest(hero,map,block){
		var h_left = parseInt(hero.img.style.left);//subvx + parseInt(hero.img.style.left);
		var h_top = parseInt(hero.img.style.top) + parseInt(hero.img.style.height);
		var h_right = h_left + parseInt(hero.img.style.width);
		if(hero.vy > 0){
			var h_bottom = parseInt(hero.img.style.top) + parseInt(hero.img.style.height) + hero.vy;
		} else {
			var h_bottom = parseInt(hero.img.style.top) + parseInt(hero.img.style.height) + 1;
		};
		//乗っているブロックとの当たり判定のため（ブロックと離れないため）に、vyや数値を加える。（重要！）
		
		var e_left = parseInt(block.style.left),
			e_top = parseInt(block.style.top),
			e_right = parseInt(block.style.left) + parseInt(block.style.width),
			e_bottom = parseInt(block.style.top) + hero.jump;//この値でいいのか、後で見直す。;

		if( h_left<e_right && e_left<h_right && h_top<e_bottom && e_top<h_bottom ){
				/*
				var print = document.getElementById("print");
				var text3 = document.createElement("div");
				text3.innerHTML = "~~~~~~~~~~~~~~~~~";
				print.appendChild(text3);
				var text = document.createElement("div");
				text.innerHTML = "h_=" + h_right;
				print.appendChild(text);
				var text2 = document.createElement("div");
				text2.innerHTML = "e_=" + e_left;
				print.appendChild(text2);
				*/
		/*var h_left = parseInt(hero.img.style.left);//subvx + parseInt(hero.img.style.left);
		var h_top = parseInt(hero.img.style.top) + parseInt(hero.img.style.height);
		var h_right = h_left + parseInt(hero.img.style.width);
		if(hero.vy > 0){
			var h_bottom = parseInt(hero.img.style.top) + parseInt(hero.img.style.height) + hero.vy;
		} else {
			var h_bottom = parseInt(hero.img.style.top) + parseInt(hero.img.style.height) + 1;
		};
		//乗っているブロックとの当たり判定のため（ブロックと離れないため）に、vyや数値を加える。（重要！）
		
		var e_left = parseInt(block.style.left) - parseInt(hero.img.style.width),
			e_top = parseInt(block.style.top),
			e_right = parseInt(block.style.left) + parseInt(block.style.width) + parseInt(hero.img.style.width),
			e_bottom = parseInt(block.style.top) + hero.jump;//重力の値より、１でも大きいと、ブロックに乗る事が出来るみたい。
		
		//if( h_left<e_right && e_left<h_right && h_top<e_bottom && e_top<h_bottom ){
		if( e_left<h_left && h_right<e_right && e_top<h_bottom && h_top<=e_bottom ){//最後の条件式、「より大きい」ではなく、「以上」にしないと、上昇ブロックにうまく乗れない。
		*/
			hero.jumpFlag = false;
			hero.vy = 0;
			hero.img.style.top = parseInt(block.style.top) - parseInt(hero.img.style.height) + "px";
			
			//縦方向に動くブロックに関する処理
			if(block.vy > 0){
				
				hero.vy = block.vy;
			};
			if(block.vy < 0){
				hero.img.style.top = parseInt(block.style.top) - parseInt(hero.img.style.height) + block.vy + "px";
			};
			
			
			//横方向に動くブロックに関する処理
			if(block.vx != 0){
				var subvx = block.vx - hero.vx;//ブロックの移動距離と、主人公の移動距離を合わせたもの。
				var temp = hero.vx;
				hero.vx = subvx;
				
				Move(hero,map,"X");
				if(hero.vx != 0){
					hero.img.style.left = parseInt(hero.img.style.left) + block.vx + "px";
					hero.vx = temp;//このIF文の中に入れなくてもいいかも。（壁にぶつかったとしても、元のVXに戻すようにするか、考える。
				};
				//hero.vx = temp;//こうしてもいいかも。
			};
			block.fallFlag = true;//乗っているブロックがあったら、trueを返す。（これ以上、乗っているブロックがあるかのチェックを停止させるため）
			return true;
		};
};


//ブロックとの当たり判定
function blockHitTest(block,enemyArray){
for(i=0; i<enemyArray.length; i++){
		//ここで、『*0.75』と小数をかけてやれば、当たり判定の範囲が小さくなる。
		var b_left = parseInt(block.style.left),
			b_top = parseInt(block.style.top),
			b_right = parseInt(block.style.left) + parseInt(block.style.width),
			b_bottom = parseInt(block.style.top) + parseInt(block.style.height);

		var e_left = parseInt(enemyArray[i].img.style.left),
			e_top = parseInt(enemyArray[i].img.style.top),
			e_right = parseInt(enemyArray[i].img.style.left) + parseInt(enemyArray[i].img.style.width),
			e_bottom = parseInt(enemyArray[i].img.style.top) + parseInt(enemyArray[i].img.style.height);
		
		var parent = enemyArray[i].img.parentNode;
		if( b_left<e_right && e_left<b_right && b_top<e_bottom && e_top<b_bottom ){
				
				//DEBUG
				var print = document.getElementById("print");
				var debug = document.createElement("p");
				debug.innerHTML = block.lift;
				print.appendChild(debug);
				
			parent.removeChild(enemyArray[i].img);
			enemyArray.splice(i,1);
			i--;
		};
	};
};


