export function modal() {
  // Get started!

  $(".mosaicbutton").click(function() {
    var title = $(this).data("info");
    $("#mosaiciframe").load(title);
  });

  $("#closemodal").click(function() {
    $("#mosaicmodal").modal("hide");
  });

  $(document).on('click', '.videomodal', function(){
    console.log('test');
    var src =
      "https://www.youtube-nocookie.com/embed/UtydKj0Gz74?autoplay=1&showinfo=0&controls=0&rel=0&modestbranding=1";
    $("#videomodal").modal("show");
    $("#videomodal iframe").attr("src", src);
  });


  $(document).on('click', '.closevideo', function(){
    $("#videomodal iframe").removeAttr("src");
        $("#videomodal").modal("hide");

  });

}

export default modal;
