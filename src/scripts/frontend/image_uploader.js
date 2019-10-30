export var file_array=[];

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


export function image_slider_uploader(){
  var size=0;
  $('#image_slider_file_uploader').click();
  var row=document.getElementById('image_slider_content');

  function readURL(input,i) {
    if (input.files || input.files[i]) {
      size+=input.files[0].size;
      var reader = new FileReader();
      var column=document.createElement("div");
      column.setAttribute('class','col-md-4');
      row.appendChild(column);
      var image_src=document.createElement('img');

      reader.onload = function (e) {
        image_src.setAttribute('src',e.target.result);
        var image_id="image"+i;
        image_src.setAttribute('id',image_id);
        column.appendChild(image_src);
      };
  
      reader.readAsDataURL(input.files[i]); 

        // $('#image_slider_pic').attr('src', e.target.result);
  
    } else alert("Upload an image");
  }

  $("#image_slider_file_uploader").change(function () {
    localStorage.setItem('file_size',this.files.length);
    file_array=this.files;
    for(var i=0;i<this.files.length;i++){
      readURL(this,i);
    }
    document.getElementById('file_size').innerHTML=size+" bytes";
    console.log(file_array);
  });
}