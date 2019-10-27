export function package_image_uploader(){
    $('#package_image_file_uploader').click();

    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
  
        reader.onload = function (e) {
          $('#package_image').attr('src', e.target.result);
        };
  
        reader.readAsDataURL(input.files[0]);
      } else alert("Upload an image");
    }
  
    $("#package_image_file_uploader").change(function () {
      readURL(this);
    });
}

export function remove_package_image(){
    $('#package_image_file_uploader').val("");
    $('#package_image').attr('src', 'assets/img/image_uploader.png');
}