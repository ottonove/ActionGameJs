//�����蔻��
function hitTest(hero,enemyArray){
	for(i=0; i<enemyArray.length; i++){
		//�����ŁA�w*0.75�x�Ə����������Ă��΁A�����蔻��͈̔͂��������Ȃ�B
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

//���݂������蔻��
function AttackTest(hero,enemyArray){
	var hit = false;
	for(i=0; i<enemyArray.length; i++){
		//�����ŁA�w*0.75�x�Ə����������Ă��΁A�����蔻��͈̔͂��������Ȃ�B
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
				//hero.vy = -hero.jump/3*2;//���݂���̃W�����v�́B�R���̂Q�B���l�͓K���B
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
		hero.vy = -hero.jump/3*2;//���݂���̃W�����v�́B�R���̂Q�B���l�͓K���B
		hero.jumpFlag = true;
	};
};


//�u���b�N�ɗ�����
function blockStandTest(hero,map,block){
		var h_left = parseInt(hero.img.style.left);//subvx + parseInt(hero.img.style.left);
		var h_top = parseInt(hero.img.style.top) + parseInt(hero.img.style.height);
		var h_right = h_left + parseInt(hero.img.style.width);
		if(hero.vy > 0){
			var h_bottom = parseInt(hero.img.style.top) + parseInt(hero.img.style.height) + hero.vy;
		} else {
			var h_bottom = parseInt(hero.img.style.top) + parseInt(hero.img.style.height) + 1;
		};
		//����Ă���u���b�N�Ƃ̓����蔻��̂��߁i�u���b�N�Ɨ���Ȃ����߁j�ɁAvy�␔�l��������B�i�d�v�I�j
		
		var e_left = parseInt(block.style.left),
			e_top = parseInt(block.style.top),
			e_right = parseInt(block.style.left) + parseInt(block.style.width),
			e_bottom = parseInt(block.style.top) + hero.jump;//���̒l�ł����̂��A��Ō������B;

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
		//����Ă���u���b�N�Ƃ̓����蔻��̂��߁i�u���b�N�Ɨ���Ȃ����߁j�ɁAvy�␔�l��������B�i�d�v�I�j
		
		var e_left = parseInt(block.style.left) - parseInt(hero.img.style.width),
			e_top = parseInt(block.style.top),
			e_right = parseInt(block.style.left) + parseInt(block.style.width) + parseInt(hero.img.style.width),
			e_bottom = parseInt(block.style.top) + hero.jump;//�d�͂̒l���A�P�ł��傫���ƁA�u���b�N�ɏ�鎖���o����݂����B
		
		//if( h_left<e_right && e_left<h_right && h_top<e_bottom && e_top<h_bottom ){
		if( e_left<h_left && h_right<e_right && e_top<h_bottom && h_top<=e_bottom ){//�Ō�̏������A�u���傫���v�ł͂Ȃ��A�u�ȏ�v�ɂ��Ȃ��ƁA�㏸�u���b�N�ɂ��܂����Ȃ��B
		*/
			hero.jumpFlag = false;
			hero.vy = 0;
			hero.img.style.top = parseInt(block.style.top) - parseInt(hero.img.style.height) + "px";
			
			//�c�����ɓ����u���b�N�Ɋւ��鏈��
			if(block.vy > 0){
				
				hero.vy = block.vy;
			};
			if(block.vy < 0){
				hero.img.style.top = parseInt(block.style.top) - parseInt(hero.img.style.height) + block.vy + "px";
			};
			
			
			//�������ɓ����u���b�N�Ɋւ��鏈��
			if(block.vx != 0){
				var subvx = block.vx - hero.vx;//�u���b�N�̈ړ������ƁA��l���̈ړ����������킹�����́B
				var temp = hero.vx;
				hero.vx = subvx;
				
				Move(hero,map,"X");
				if(hero.vx != 0){
					hero.img.style.left = parseInt(hero.img.style.left) + block.vx + "px";
					hero.vx = temp;//����IF���̒��ɓ���Ȃ��Ă����������B�i�ǂɂԂ������Ƃ��Ă��A����VX�ɖ߂��悤�ɂ��邩�A�l����B
				};
				//hero.vx = temp;//�������Ă����������B
			};
			block.fallFlag = true;//����Ă���u���b�N����������Atrue��Ԃ��B�i����ȏ�A����Ă���u���b�N�����邩�̃`�F�b�N���~�����邽�߁j
			return true;
		};
};


//�u���b�N�Ƃ̓����蔻��
function blockHitTest(block,enemyArray){
for(i=0; i<enemyArray.length; i++){
		//�����ŁA�w*0.75�x�Ə����������Ă��΁A�����蔻��͈̔͂��������Ȃ�B
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


