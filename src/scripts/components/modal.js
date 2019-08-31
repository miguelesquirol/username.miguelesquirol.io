export function modal() {
  // Get started!

  $(".mosaicbutton").click(function() {
    var title = $(this).data("info");

    $("#mosaiciframe").attr("src", title);
  });

  $("#closemodal").click(function() {
    console.log("test")

    $("#mosaicmodal").modal("hide");

  });


    $('.videomodal').click(function () {
        var src = 'https://www.youtube-nocookie.com/embed/UtydKj0Gz74?autoplay=1&showinfo=0&controls=0&rel=0&modestbranding=1';
        $('#videomodal').modal('show');
        $('#videomodal iframe').attr('src', src);
    });

    $('#videomodal button').click(function () {
        $('#videomodal iframe').removeAttr('src');
    });


}

export default modal;
