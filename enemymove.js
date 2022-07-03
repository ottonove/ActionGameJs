function createEnemy(Base, map, enemyArray){
	
	function monster(top, left){
		var obj = this;
		obj.img = document.createElement("img");
		obj.img.src = "url(images/enemy.png)";
		Base.baseDiv.appendChild(obj.img);//�����̃p�����[�^�̗v�f�ɁA�}���B
		var style = obj.img.style;//�ȍ~�̋L�q���ȗ����邽�߂����B
			style.width = "50px";
			style.height = "50px";
			style.backgroundColor = "purple";
			style.position = "absolute";
			style.top = top + "px";//Math.floor(Math.random()*300)+50;//10����30�܂Ń����_���B
			style.left = left + "px";//Math.floor(Math.random()*1050)+50;//10����30�܂Ń����_���B
		//�ړ��������鎞�ɕK�v�ȃv���p�e�B�B
		obj.vx = -3;
		obj.vy = 0;
		obj.ax = 1;//�����x
		obj.vx_MAX = 15;//�ō����x
		obj.jump = 25;
		obj.jumpFlag = true;
		//obj.stand = parseInt(style.height);//��������Ԃ̍���
		//obj.squat = 20;//parseInt(style.height) / 2;//���Ⴊ�񂾏�Ԃ̍���
		//obj.squatFlag = false;
		//obj.onBlock = false;
		//this.mapPosition = new Array();
	};
	
	function monster_RED(top, left){
		var obj = this;
		obj.img = document.createElement("img");
		obj.img.src = "url(images/enemy.png)";
		Base.baseDiv.appendChild(obj.img);//�����̃p�����[�^�̗v�f�ɁA�}���B
		var style = obj.img.style;//�ȍ~�̋L�q���ȗ����邽�߂����B
			style.width = "100px";
			style.height = "20px";
			style.backgroundColor = "maroon";
			style.position = "absolute";
			style.top = top + "px";//Math.floor(Math.random()*300)+50;//10����30�܂Ń����_���B
			style.left = left + "px";//Math.floor(Math.random()*1050)+50;//10����30�܂Ń����_���B
		//�ړ��������鎞�ɕK�v�ȃv���p�e�B�B
		obj.vx = -3;
		obj.vy = 0;
		obj.ax = 1;//�����x
		obj.vx_MAX = 15;//�ō����x
		obj.jump = 25;
		obj.jumpFlag = true;
		//obj.stand = parseInt(style.height);//��������Ԃ̍���
		//obj.squat = 20;//parseInt(style.height) / 2;//���Ⴊ�񂾏�Ԃ̍���
		//obj.squatFlag = false;
		//obj.onBlock = false;
		//this.mapPosition = new Array();
	};
	
	var i,j;
	
	for(i=0; i<map.mapArray.length; i++){
		for(j=0; j<map.mapArray[i].length; j++){
			switch(map.mapArray[i][j]){
				case "monster":
					var top = i * map.mapHeightSize;
					var left = j * map.mapWidthSize;
					enemyArray.push(new monster(top, left));
					break;
				case "monster_RED":
					var top = i * map.mapHeightSize;
					var left = j * map.mapWidthSize;
					enemyArray.push(new monster_RED(top, left));
					break;
			};
		};
	};
};

/*
createEnemy.prototype = {
	
};
*/

function moveEnemy(target,map,s){
	//��
	var LEFT = Math.floor( parseInt(target.img.style.left) / map.mapWidthSize );//���݂̍��̃}�b�v���W
	var newLEFT = Math.floor( (parseInt(target.img.style.left) + target.vx) / map.mapWidthSize );//vx���A�i�񂾎��́A���̃}�b�v���W�B
	if(LEFT < 0){
		LEFT = 0;
	};
	if(LEFT >= map.mapArray[0].length){
		LEFT = map.mapArray[0].length-1;
	};
	if(newLEFT < 0){
		newLEFT = 0;
	};
	if(newLEFT >= map.mapArray[0].length){
		newLEFT = map.mapArray[0].length-1;
	};

	//��
	var TOP = Math.floor( parseInt(target.img.style.top) / map.mapHeightSize);
	var newTOP = Math.floor( (parseInt(target.img.style.top) + target.vy) / map.mapHeightSize);
	if(TOP < 0){
		TOP = 0;
	};
	if(TOP >= map.mapArray.length){
		TOP = map.mapArray.length-1;
	};
	if(newTOP < 0){
		newTOP = 0;
	};
	if(newTOP >= map.mapArray.length){
		newTOP = map.mapArray.length-1;
	};

	//�E
	var RIGHT = Math.floor( (parseInt(target.img.style.left) + parseInt(target.img.style.width)-1) / map.mapWidthSize );//�E��  -1�́A�������̂��߁B
	var newRIGHT = Math.floor( (parseInt(target.img.style.left) + parseInt(target.img.style.width)-1 + target.vx) / map.mapWidthSize );
	if(RIGHT < 0){
		RIGHT = 0;
	};
	if(RIGHT >= map.mapArray[0].length){
		RIGHT = map.mapArray[0].length-1;
	};
	if(newRIGHT < 0){
		newRIGHT = 0;
	};
	if(newRIGHT >= map.mapArray[0].length){
		newRIGHT = map.mapArray[0].length-1;
	};

	//��
	var BOTTOM = Math.floor( (parseInt(target.img.style.top) + parseInt(target.img.style.height)-1) / map.mapHeightSize);//�� -1�́A�������̂��߁B
	var newBOTTOM = Math.floor( (parseInt(target.img.style.top) + parseInt(target.img.style.height)-1 + target.vy) / map.mapHeightSize);
	if(BOTTOM < 0){
		BOTTOM = 0;
	};
	if(BOTTOM >= map.mapArray.length){
		BOTTOM = map.mapArray.length-1;
	};
	if(newBOTTOM < 0){
		newBOTTOM = 0;
	};
	if(newBOTTOM >= map.mapArray.length){
		newBOTTOM = map.mapArray.length-1;
	};

	var i,j;

	//Y�����̈ړ�
	if(s == "Y"){
		//��Ɉړ�
		if(target.vy < 0){
			for(i=TOP; i>=newTOP; i--){
				for(j=LEFT; j<=RIGHT; j++){
					if(map.mapArray[i][j] == 1){
						target.img.style.top = (newTOP + 1) * map.mapHeightSize + "px";
						target.vy = 0;
						return;
					};
				};
			};
		};
		//���Ɉړ�
		if(target.vy > 0){
			for(i=BOTTOM; i<=newBOTTOM; i++){
				for(j=LEFT; j<=RIGHT; j++){
					if(map.mapArray[i][j] == 1){
						target.img.style.top = newBOTTOM * map.mapHeightSize - parseInt(target.img.style.height) + "px";
						target.vy = 0;
						target.jumpFlag = false;//���n
						return;
					};
				};
			};
		};
		target.jumpFlag = true;//vy���[���ɂȂ��Ă��Ȃ��Ƃ������́A�u���b�N�����������Ƃ������A���Ȃ킿�󒆁B
		target.img.style.top = parseInt(target.img.style.top) + target.vy + "px";
	};

	//X�����̈ړ�
	if(s == "X"){
		//���Ɉړ�
		if(target.vx < 0){
			for(i=TOP; i<=BOTTOM; i++){
				for(j=LEFT; j>=newLEFT; j--){
					if(map.mapArray[i][j] == 1){
						target.img.style.left = (newLEFT + 1) * map.mapWidthSize + "px";
						target.vx = -target.vx;//�ǂɂԂ�������A���x���[���ɂ���B
						return;
					};
				};
			};
		};
		//�E�Ɉړ�
		if(target.vx > 0){
			for(i=TOP; i<=BOTTOM; i++){
				for(j=RIGHT; j<=newRIGHT; j++){
					if(map.mapArray[i][j] == 1){
						target.img.style.left = newRIGHT * map.mapWidthSize - parseInt(target.img.style.width) + "px";
						target.vx = -target.vx;
						return;
					};
				};
			};
		};
		target.img.style.left = parseInt(target.img.style.left) + target.vx + "px";
	};

};//function Move  END