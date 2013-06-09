var preload;
    var vtFila = ["bumbo", "bumbo", "caixa"];//, "surdo", "prato", "chimbu", "tom1", "tom2", "surdo", "prato"];
    var ind;
    var player;
    var assobio;
    var score; //vtFila.length-1
    var level = 0;
    var pontuacao = 0;


	function playFila()
	{
		//if (vtFila.length>0){
		if((ind < vtFila.length) && (player == -1)){
			console.log(vtFila[0], vtFila.length);
			playSound(document.getElementById(vtFila[ind]));//vtFila.length-1]));
			//vtFila.pop(0);
			ind = ind + 1;
			//vtFila = vtFila.slice(1);	
			assobio = 0; //gambi

		}else if(player == -1){
			player = 0;
			if(assobio == 0){
				createjs.Sound.play("assobio", createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
				assobio = 1;
			}
			
		}
	}
		
    function init() {
        if (window.top != window) {
            document.getElementById("header").style.display = "none";
        }

        if (!createjs.Sound.initializeDefaultPlugins()) {
            document.getElementById("error").style.display = "block";
            document.getElementById("content").style.display = "none";
            return;
        }

        document.getElementById("loader").className = "loader";
        var assetsPath = "assets/";
        var manifest = [
			{src:assetsPath+"caixa.wav", id:"caixa"},
			{src:assetsPath+"bumbo.wav", id:"bumbo"},
			{src:assetsPath+"cymbal.wav",id:"chimbu"},
			{src:assetsPath+"tom1.wav",id:"tom1"},
			{src:assetsPath+"tom2.wav",id:"tom2"},
			{src:assetsPath+"surdo.wav",id:"surdo"},
			{src:assetsPath+"prato.wav", id:"prato"},
			
			{src:assetsPath+"scream.wav",id:"grito"},
			//{src:assetsPath+".wav",id:"apito"},
			{src:assetsPath+"whistle-long.wav",id:"assobio"}
		];

        createjs.Sound.addEventListener("fileload", createjs.proxy(soundLoaded, this)); // add an event listener for when load is completed
        createjs.Sound.registerManifest(manifest);
        ind = 0;
        player = -1;
				playFila();            
    }

    function soundLoaded(event) {
        document.getElementById("loader").className = "";
        var div = document.getElementById(event.id);
    }

    function stop() {
        if (preload != null) { preload.close(); }
        createjs.Sound.stop();
    }

    function playSound(target) {
    	console.log("playsound", target);
    	
        var instance = createjs.Sound.play(target.id, createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
        if (instance == null || instance.playState == createjs.Sound.PLAY_FAILED) { return; }
        
		    //target.className = "gridBox active";
			document.getElementById(target.id+"-1").style.display = 'none';
			document.getElementById(target.id+"-2").style.display = 'block';
		    
			instance.addEventListener ("complete", function(instance) {
				//target.className = "gridBox";
				document.getElementById(target.id+"-1").style.display = 'block';
				document.getElementById(target.id+"-2").style.display = 'none';
				playFila();
			});
		
		if(player > -1){
			console.log("errou1", target.id);
			if(target.id != vtFila[player]){
				console.log("errou", target.id);
				createjs.Sound.play("grito", createjs.Sound.INTERRUPT_NONE, 0, 0, false, 1);
				player = -1;
				pause("menu");
			}else{
				player = player + 1;
				if(player == vtFila.length){
					levelup(level);
				}	
			}
		}
		
	}


	function pause(id){
		document.getElementById(id).style.display = 'block';
		document.getElementById("tudo").style.display = 'none';				
		
	}
	function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

function levelup(level){
		
		pause("menu2");
		player = 0;
		pontuacao = vtFila.length;
		topo.innerHTML = "<br> Pontos: " + pontuacao;
		if (level == 0) 	{
			vtFila = vtFila.concat(["caixa", "bumbo", "caixa"]);
		}	
		if (level == 1) 		vtFila = vtFila.concat(vtFila);
		//level 0 e 1 => que isso novinha
		if (level == 2 ) vtFila = ["tom1","tom1","tom2","surdo","caixa","prato"];
		if (level == 3) vtFila = vtFila.concat(["bumbo", "caixa", "bumbo","bumbo", "caixa"]);
		// só vou beber mais hoje
		if(level == 4 )vtFila = ["bumbo","caixa","bumbo","caixa","bumbo"];
		if (level == 5) vtFila = vtFila.concat(["prato","caixa","prato"]);
		if (level ==6 ) vtFila = vtFila.concat(vtFila);
		//TNT 
		level = level+1;

}
	
