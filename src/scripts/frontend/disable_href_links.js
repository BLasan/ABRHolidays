export function disable_create_new_destination(index){
  alert(index)
  $(document).on('click','#drive_link',function(e){
    e.preventDefault();
  })
}

export function disable_package_image_uploader(){
  $(document).on('click','#package_image_uploader',function(e){
    e.preventDefault();
  })
}

export function disable_delete_news_feed(){
  $(document).on('click','#delete_news_feed',function(e){
    e.preventDefault();
  })
}

export function disable_delete_package(){
  $(document).on('click','#delete_package_data',function(e){
    e.preventDefault();
  })
}

export function disable_image_slider(){
  $(document).on('click','#image_slider',function(e){
    e.preventDefault();
  })
}

