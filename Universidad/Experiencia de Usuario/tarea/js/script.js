var imagenes = [1,2,3,4,5];
    $("#right").click(function(){
      for (var i = 0; i < imagenes.length; i++) {
        if(imagenes[i]==15){
          imagenes[i]=1;
        }else{
          imagenes[i]++;
        }
      }
      $("#imagen1").html("<img src="+"./src/img"+imagenes[0]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen2").html("<img src="+"./src/img"+imagenes[1]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen3").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen4").html("<img src="+"./src/img"+imagenes[3]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen5").html("<img src="+"./src/img"+imagenes[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
    });

    $("#left").click(function(){
        for (var i = 0; i < imagenes.length; i++) {
          if(imagenes[i]==1){
            imagenes[i]=5;
          }else{
            imagenes[i]--;
          }
        }
      $("#imagen1").html("<img src="+"./src/img"+imagenes[0]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen2").html("<img src="+"./src/img"+imagenes[1]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen3").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen4").html("<img src="+"./src/img"+imagenes[3]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen5").html("<img src="+"./src/img"+imagenes[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
    });

    $("#imagen5").click(function(){
        var j = 0;
        while (j<2) {
          for (var i = 0; i < imagenes.length; i++) {
            if(imagenes[i]==5){
              imagenes[i]=1;
            }else{
              imagenes[i]++;
            }
          }
          j++;
        }
      $("#imagen1").html("<img src="+"./src/img"+imagenes[0]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen2").html("<img src="+"./src/img"+imagenes[1]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen3").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen4").html("<img src="+"./src/img"+imagenes[3]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen5").html("<img src="+"./src/img"+imagenes[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
    });
    $("#imagen4").click(function(){
          for (var i = 0; i < imagenes.length; i++) {
            if(imagenes[i]==15){
              imagenes[i]=1;
            }else{
              imagenes[i]++;
            }
          }
      $("#imagen1").html("<img src="+"./src/img"+imagenes[0]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen2").html("<img src="+"./src/img"+imagenes[1]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen3").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen4").html("<img src="+"./src/img"+imagenes[3]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen5").html("<img src="+"./src/img"+imagenes[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
    });
    $("#imagen1").click(function(){
        var j = 0;
        while (j<2) {
          for (var i = 0; i < imagenes.length; i++) {
            if(imagenes[i]==1){
              imagenes[i]=5;
            }else{
              imagenes[i]--;
            }
          }
          j++;
        }
   $("#imagen1").html("<img src="+"./src/img"+imagenes[0]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen2").html("<img src="+"./src/img"+imagenes[1]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen3").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen4").html("<img src="+"./src/img"+imagenes[3]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen5").html("<img src="+"./src/img"+imagenes[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
    });
    $("#imagen2").click(function(){
      for (var i = 0; i < imagenes.length; i++) {
        if(imagenes[i]==1){
          imagenes[i]=5;
        }else{
          imagenes[i]--;
        }
      }
   $("#imagen1").html("<img src="+"./src/img"+imagenes[0]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen2").html("<img src="+"./src/img"+imagenes[1]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen3").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen4").html("<img src="+"./src/img"+imagenes[3]+".jpg"+" alt="+"Data not found"+">");
      $("#imagen5").html("<img src="+"./src/img"+imagenes[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"./src/img"+imagenes[2]+".jpg"+" alt="+"Data not found"+">");
    });