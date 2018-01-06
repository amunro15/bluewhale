$(document).ready(function(){

//DIET BUTTON//
  $(".leftmenu .diet").on("click",function(){
    $(".bigcontainer img").hide();
    $(".video-fly").hide();
    $(".video-song").hide();
    $(".size").removeClass("live").hide();

    if($(".information .breach").hasClass("live")){
      $(".information .breach").removeClass("live").hide();
      $(".breachbutton").removeClass("live").hide();
    }
    if($(".information .baby").hasClass("live")){
      $(".information .baby").removeClass("live").hide();
      $(".babypng").removeClass("live").hide();
    }
    if($(".information .speaker").hasClass("live")){
      $(".information .speaker").removeClass("live").hide();
      $(".speaker-small").removeClass("live").hide();
    }
if($(".information .diet").hasClass("live")){
      console.log("hi");
      $(".information .diet").removeClass("live");
      $(".plankton").removeClass("live");
    }
    // $(".information section").hide();
    $(".information .diet").toggle().toggleClass("live");
    $(".plankton").toggle().addClass("animate-flicker").toggleClass("live");
  });

//BREACH BUTTON//
  $(".leftmenu .breach").on("click",function(){
    $(".bigcontainer img").hide();
    $(".video-song").hide();
    $(".size").removeClass("live").hide();

    if($(".information .diet").hasClass("live")){
      $(".information .diet").removeClass("live").hide();
      $(".plankton").removeClass("live").hide();
    }
    if($(".information .baby").hasClass("live")){
      $(".information .baby").removeClass("live").hide();
      $(".babypng").removeClass("live").hide();
    }
    if($(".information .speaker").hasClass("live")){
      $(".information .speaker").removeClass("live").hide();
      $(".speaker-small").removeClass("live").hide();
    }

    if($(".information .breach").hasClass("live")){
      console.log("hi");
      $(".information .breach").removeClass("live");
      $(".breachbutton").removeClass("live");
    }
    $(".information .breach").toggle().toggleClass("live");
    $(".breachbutton").toggle().addClass("animate-bounce").toggleClass("live");
    $(".video-fly").hide();
  });

  $(".breachbutton").on("click",function(){
    $(".video-fly").toggle().toggleClass("open");
  });

//BABY BUTTON//
  $(".leftmenu .baby").on("click",function(){
    $(".bigcontainer img").hide();
    $(".video-fly").hide();
    $(".video-song").hide();
    $(".size").removeClass("live").hide();

    if($(".information .diet").hasClass("live")){
      $(".information .diet").removeClass("live").hide();
      $(".plankton").removeClass("live").hide();
    }
    if($(".information .breach").hasClass("live")){
      $(".information .breach").removeClass("live").hide();
      $(".breachbutton").removeClass("live").hide();
    }
    if($(".information .speaker").hasClass("live")){
      $(".information .speaker").removeClass("live").hide();
      $(".speaker-small").removeClass("live").hide();
    }

    if($(".information .baby").hasClass("live")){
      console.log("hi");
      $(".information .baby").removeClass("live");
      $(".babypng").removeClass("live");
    }
    $(".information .baby").toggle().toggleClass("live");
    $(".babypng").fadeToggle().addClass("animate-baby").toggleClass("live");
  });

//SPEAKER BUTTON//
  $(".leftmenu .speaker").on("click",function(){
    $(".bigcontainer img").hide();
    $(".video-fly").hide();
    $(".size").removeClass("live").hide();

    if($(".information .diet").hasClass("live")){
      $(".information .diet").removeClass("live").hide();
      $(".plankton").removeClass("live").hide();
    }
    if($(".information .breach").hasClass("live")){
      $(".information .breach").removeClass("live").hide();
      $(".breachbutton").removeClass("live").hide();
    }
    if($(".information .baby").hasClass("live")){
      $(".information .baby").removeClass("live").hide();
      $(".babypng").removeClass("live").hide();
    }

    if($(".information .speaker").hasClass("live")){
      console.log("hi");
      $(".information .speaker").removeClass("live");
      $(".speaker-small").removeClass("live");
    }

    $(".information .speaker").toggle().toggleClass("live");
    $(".speaker-small").toggle().addClass("animate-rotate").toggleClass("live");
    $(".video-song").hide();
  });

  $(".speaker-small").on("click",function(){
    $(".video-song").toggle().toggleClass("open");
  });


var currentlyOpen;

$(".lastmenu img").on("click",function(){
  $(".video-fly").hide();
  $(".video-song").hide();
  if($(".information section").hasClass("live")){
    $(".information section").removeClass("live").hide();
    $(".plankton").removeClass("live").hide();
    $(".breachbutton").removeClass("live").hide();
    $(".babypng").removeClass("live").hide();
    $(".speaker-small").removeClass("live").hide();
  }
  $(".size").addClass("live").show();
  var extractClass = $(this).attr('class');//get the attribute called class
  var toShow = $(".bigcontainer").find("."+extractClass);
  $(".bigcontainer img").hide();
  if(currentlyOpen !== extractClass){ //it WILL be unequal whenever extractClass isn't defined, then currentlyOpen will be defined second,third etc time through
    $(toShow).show();
  }else{
    $(toShow).hide();
  }

  currentlyOpen = extractClass;
  });
});
