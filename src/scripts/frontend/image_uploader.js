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
      let column_id="column"+i;
      // var overlay=document.createElement('div');
      // overlay.setAttribute('class','overlays');

      var column=document.createElement("div");
      column.setAttribute('class','col-md-4');
      column.setAttribute('id',column_id);
      // var container=document.createElement("div");
      // container.setAttribute('class','img');
      // column.appendChild(container);

      // var delete_button=document.createElement('button');
      // var delete_button_id="delete"+i;
      // delete_button.setAttribute('type','button');
      // delete_button.setAttribute('class','btn');
      // delete_button.setAttribute('class','btn-danger');
      // delete_button.setAttribute('class','remove');
      // delete_button.setAttribute('id',delete_button_id);
      // overlay.appendChild(delete_button);

      var image_src=document.createElement('img');

      reader.onload = function (e) {
        image_src.setAttribute('src',e.target.result);
        var image_id="image"+i;
        image_src.setAttribute('id',image_id);
        column.appendChild(image_src);
        // column.appendChild(overlay);
        row.appendChild(column); 
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
    document.getElementById('file_size').innerHTML=size/1024+"KB";
    //console.log(file_array);
  });
}

export function remove_image_slider(length){
  $('#image_slider_file_uploader').val("");
  for(var i=0;i<length;i++){
    let column_id="#column"+i;
    $(column_id).remove();
  }

  document.getElementById('file_size').innerHTML="";
  // $('#image_slider_file_uploader').attr('src', '');
}
