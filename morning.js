(function(){
	function Leo(x, y){
		this.width = 392;
		this.height = 478;
		this.x = x;
		this.y = y;

		this.div, this.body, this.sink, this.state, this.opeArr, this.dropAreas = null;
		this.currDragged = {
			item: null,
			draggedImage: null,
			offsetX: 0,
			offsetY: 0,
			inside: false
		}

		this.initDiv = function() {
			this.div = document.createElement("div");
			this.div.style.width = this.width + 'px';
			this.div.style.height = this.height + 'px';
			this.div.style.position = 'absolute';
			this.div.style.left = this.x ? this.x + 'px' : '50%';
			this.div.style.top = this.x ? this.x + 'px' : '50%';
			this.div.style.marginTop = this.x ? 0 : -this.height/2 + 'px';
			this.div.style.marginLeft = this.x ? 0 : -this.width/2 + 'px';
			document.body.appendChild(this.div);
		};

		function addPart(con, src, xPos, yPos, width, height, id){
			var part = document.createElement("div");
			part.style.width = width + 'px';
			part.style.height = height + 'px';
			part.style.position = "absolute";
			part.style.left = xPos + 'px';
			part.style.top = yPos + 'px';
			part.style.backgroundImage = 'url(' + src + ')';
			if(id){
				part.setAttribute("id", id);
			}
			con.appendChild(part);
			return part;
		}; 

		this.initParts = function(){
			var container = this.div;
			//addPart(container, "imgs/ae/bed_03.png", 23, 49, 346, 429, "bed");
			addPart(container, "imgs/ae/images/clock_03.png", 39, 0, 71, 91, "clock");
			addPart(container, "imgs/ae/images/stars_03.png", 0, -30, 414, 415, "stars");
			addPart(container, "imgs/ae/images/z_03.png", 312, 54, 48, 47, "z1");
			addPart(container, "imgs/ae/images/z_03.png", 352, 39, 48, 47, "z2");
			addPart(container, "imgs/ae/images/z_03.png", 377, 24, 48, 47, "z3");

			
			var hips = addPart(container, "imgs/ae/images/hips_03.png", 183, 347, 45, 17, 'hips');

			var torso = addPart(container, "imgs/ae/images/torso_03.png", 183, 257, 43, 94, 'torso');
			
			var neck = addPart(torso, "imgs/ae/images/neck_03.png", 5, -15, 43, 30, 'neck');
			addPart(torso, "imgs/ae/images/vest_03.png", 0, 0, 43, 94);
			var torsoWithShirt = addPart(torso, "imgs/ae/images/torsoShirt_03.png", 0, 2, 42, 94, 'torsoWithShirt');
			var lArm = addPart(torso, "imgs/ae/images/sArm_03.png", -5, 6, 13, 47, "lArm");
			var lSleeve = addPart(lArm, "imgs/ae/images/lSleeve_03.png", 1, 0, 12, 17, "lSleeve");
			var lForeArm = addPart(lArm, "imgs/ae/images/lforeArm_03.png", 0, 37, 8, 45, "lForeArm");
			var lHand = addPart(lForeArm, "imgs/ae/images/lHand_03.png", -3, 38, 17, 22, "lHand");

			var rArm = addPart(torso, "imgs/ae/images/srArm_03.png", 37, 6, 13, 47, "rArm");
			var rSleeve = addPart(rArm, "imgs/ae/images/lSleeve_03.png", 3, 0, 12, 17, "rSleeve");
			var rForeArm = addPart(rArm, "imgs/ae/images/rforeArm_03.png", 4, 38, 8, 45, "rForeArm");
			var rHand = addPart(rForeArm, "imgs/ae/images/rHand_03.png", -6, 37, 17, 22, "rHand");
			

			var rThigh = addPart(hips, "imgs/ae/images/rThigh_03.png", 28, 14, 9, 41, "rThigh");
			var rCalf = addPart(rThigh, "imgs/ae/images/rCalf_03.png", -1, 31, 11, 40, "rCalf");
			var rFoot = addPart(rCalf, "imgs/ae/images/rFoot_03.png", 3, 28, 24, 15, "rFoot");
			var rShoe = addPart(rCalf, 'imgs/ae/images/rShoe_03.png', -6, 28, 30, 28, "rShoe");

			var lThigh = addPart(hips, "imgs/ae/images/lThigh_03.png", 8, 14, 9, 41, "lThigh");	
			var lCalf = addPart(lThigh, "imgs/ae/images/lCalf_03.png", -1, 31, 11, 40, "lCalf");	
			var lFoot = addPart(lCalf, "imgs/ae/images/lFoot_03.png", -16, 28, 24, 15, "lFoot");
			var lShoe = addPart(lCalf, 'imgs/ae/images/lShoe_03.png', -14, 28, 30, 28, "lShoe");

			var lpants = addPart(lThigh, "imgs/ae/images/lpants_03.png", -8, -7, 24, 15, "lpants");
			var rpants = addPart(rThigh, "imgs/ae/images/rpants_03.png", -6, -7, 24, 15, "rpants");
			// addPart(hips, "imgs/ae/images/pants_03.png", 1, 7, 20, 23, "lPantsNormal");
			// addPart(hips, "imgs/ae/images/pants_03.png", 24, 7, 20, 23, "rPantsNormal");


			
			//addPart(container, "imgs/ae/tackle.png", 20, 262, 250, 189, "tackle");

			var headBase = addPart(neck, "imgs/ae/images/images/face_all.png", -114, -185, 251, 195, "headBase");
			var head = addPart(neck, "imgs/ae/images/images/face_03.png", -114, -185, 251, 195, "head");
			addPart(head, "imgs/ae/images/lEar_03.png", 0, 135, 43, 46);
			addPart(head, "imgs/ae/images/rEar_03.png", 208, 135, 43, 46);
			addPart(head, "imgs/ae/images/hairBase_03.png", 0, 21, 250, 174);
			addPart(head, "imgs/ae/images/hairs_03.png", 0, 21, 250, 174);
			var lEyebrow = addPart(head, "imgs/ae/eyes.png", 53, 84, 49, 21, "lEyebrow");
			var rEyebrow = addPart(head, "imgs/ae/eyes.png", 154, 85, 49, 21, "rEyebrow");
			var nose = addPart(head, "imgs/ae/images/nose_03.png", 111, 139, 37, 22, "nose");
			var lEye = addPart(head, "imgs/ae/eyes.png", 65, 128, 34, 25, "lEye");
			var rEye = addPart(head, "imgs/ae/eyes.png", 162, 128, 34, 25, "rEye");
			head.sdrool = addPart(head, "imgs/ae/images/sdrool_03.png", 107, 175, 17, 20);
			var mouth = addPart(head, "imgs/ae/eyes.png", 106, 163, 52, 26, "mouth");
			this.sink = addPart(this.div, "imgs/ae/images/sink_03.png", 161, 310, 85, 44, "sink");
			this.sink.tapWater = addPart(sink, "imgs/ae/images/tapWater_03.png", 0, 0, 85, 44, "tapWater");
			this.sink.tap = addPart(sink, "imgs/ae/images/tap_03.png", 0, 0, 85, 44, "tap");

			var limbs = new Map();
			limbs.set("lArm", lArm);
			limbs.set("lForeArm", lForeArm);
			limbs.set("lHand", lHand);
			limbs.set("rArm", rArm);
			limbs.set("rForeArm", rForeArm);
			limbs.set("rHand", rHand);
			limbs.set("lThigh", lThigh);
			limbs.set("lCalf", lCalf);
			limbs.set("lFoot", lFoot);
			limbs.set("rThigh", rThigh);
			limbs.set("rCalf", rCalf);
			limbs.set("rFoot", rFoot);
			limbs.set('lPant', lpants);
			limbs.set('rPant', rpants);


			this.body = {
				"limbs": limbs,			
				"head": head,
				"headBase": headBase,
				"lEye": lEye,
				"rEye": rEye,
				"lEyebrow": lEyebrow,
				"rEyebrow": rEyebrow,
				"mouth": mouth,
				"torso": torso,
				"hips": hips,
				'neck': neck,
				'nose': nose,
				'hips': hips
			}

			this.state = {
				// 0:sleep  1:normal
				0: {
					"lArm": 50,
					"lForeArm": -20,
					"rArm": -30,
					"rForeArm": 78,
					"lThigh": 30,
					"lCalf": -50,
					"rThigh": -50,
					"rCalf": 20
				},
				1:{
					"lArm": 0,
					"lForeArm": 0,
					"rArm": 0,
					"rForeArm": 0,
					"lThigh": 0,
					"lCalf": 0,
					"rThigh": 0,
					"rCalf": 0,
					"lHand": 0,
					"rHand": 0,
					"lFoot": 0,
					"rFoot": 0
				}
			}
		}


		this.setBodySleep = function(){	
			for(key in this.state[0]){
				var body = this.body["limbs"];
				body[key].style.transform = "rotate(" + this.state[0][key] + "deg)";
			}		
		}

		this.setBodyNormal = function(){
			for( key in this.state[1]){
				var body = this.body["limbs"];
				if(body.has(key)){
					body.get(key).style.transform = "rotate( " + this.state[1][key] + "deg)";
				}
			}
		}

		this.init = function(){
			this.initDiv();	
			this.initParts();


			var leb  = this.body['lEyebrow'];
			var reb  = this.body['rEyebrow'];
			var mouth = this.body['mouth'];
			var leye = this.body['lEye'];
			var reye = this.body['rEye'];

			leb.classList.add("eblNormal");
			reb.classList.add("ebrNormal");
			mouth.classList.add("mouthNormal");

			reye.style.transform = "rotateY(180deg)";
			leye.style.animationDirection = 'alternate';
			reye.style.animationDirection = 'alternate';
			leye.classList.add("stw");
			reye.classList.add("stw");
			setTimeout(() => {

				this.body['lEye'].classList.remove("stw");
				this.body['lEye'].style.backgroundPosition = '-340px 0';
				this.body['rEye'].classList.remove("stw");
				this.body['rEye'].style.backgroundPosition = '-340px 0';
			}, 5400);

			leb.addEventListener("animationend", function(){
				if(this.classList.contains("eblNormal")){
					this.classList.remove("eblNormal");
					this.style.width = '36px';	
					this.style.height = '32px';
					this.style.left = '61px';
					this.style.top = '82px';
	 				this.style.backgroundPosition = '0px -71px';
				}		
			})
			reb.addEventListener("animationend", function(){
				if(this.classList.contains("ebrNormal")){
					this.classList.remove("ebrNormal");
					this.style.width = '33px';
					this.style.height = '32px';
					this.style.left = '164px';
					this.style.top = '83px';
		 			this.style.backgroundPosition = '-396px -71px';
				}
				
			})

			mouth.addEventListener("animationend", function(){
				if(this.classList.contains("mouthNormal")){
					this.classList.remove("mouthNormal");
					this.style.width = '52px';	
					this.style.height = '21px';
					this.style.left = '106px';
					this.style.top = '166px';
	 				this.style.backgroundPosition = '0px -134px';
				}		
			})
			
			

			//this.setBodySleep();

			// setTimeout(
			// 	() => {this.body["lEye"].classList.add("stw");
			// 			this.body["rEye"].classList.add("stw");}
			// , 5000);

			// setTimeout(
			// 	() => {this.setBodyNormal();
			// 			var leye = this.body["lEye"];
			// 			var reye = this.body["rEye"];
			// 			leye.style.backgroundPosition = '-340px 0';
			// 			reye.style.backgroundPosition = '-340px 0';
			// 			leye.classList.remove("stw");
			// 			reye.classList.remove("stw");

			// 		setInterval(() => {
			// 			this.body["lEye"].classList.add("blink");
			// 			this.body["rEye"].classList.add("blink");
			// 		}, 10000); 

			// 		setInterval(() => {
			// 			if(leye.classList.contains("blink")){
			// 				leye.classList.remove("blink");
			// 				reye.classList.remove("blink");
			// 			}
			// 		}, 10600);
					
			// }, 12500);

			//this.body["rEye"].style.backgroundPosition = '-340px 0';
			//this.body["lEye"].style.backgroundPosition = '-340px 0';




			this.initDraggedItems();
			this.initDropArea();
			this.initDragEvent();
		};

		this.washFace = function() {	
			var towel;
			if(!document.getElementById('towel')){
				towel = document.createElement("div");
				towel.style.position = 'absolute';
				towel.style.width = '56px';
				towel.style.height = '68px';
				towel.style.backgroundImage = "url(imgs/ae/images/images/wfOpe.png)";
				towel.style.left = '-6px';
				towel.style.top = '29px';
				towel.setAttribute("id", "towel");
				towel.style.backgroundRepeat = 'no-repeat';
				towel.style.backgroundPosition = '0 68px';
			}else{
				towel = document.getElementById('towel');
			}

			var sinkArr = [this.sink, this.sink.tapWater, this.sink.tap];
			sinkArr.forEach(function(ele){
				ele.classList.add("showHideSink");
				ele.addEventListener("animationend", function(){
					this.classList.remove("showHideSink");
				});
			});
	
			var headBase = this.body["headBase"];
			var head = this.body["head"];
			var torso = this.body["torso"];
			var hips = this.body["hips"];
			if(!head.sdrool){
				headBase.style.backgroundImage = "url(imgs/ae/images/images/face_all_without_drool.png)";
				
			}

			this.body["lEye"].style.backgroundPosition = "-340px 0px";
			this.body['rEye'].style.backgroundPosition = "-340px 0px";
			this.body['rEye'].style.transform = "rotateY(180deg)";
			
			setTimeout(() => {
				this.body["head"].style.opacity = "0";
				this.body["headBase"].style.opacity = "1";
				this.body["headBase"].classList.add("headDown");

				for (var [key, value] of this.body["limbs"]) {
					value.classList.add("wf"+key);
					if(key === "lArm"){
						value.style.zIndex = 0;						
					}
					value.addEventListener("animationend", function(){
						this.classList.remove("wf" + this.id);			
					});
				}
				
				this.body['torso'].appendChild(towel);	
				towel.classList.add("wfTowelMove");
				towel.addEventListener("animationend", function(){
					this.classList.remove("wfTowelMove");
				})
				
				torso.style.top = parseInt(torso.style.top) + 1 + "px";
				hips.style.top = parseInt(hips.style.top) + 1 + "px";

				
			}, 500);

			setTimeout(() => {
				this.body["lEye"].classList.add("closeEyes");
				this.body["rEye"].classList.add("closeEyes");
				[this.body["lEye"], this.body["rEye"]].forEach(function(ele){
					ele.addEventListener("animationend", function(){
						this.style.backgroundPosition = '0 0';
						this.classList.remove("closeEyes");
					})
				})
			}, 6660);

			setTimeout(() => {
				this.body["lEye"].classList.add("openEyes");
				this.body["rEye"].classList.add("openEyes");
				[this.body["lEye"], this.body["rEye"]].forEach(function(ele){
					ele.addEventListener("animationend", function(){
						this.style.backgroundPosition = '-340px 0';
						this.classList.remove("openEyes");
					})
				})
			}, 9180);

			setTimeout(() => {		
				this.body["headBase"].addEventListener("animationend", function(){
					this.style.opacity = 0;
					var head = this.nextSibling;
					
					head.style.opacity = 1;
					if(head.sdrool){
						
						head.removeChild(head.sdrool);
						head.sdrool = null;
					}
					
					this.classList.remove("headDown");
					
				})
				this.body["torso"].style.top = parseInt(this.body["torso"].style.top) - 1 + "px";
				this.body["hips"].style.top = parseInt(this.body["hips"].style.top) - 1 + "px";

			}, 4500);

		};

		this.eatBreakfast = function() {
			var desk, spoon, bowl;
			var torso = this.body['torso'];
			
			if(!document.getElementById('desk')){
				
				desk = addPart(torso, 'imgs/ae/desk.png', -69, 70, 182, 139, 'desk');
				spoon = addPart(desk, 'imgs/ae/spoon.png', 65, -16, 25, 41, 'spoon');
				bowl = addPart(desk, 'imgs/ae/bowl.png', 65, 10, 53, 26, 'bowl');
				
			}else{
				desk = document.getElementById('desk');
				spoon = document.getElementById('spoon');
				bowl = document.getElementById('bowl');
			}

			var torso = this.body['torso']; 
			var hips = this.body['hips']; 
			var lThigh = this.body['limbs'].get('lThigh'); 	
			var lCalf = this.body['limbs'].get('lCalf'); 
			var rThigh = this.body['limbs'].get('rThigh'); 
			var rCalf = this.body['limbs'].get('rCalf'); 
			var lArm = this.body['limbs'].get('lArm'); 
			var lForeArm = this.body['limbs'].get('lForeArm'); 
			var lHand = this.body['limbs'].get('lHand'); 
			var mouth = this.body['mouth'];	
			
			var innerMouth = addPart(mouth, 'imgs/ae/btMouth.png', 0, 0, 52, 26, 'innerMouth');
			mouth.style.backgroundImage = '';
			mouth.style.height = '26px';
			innerMouth.style.backgroundPosition = '0 -26px';

			setTimeout(() => {
				desk.classList.add('showUp');
				spoon.classList.add('showUp');
				bowl.classList.add('showUp')
			}, 50);

			setTimeout(() => {
				desk.classList.add('sitDown');
				torso.classList.add('sitDown');
				hips.classList.add('sitDown');
				lThigh.classList.add('sitDown');
				rThigh.classList.add('sitDown');
				rCalf.classList.add('sitDown');
				lCalf.classList.add('sitDown');
				lArm.classList.add('eb');
				lForeArm.classList.add('eb');
				lHand.classList.add('eb');
				spoon.classList.add('eb');
				spoon.addEventListener('animationend', () => {
					spoon.classList.remove('eb');
					lArm.classList.remove('eb');
					lForeArm.classList.remove('eb');
					lHand.classList.remove('eb');
					desk.classList.remove('sitDown');
					torso.classList.remove('sitDown');
					hips.classList.remove('sitDown');
					lThigh.classList.remove('sitDown');
					rThigh.classList.remove('sitDown');
					rCalf.classList.remove('sitDown');
					lCalf.classList.remove('sitDown');

					
					if(mouth.contains(innerMouth)){
						mouth.removeChild(innerMouth);
					}

					
					
					mouth.classList.remove('ebY');
					mouth.style.backgroundImage = 'url(imgs/ae/eyes.png)';
					mouth.style.backgroundPosition = '0 -134px';
					mouth.style.height = '21px';
					

					setTimeout(() => {
						desk.classList.remove('showUp');
						spoon.classList.remove('showUp');
						bowl.classList.remove('showUp');
						
						setTimeout(() => {
							if(torso.contains(desk) && !desk.classList.contains('showUp')){

								torso.removeChild(desk);
							}
						}, 500);	
						
					}, 500)
				})
				
				mouth.classList.add('ebY');
				
				
				innerMouth.classList.add('ebX');
				
			}, 600)

		}

		this.getDressed = function() {
			var lArm = this.body['limbs'].get('lArm');
			var rArm = this.body['limbs'].get('rArm');
			lArm.style.transform = 'rotate(30deg)';
			rArm.style.transform = 'rotate(-30deg)';

			var lShoe = this.body['limbs'].get('lCalf').lastChild;
			var rShoe = this.body['limbs'].get('rCalf').lastChild;
			if(rShoe){
				this.div.appendChild(rShoe);
				this.div.appendChild(lShoe);
				rShoe.style.left = '204px';
				rShoe.style.top = '420px';
				
				lShoe.style.left = '176px';
				lShoe.style.top = '420px';
			}else{
				lShoe = this.div.querySelector('#lShoe');
				rShoe = this.div.querySelector('#rShoe');
			}
			var lpant = this.body['limbs'].get('lPant');
			var rpant = this.body['limbs'].get('rPant');
			var lCalf = this.body['limbs'].get('lCalf');
			var rCalf = this.body['limbs'].get('rCalf');
			var clothes = [ this.body['limbs'].get('lArm').firstChild, this.body['limbs'].get('rArm').firstChild, this.body['torso'].querySelector('#torsoWithShirt'), lShoe, rShoe, lpant, rpant];
			//var vanishClothes = ['lFoot', 'rFoot'];
			var hips = this.body['hips'];
			
			var lThigh = this.body['limbs'].get('lThigh');
			var rThigh = this.body['limbs'].get('rThigh');
			var torso = this.body['torso'];
			var head = this.body['head'];

			
			
			
			
			

			setTimeout( () => {
				clothes.forEach((ele) => {
					
					ele.style.opacity = 1;
					ele.classList.add('showUp');
				});
				
				this.body['limbs'].get('lFoot').style.opacity = 0;
				this.body['limbs'].get('rFoot').style.opacity = 0;

				
				hips.style.backgroundImage = 'url(imgs/ae/images/hipsWithPants_03.png)';
				hips.style.width = '42px';
				hips.style.height = '15px';

				

				lpant.style.backgroundImage = 'url(imgs/ae/images/pants_03.png)';
				rpant.style.backgroundImage = 'url(imgs/ae/images/pants_03.png)';
				lpant.style.width = '20px';
				lpant.style.height = '23px';
				rpant.style.width = '20px';
				rpant.style.height = '23px';
				rpant.style.left = '-5px';

			}, 500);

			setTimeout(() => {
				hips.classList.add('swingBody');
				lThigh.classList.add('swingBody');
				rThigh.classList.add('swingBody');
				torso.classList.add('swingBody');
				head.classList.add('swingBody');
				lArm.classList.add('swingBody');
				rArm.classList.add('swingBody');
				lShoe.classList.add('swingBody');
				rShoe.classList.add('swingBody');
				/*lCalf.classList.add('swingBody');
				rCalf.classList.add('swingBody');*/

				setTimeout(() => {
					hips.classList.remove('swingBody');
					lThigh.classList.remove('swingBody');
					rThigh.classList.remove('swingBody');
					torso.classList.remove('swingBody');
					head.classList.remove('swingBody');
					lArm.classList.remove('swingBody');
					rArm.classList.remove('swingBody');
					lShoe.classList.remove('swingBody');
					rShoe.classList.remove('swingBody');
					/*lCalf.classList.remove('swingBody');
					rCalf.classList.remove('swingBody');*/
					lArm.style.transform = 'rotate(0deg)';
					rArm.style.transform = 'rotate(0deg)';
					clothes.forEach((ele) => {
						ele.classList.remove('showUp');
					})
				}, 2000);

			}, 1000);


		}

		this.initDraggedItems = function() {
			var container = document.createElement("div");
			var opeArr = new Map();
			opeArr.set("wfOpe", "wfDragged");
			opeArr.set("btOpe", "btDragged");
			opeArr.set("ebOpe", "ebDragged");
			opeArr.set("tcOpe", "tcDragged");

			var height = 0;
			for([key, value] of opeArr){
				var divOpe = document.createElement("div"); 
				var divDragged = document.createElement("div");	
				divOpe.style.backgroundImage = "url(imgs/ae/images/images/ope.png)";
				// divOpe.style.top = height + 'px';
				// divOpe.style.left = '0px';
				divOpe.setAttribute("id", key);
				divOpe.setAttribute("draggable", 'true');
				divDragged.style.position = 'absolute';
				// divOpe.style.position = 'absolute';
				switch(key) {
					case 'wfOpe':
						divOpe.style.width = '56px';
						divOpe.style.height = '68px';
						divDragged.style.width = '56px';
						divDragged.style.height = '68px';
						divOpe.style.backgroundPosition = '-67px 0';
						divDragged.style.backgroundPosition = '-67px 0';
						height += parseInt(divOpe.style.height);
						break;
					case 'btOpe':
						divOpe.style.width = '67px';
						divOpe.style.height = '48px';
						divDragged.style.width = '67px';
						divDragged.style.height = '48px';
						divOpe.style.backgroundPosition = '0 0';
						divDragged.style.backgroundPosition = '0 0';
						height += parseInt(divOpe.style.height);
						break;
					case 'ebOpe':
						divOpe.style.width = '47px';
						divOpe.style.height = '43px';
						divDragged.style.width = '47px';
						divDragged.style.height = '43px';
						divOpe.style.backgroundPosition = '-123px 0';
						divDragged.style.backgroundPosition = '-123px 0';
						height += parseInt(divOpe.style.height);
						break;
					case 'tcOpe':
						divOpe.style.width = '44px';
						divOpe.style.height = '45px';
						divDragged.style.width = '44px';
						divDragged.style.height = '45px';
						divOpe.style.backgroundPosition = '-170px 0';
						divDragged.style.backgroundPosition = '-170px 0';
						height += parseInt(divOpe.style.height);
						break;
				}
				
				divDragged.style.backgroundImage = "url(imgs/ae/images/images/ope.png)";
				divDragged.style.opacity = '0';
				divDragged.style.top = -parseInt(divOpe.style.height) + 'px';
				divDragged.setAttribute("id", value);

				// container.appendChild(divDragged);
				document.body.appendChild(divDragged);
				container.appendChild(divOpe);
			
			}

			container.style.position = 'absolute';
			container.classList.add('flexColumnSpBet');
			// container.style.display = 'flex';
			// container.style.flexFlow = 'column';
			// container.style.justifyContent = 'space-between';
			// container.style.alignItems = 'center';
			container.style.width = '70px';
			container.style.height = height + (opeArr.size-1)*20 + 'px';
			container.style.top = '50%'
			container.style.right = 0;
			container.style.marginTop = -(height + (opeArr.size-1)*20) /2 + 'px';
			document.body.appendChild(container);
			this.opeArr = opeArr;	
		};

		function getTop(ele){
		   var offset = ele.offsetTop + ele.clientTop;
		   if(ele.offsetParent != null){
		     offset += getTop( ele.offsetParent);
		   }         
		   return offset;
		};
		
		function getLeft(ele){
		   var offset = ele.offsetLeft + ele.clientLeft;
		   if(ele.offsetParent != null){
		      offset += getLeft( ele.offsetParent);
		   } 
		   return offset;
		};

		function handleDragOver(e){
			e.preventDefault();
		}
			

		function handleDragEnter(e){
			// e.target.classList.add("dragover");
	        e.preventDefault();
		   
			
		};

		function handleDragLeave(e){
			//e.target.classList.remove("dragover");
			e.preventDefault();
		};

		this.initDropArea = function(){
			var partsId = ['torso', 'neck', 'lArm', 'lForeArm', 'lHand', 'head', 'hips', 'lpants', 'rpants', 'lThigh', 'lCalf', 'lFoot', 'rArm', 'rForeArm', 'rHand', 'rThigh', 'rCalf', 'rFoot'];
			var dropArea = [];
			partsId.forEach(function(id){
				 var part = document.getElementById(id);
				 var area = {
				 	id: id,
					x: getLeft(part),
					y: getTop(part),
					rx: parseInt(part.offsetWidth) + getLeft(part),
					ry: parseInt(part.offsetHeight) + getTop(part)
				};
				dropArea.push(area);
			});
			this.dropAreas = dropArea;
			// console.log(dropArea);

		};

		this.initDragEvent = function(){
			
			var currDragged = this.currDragged;
			var operArr = this.opeArr;
			var dropAreas = this.dropAreas;
			document.addEventListener('dragstart', function(e){
				handleDragStart(e, currDragged, operArr);
			}, false);	
			document.addEventListener("drag",(e) => 
				handleDrag(e, currDragged, dropAreas, this)
			, false);
			document.addEventListener("dragenter", handleDragEnter, false);
			document.addEventListener("dragover", handleDragOver, false);
			document.addEventListener("dragleave", handleDragLeave, false);
			document.addEventListener("dragend", (e) => handleDragEnd(e, this), false);
			document.addEventListener("drop", 
				// function(e){handleDrop(e, currDragged, this)}
				(e) => handleDrop(e, currDragged, this)
			, false);	
			
		};

		function handleDragStart(e, currDragged, opeArr){	

			
			currDragged.item = e.target;

			
			currDragged.item.style.opacity = 0;	

			currDragged.draggedImage = document.getElementById(opeArr.get(e.target.id));
			currDragged.draggedImage.style.opacity = 1;
			currDragged.offsetX = e.offsetX;
			currDragged.offsetY = e.offsetY;
					
		};	

		function insideDropArea(e, currDragged, dropAreas){
			var xR = e.clientX - currDragged.offsetX + currDragged.item.offsetWidth;
			var xL = e.clientX - currDragged.offsetX;
			var yR = e.clientY- currDragged.offsetY + currDragged.item.offsetHeight;
			var yL = e.clientY- currDragged.offsetY;


			return dropAreas.some(function(area){
				
				return ( xR >= area.x && xL <= area.rx && yR >= area.y && yL <= area.ry);		
			})
			
			
		};

		function handleDrag(e, currDragged, dropAreas, thisRef){
			
			currDragged.draggedImage.style.left = e.clientX - currDragged.offsetX  + 'px' ;/*- getLeft(currDragged.draggedImage.parentNode)*/
			
			currDragged.draggedImage.style.top = e.clientY- currDragged.offsetY  + 'px' ;	/*- getTop(currDragged.draggedImage.parentNode)*/
		
			
			var leb = thisRef.body["lEyebrow"];
			var reb = thisRef.body["rEyebrow"];
			var leye = thisRef.body["lEye"];
			var reye = thisRef.body["rEye"];
			var nose = thisRef.body["nose"];
			var mouth = thisRef.body['mouth'];
			var neck = thisRef.body['neck'];
			var head = thisRef.body['head'];

			leye.style.animationDirection = '';
			reye.style.animationDirection = '';
			reye.style.transform = "";
			leye.style.transform = "";
			leye.style.width = '38px';
			leye.style.height = '31px';
			reye.style.width = '36px';
			reye.style.height = '31px';
			leye.style.backgroundPosition = ' 0 -103px';
			reye.style.backgroundPosition = '-418px -103px';
			leye.style.left = "67px";
			leye.style.top = '127px';
			reye.style.left = "157px";
			reye.style.top = '127px';

			// leb.style.width = '36px';	
			// leb.style.height = '32px';
			// leb.style.left = '61px';
			// leb.style.top = '82px';
			// leb.style.backgroundPosition = '0px -71px';
		
			// reb.style.width = '33px';
			// reb.style.height = '32px';
			// reb.style.left = '164px';
			// reb.style.top = '83px';
	 	// 	reb.style.backgroundPosition = '-396px -71px';

	 		if(insideDropArea(e, currDragged, dropAreas)){

	 			if(!leb.classList.contains("dragover")){
	 				mouth.style.backgroundImage = 'url(imgs/ae/eyes.png)';
	 				leb.classList.add("dragover");
	 				reb.classList.add("dragover");
	 				leye.classList.add("dragover");
	 				reye.classList.add("dragover");
	 				nose.classList.add("dragover");
	 				mouth.classList.add("dragover");
	 				head.classList.add("dragover");
	 				neck.classList.add("dragover");

	 				
	 			}
	 			if(!currDragged.inside){
	 				currDragged.inside = true;
	 			}
	 					
	 		}else{
	 			currDragged.inside = false;
	 			
	 			if(leb.classList.contains("dragover")){
	 				leb.classList.remove("dragover");
	 				reb.classList.remove("dragover");
	 				leye.classList.remove("dragover");
	 				reye.classList.remove("dragover");
	 				nose.classList.remove("dragover");
	 				mouth.classList.remove("dragover");
	 				head.classList.remove("dragover");
	 				neck.classList.remove("dragover");
	 				
	 			}
	 		}
	        e.preventDefault();
	       
		};

		function handleDragEnd(e, thisRef){
			
			if(thisRef.currDragged.inside){
				thisRef.body['lEyebrow'].classList.remove("dragover");
				thisRef.body['rEyebrow'].classList.remove("dragover");
				thisRef.body["lEye"].classList.remove("dragover");
				thisRef.body["rEye"].classList.remove("dragover");
				thisRef.body['mouth'].classList.remove("dragover");
				thisRef.body['nose'].classList.remove("dragover");
				thisRef.body['head'].classList.remove("dragover");
				thisRef.body['neck'].classList.remove("dragover");
			}
		
			e.preventDefault();
		};

		function handleDrop(e, currDragged, thisRef){
			e.preventDefault();
		
			if(currDragged.inside){	
				currDragged.draggedImage.style.opacity = '0';
				currDragged.draggedImage.style.top = -parseInt(currDragged.draggedImage.style.height) + 'px';
				currDragged.draggedImage.style.left = '0px';

				switch(currDragged.item.id){
					case "wfOpe":
						thisRef.washFace();
						setTimeout(() => { thisRef.currDragged.item.style.opacity = 1}, 9740);
						break;
					case "btOpe":
						thisRef.brushTeeth();
						setTimeout(() => { thisRef.currDragged.item.style.opacity = 1},
							8000);
						break;
					case "ebOpe":
						thisRef.eatBreakfast();
						setTimeout(() => { thisRef.currDragged.item.style.opacity = 1},
							6500);
						break;
					case "tcOpe":
						thisRef.getDressed();
						setTimeout(() => { thisRef.currDragged.item.style.opacity = 1},
							3000);
						break;
				}
				
			}
			
			
		}

		this.brushTeeth = function(){
			var brush;
			if(!document.getElementById('brush')){
				brush = document.createElement('div');
				brush.style.width = '67px';
				brush.style.height = '48px';
				brush.style.position = 'absolute';
				brush.style.left = '-14px';
				brush.style.top = '45px';
				brush.style.opacity = 0;
				brush.style.zIndex = 1;
				brush.style.transform = 'translate(50px, 50px)';
				brush.setAttribute('id', 'brush');
				brush.style.backgroundImage = 'url(imgs/ae/brush.png)';
				document.getElementById('torso').appendChild(brush);
			}else{
				brush = document.getElementById('brush');
			}
			var lHand = this.body.limbs.get('lHand');
			lHand.style.backgroundImage = 'url(imgs/ae/holdBrushHand.png)';
			lHand.style.left = '-5px';

			var mouth = this.body['mouth'];
			mouth.style.backgroundImage = 'url(imgs/ae/btMouth.png)';
			mouth.style.backgroundPosition = '0 0';
			mouth.style.top = parseInt(mouth.style.top) -4 + 'px';
			mouth.style.height = '26px';
			setTimeout( () => {
				//var mouth = this.body['mouth'];

				mouth.style.backgroundPosition = '-468px 0';
	
			}, 4968);
			setTimeout(() => {
				lHand.style.backgroundPosition = '0px 0px';
				
			}, 7128);

			var parts = [this.body.limbs.get('lArm'), this.body.limbs.get('lForeArm'), this.body.limbs.get('lHand'), this.body['mouth'], brush];

			parts.forEach(function(ele){
				ele.classList.add("bt");
			});

			setTimeout(() => {
				lHand.style.backgroundPosition = '0px 0px';
			}, 7128);

			setTimeout(function(){
				parts.forEach(function(ele){
					ele.classList.remove('bt');	
				});
				mouth.style.top = parseInt(mouth.style.top) + 4 + 'px';
				mouth.style.backgroundImage = 'url(imgs/ae/eyes.png)';
				mouth.style.backgroundPosition = '0px -134px';
				mouth.style.height = '21px';

			}, 8000);
			
		}	

	}
	window.leo = new Leo();
	leo.init();

	
})();