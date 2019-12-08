
export function adjust_mobile_view_about_us(){
    var scree_size=$(window).width();
    if(scree_size<720){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#row3').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
    //    $('#title-container').removeClass('title-container');
    //    $('#title-container').attr('style','height:auto');
    //    $('#title-container').attr('style','background-color:lightblue');
    }
    else{
       $('#row1').addClass('row-center');
       $('#row2').addClass('row-center');
       $('#row3').addClass('row-center');
       $('#row1').removeAttr('style'); 
       $('#row2').removeAttr('style'); 
       $('#row3').removeAttr('style'); 
    }
    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<720){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row3').removeClass('row-center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row3').addClass('row-center');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
            $('#row3').removeAttr('style'); 
        }
    })
}



export function adjust_mobile_view_destination(){
    var scree_size=$(window).width();
    if(scree_size<720){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#dest_title').removeClass('title-css');
        $('#dest_title').attr('style','height:70px');
        $('#dest_title').attr('style','background-color:lightblue');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        // $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
    //    $('#title-container').removeClass('title-container');
    //    $('#title-container').attr('style','height:auto');
    //    $('#title-container').attr('style','background-color:lightblue');
    }
    else{
       $('#row1').addClass('row-center');
       $('#row2').addClass('row-center');
       $('#dest_title').removeAttr('style');
       $('#dest_title').addClass('title-css');
    //    $('#row3').addClass('row-center');
       $('#row1').removeAttr('style'); 
       $('#row2').removeAttr('style'); 
    //    $('#row3').removeAttr('style'); 
    }
    $(window).resize(function(){
        if(this.innerWidth<720){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#dest_title').removeClass('title-css');
        $('#dest_title').attr('style','height:70px');
        $('#dest_title').attr('style','background-color:lightblue');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            // $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#dest_title').removeAttr('style');
            $('#dest_title').addClass('title-css');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
        }
    })
}




export function adjust_mobile_view_testimonials(){
    var scree_size=$(window).width();
    if(scree_size<720){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#testimonial_carousal').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
     
    }
    else{
       $('#row1').addClass('row-center');
       $('#row2').addClass('row-center');
       $('#row1').removeAttr('style'); 
       $('#row2').removeAttr('style'); 
       $('#testimonial_carousal').addClass('row-center');
    //    $('#row3').removeAttr('style'); 
    }
    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<720){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#testimonial_carousal').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            // $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
            $('#testimonial_carousal').addClass('row-center');
        }
    })
}




export function adjust_mobile_view_faq(){
    var scree_size=$(window).width();
    if(scree_size<720){
       for(var i=1;i<=15;i++){
           var row_id="#row"+i;
           $(row_id).removeClass('row-center');
           $("#card-title").attr('style','height:80px;background-color:green');
           $(row_id).attr('style','margin-left:0;margin-right:0;margin-top:5px');
           $("h5").removeClass('faq-height');
       }
    }
    else{
        for(var i=3;i<=15;i++){
            var row_id="#row"+i;
            $(row_id).addClass('row-center');
            $("#row1").addClass('row-center');
            $("#row2").addClass('row-center');
            $("#card-title").attr('style','height:65px;background-color:green');
            $(row_id).removeAttr('style');
            $("h5").addClass('faq-height');
        }
    }
    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<720){
            for(var i=1;i<=15;i++){
                var row_id="#row"+i;
                $(row_id).removeClass('row-center');
                $("#card-title").attr('style','height:80px;background-color:green');
                $(row_id).attr('style','margin-left:0;margin-right:0;margin-top:10px');
                $("h5").removeClass('faq-height');
            }
        }
        else{
            for(var i=3;i<=15;i++){
                var row_id="#row"+i;
                $("#row1").addClass('row-center');
                $("#row2").addClass('row-center');
                $(row_id).addClass('row-center');
                $("#card-title").attr('style','height:65px;background-color:green')
                $(row_id).removeAttr('style');
                $("h5").addClass('faq-height');
            }
        }
    })
}



export function adjust_mobile_view_home(){
    var scree_size=$(window).width();
    if(scree_size<720){
      $('#news_containers').removeClass('news_container');
      $('#news_containers').attr('style','margin-top:20px');

    //   $("#faq_row").removeAttr('style');
    //   $("#faq_row").attr('style','padding-left:296px;padding-right:0');
      $("#faq_body").removeAttr('style');
      $("#faq_body").attr('style','height:107px');

    //   $("#transfer_row").removeAttr('style');
    //   $("#transfer_row").attr('style','padding-left:296px;padding-right:0');
    }
    else{
        $('#news_containers').addClass('news-container');
        $('#news_containers').removeAttr('style');

        // $("#faq_row").removeAttr('style');
        // $("#faq_row").attr('style','padding-left:275px;padding-right:0');
        $("#faq_body").removeAttr('style');
        $("#faq_body").attr('style','height:134px');
  
        // $("#transfer_row").removeAttr('style');
        // $("#transfer_row").attr('style','padding-left:275px;padding-right:0');
    }
    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<720){
            // $("#faq_row").removeAttr('style');
            // $("#faq_row").attr('style','padding-left:296px;padding-right:0');
            $("#faq_body").removeAttr('style');
            $("#faq_body").attr('style','height:107px');
            // $("#transfer_row").removeAttr('style');
            // $("#transfer_row").attr('style','padding-left:296px;padding-right:0');
        }
        else{
            // $("#faq_row").removeAttr('style');
            // $("#faq_row").attr('style','padding-left:275px;padding-right:0');
            $("#faq_body").removeAttr('style');
            $("#faq_body").attr('style','height:134px');
            // $("#transfer_row").removeAttr('style');
            // $("#transfer_row").attr('style','padding-left:275px;padding-right:0');
        }
    })
}


