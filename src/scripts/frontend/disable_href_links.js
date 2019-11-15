export function disable_create_new_destination(index){
 // alert(index)
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

export function disable_edit_news_feed(){
  $(document).on('click','#edit_news_feed',function(e){
    e.preventDefault();
  })
}

export function disable_notification_dropdown(){
  $(document).on('click','#dropdownBasic1',function(e){
    e.preventDefault();
  })
}

export function disable_user_profile_dropdown(){
  $(document).on('click','#dropdownBasic2',function(e){
    e.preventDefault();
  })

  // $(document).on('click','#signout',function(e){
  //   e.preventDefault();
  // })

  // $(document).on('click','#user_profile',function(e){
  //   e.preventDefault();
  // })
}

export function disable_view_notification(){
  $(document).on('click','#view_message',function(e){
    e.preventDefault();
  })

}

export function disable_search_text(){
  $(document).on('click','#search_text',function(e){
    e.preventDefault();
  })
}


  export function disable_dropdowns(){
   for(var i=1;i<=14;i++){
    var _id="#ref"+i;
    $(document).on('click',_id,function(e){
      e.preventDefault();
    })
   }
  }



