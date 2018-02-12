var images = [1,2,3,4,5];
    $("#right").click(function(){
      for (var i = 0; i < images.length; i++) {
        if(images[i]==15){
          images[i]=1;
        }else{
          images[i]++;
        }
      }
      $(".img1").html("<img src="+"pictures/img"+images[0]+".jpg"+" alt="+"Data not found"+">");
      $(".img2").html("<img src="+"pictures/img"+images[1]+".jpg"+" alt="+"Data not found"+">");
      $(".img3").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
      $(".img4").html("<img src="+"pictures/img"+images[3]+".jpg"+" alt="+"Data not found"+">");
      $(".img5").html("<img src="+"pictures/img"+images[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
    });

    $("#left").click(function(){
        for (var i = 0; i < images.length; i++) {
          if(images[i]==1){
            images[i]=15;
          }else{
            images[i]--;
          }
        }
      $(".img1").html("<img src="+"pictures/img"+images[0]+".jpg"+" alt="+"Data not found"+">");
      $(".img2").html("<img src="+"pictures/img"+images[1]+".jpg"+" alt="+"Data not found"+">");
      $(".img3").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
      $(".img4").html("<img src="+"pictures/img"+images[3]+".jpg"+" alt="+"Data not found"+">");
      $(".img5").html("<img src="+"pictures/img"+images[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
    });

    $(".img5").click(function(){
        var j = 0;
        while (j<2) {
          for (var i = 0; i < images.length; i++) {
            if(images[i]==15){
              images[i]=1;
            }else{
              images[i]++;
            }
          }
          j++;
        }
      $(".img1").html("<img src="+"pictures/img"+images[0]+".jpg"+" alt="+"Data not found"+">");
      $(".img2").html("<img src="+"pictures/img"+images[1]+".jpg"+" alt="+"Data not found"+">");
      $(".img3").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
      $(".img4").html("<img src="+"pictures/img"+images[3]+".jpg"+" alt="+"Data not found"+">");
      $(".img5").html("<img src="+"pictures/img"+images[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
    });
    $(".img4").click(function(){
          for (var i = 0; i < images.length; i++) {
            if(images[i]==15){
              images[i]=1;
            }else{
              images[i]++;
            }
          }
      $(".img1").html("<img src="+"pictures/img"+images[0]+".jpg"+" alt="+"Data not found"+">");
      $(".img2").html("<img src="+"pictures/img"+images[1]+".jpg"+" alt="+"Data not found"+">");
      $(".img3").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
      $(".img4").html("<img src="+"pictures/img"+images[3]+".jpg"+" alt="+"Data not found"+">");
      $(".img5").html("<img src="+"pictures/img"+images[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
    });
    $(".img1").click(function(){
        var j = 0;
        while (j<2) {
          for (var i = 0; i < images.length; i++) {
            if(images[i]==1){
              images[i]=15;
            }else{
              images[i]--;
            }
          }
          j++;
        }
   $(".img1").html("<img src="+"pictures/img"+images[0]+".jpg"+" alt="+"Data not found"+">");
      $(".img2").html("<img src="+"pictures/img"+images[1]+".jpg"+" alt="+"Data not found"+">");
      $(".img3").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
      $(".img4").html("<img src="+"pictures/img"+images[3]+".jpg"+" alt="+"Data not found"+">");
      $(".img5").html("<img src="+"pictures/img"+images[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
    });
    $(".img2").click(function(){
      for (var i = 0; i < images.length; i++) {
        if(images[i]==1){
          images[i]=15;
        }else{
          images[i]--;
        }
      }
   $(".img1").html("<img src="+"pictures/img"+images[0]+".jpg"+" alt="+"Data not found"+">");
      $(".img2").html("<img src="+"pictures/img"+images[1]+".jpg"+" alt="+"Data not found"+">");
      $(".img3").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
      $(".img4").html("<img src="+"pictures/img"+images[3]+".jpg"+" alt="+"Data not found"+">");
      $(".img5").html("<img src="+"pictures/img"+images[4]+".jpg"+" alt="+"Data not found"+">");
      $("#main").html("<img src="+"pictures/img"+images[2]+".jpg"+" alt="+"Data not found"+">");
    });