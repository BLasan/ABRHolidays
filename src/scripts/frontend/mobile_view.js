
export function adjust_mobile_view_about_us(){
    var scree_size=$(window).width();
    if(scree_size<900){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#row3').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:20px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:20px');
        $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:20px');
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
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row3').removeClass('row-center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:20px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:20px');
            $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:20px');
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
    if(scree_size<900){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        // $('#dest_title').removeClass('title-css');
        // $('#dest_title').attr('style','height:70px');
        // $('#dest_title').attr('style','background-color:lightblue');
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
    //    $('#dest_title').removeAttr('style');
    //    $('#dest_title').addClass('title-css');
    //    $('#row3').addClass('row-center');
       $('#row1').removeAttr('style'); 
       $('#row2').removeAttr('style'); 
    //    $('#row3').removeAttr('style'); 
    }
    $(window).resize(function(){
        if(this.innerWidth<900){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        // $('#dest_title').removeClass('title-css');
        // $('#dest_title').attr('style','height:70px');
        // $('#dest_title').attr('style','background-color:lightblue');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            // $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            // $('#dest_title').removeAttr('style');
            // $('#dest_title').addClass('title-css');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
        }
    })
}




export function adjust_mobile_view_testimonials(){
    var scree_size=$(window).width();
    if(scree_size<900){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#testimonial_carousal').removeClass('row-center');
        // $('#testimonial_carousal1').removeClass('row-center');
        $('#testimonial_carousal2').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
    }
    else{
       $('#row1').addClass('row-center');
       $('#row2').addClass('row-center');
       $('#row1').removeAttr('style'); 
       $('#row2').removeAttr('style'); 
       $('#testimonial_carousal').addClass('row-center');
    //    $('#testimonial_carousal1').removeClass('row-center');
       $('#testimonial_carousal2').addClass('row-center');
    //    $('#row3').removeAttr('style'); 
    }
    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#testimonial_carousal').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        // $('#testimonial_carousal1').removeClass('row-center');
        $('#testimonial_carousal2').removeClass('row-center');
            // $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
            $('#testimonial_carousal').addClass('row-center');
            // $('#testimonial_carousal1').removeClass('row-center');
            $('#testimonial_carousal2').addClass('row-center');
        }
    })
}

export function adjust_mobile_view_transfers(){
    var scree_size=$(window).width();
    if(scree_size<900){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#row3').removeClass('row-center');
        $('#row4').removeClass('row-center');
        $('#transfer_txt1').attr('style','text-align: justify;padding-right:20px;padding-left:20px;padding-top:40px;color:white');
        $('#transfer_txt2').attr('style','font-size:20px;text-align: justify;padding-right:20px;padding-left:20px;color:white');
        $('#transfers_title').attr('style','background-color:#3498db;margin-top:0;text-align:center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row4').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#enquiry').attr('style','margin:0 0;margin-left:-70px');
    }
    else if(scree_size>=900 && scree_size<=948){
        $('#row1').addClass('row-center');
        $('#row2').addClass('row-center');
        $('#row3').addClass('row-center');
        $('#row4').addClass('row-center');
        $('#transfer_txt1').attr('style','text-align: justify;padding-right:45px;padding-left:10px;padding-top:80px;color:white');
        $('#transfer_txt2').attr('style','font-size:20px;text-align: justify;padding-right:25px;color:white');
        $('#row1').removeAttr('style'); 
        $('#row2').removeAttr('style'); 
        $('#row3').removeAttr('style'); 
        $('#row4').removeAttr('style'); 
        $('#transfers_title').attr('style','background-color:#3498db;margin-top:0');
        $('#enquiry').attr('style','margin-top:30px;margin-left:-25px');
    }
    else{
       $('#row1').addClass('row-center');
       $('#row2').addClass('row-center');
       $('#row3').addClass('row-center');
       $('#row4').addClass('row-center');
       $('#transfer_txt1').attr('style','text-align: justify;padding-right:45px;padding-left:10px;padding-top:80px;color:white');
       $('#transfer_txt2').attr('style','font-size:20px;text-align: justify;padding-right:25px;color:white');
       $('#row1').removeAttr('style'); 
       $('#row2').removeAttr('style'); 
       $('#row3').removeAttr('style'); 
       $('#row4').removeAttr('style'); 
       $('#transfers_title').attr('style','background-color:#3498db;margin-top:0');
       $('#enquiry').attr('style','margin:30px 1px');
    //    $('#testimonial_carousal').addClass('row-center');
    //    $('#row3').removeAttr('style'); 
    }
    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row3').removeClass('row-center');
            $('#row4').removeClass('row-center');
            $('#transfer_txt1').attr('style','text-align: justify;padding-right:20px;padding-left:20px;padding-top:40px;color:white');
            $('#transfer_txt2').attr('style','font-size:20px;text-align: justify;padding-right:20px;padding-left:20px;color:white');
            $('#transfers_title').attr('style','background-color:#3498db;margin-top:0;text-align:center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row4').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#enquiry').attr('style','margin:0 0;margin-left:-70px');
        }
        else if(this.innerWidth>=900 && this.innerWidth<=948){
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row3').addClass('row-center');
            $('#row4').addClass('row-center');
            $('#transfer_txt1').attr('style','text-align: justify;padding-right:45px;padding-left:10px;padding-top:80px;color:white');
            $('#transfer_txt2').attr('style','font-size:20px;text-align: justify;padding-right:25px;color:white');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
            $('#row3').removeAttr('style'); 
            $('#row4').removeAttr('style'); 
            $('#transfers_title').attr('style','background-color:#3498db;margin-top:0');
            $('#enquiry').attr('style','margin-top:30px;margin-left:-25px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row3').addClass('row-center');
            $('#row4').addClass('row-center');
            $('#transfer_txt1').attr('style','text-align: justify;padding-right:45px;padding-left:10px;padding-top:80px;color:white');
            $('#transfer_txt2').attr('style','font-size:20px;text-align: justify;padding-right:25px;color:white');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
            $('#row3').removeAttr('style'); 
            $('#row4').removeAttr('style'); 
            $('#transfers_title').attr('style','background-color:#3498db;margin-top:0;');
            $('#enquiry').attr('style','margin:30px 1px');
        }
    })
}



export function adjust_mobile_view_contact_us(){
    var scree_size=$(window).width();
    if(scree_size<900){
        $('#row1').removeClass('row-center');
        $('#row2').removeClass('row-center');
        $('#row3').removeClass('row-center');
        $('#google_maps').removeClass('google-maps');
        $('#google_maps').attr('style','position:relative;padding-bottom:100%;height:0;overflow:hidden;margin-left:0;');
        // $('#gmap_canvas').addClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        // $('iframe').attr('width','500px');
        // $('iframe').attr('style','margin-left:-10px');
        $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
    }
    else{
       $('#row1').addClass('row-center');
       $('#row2').addClass('row-center');
       $('#row3').addClass('row-center');
       $('#gmap_canvas').addClass('gmap_canvas');
       $('#gmap_canvas').removeClass('row-center');
       $('#row1').removeAttr('style'); 
       $('#row2').removeAttr('style'); 
       $('#row3').removeAttr('style'); 
    }
    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row3').removeClass('row-center');
            // $('#gmap_canvas').removeClass('gmap_canvas');
            // $('#gmap_canvas').addClass('row-center');
            // $('iframe').attr('width:300px');
            $('#google_maps').removeClass('google-maps');
            $('#google_maps').attr('style','position:relative;padding-bottom:100%;height:0;overflow:hidden;margin-left:0;');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            // $('#row3').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row3').addClass('row-center');
            $('#gmap_canvas').addClass('gmap_canvas');
            $('#gmap_canvas').removeClass('row-center');
            $('iframe').attr('width:500px');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
            // $('#row3').removeAttr('style'); 
        }
    })
}


export function adjust_mobile_view_destinations_readmore(){
    var screen_size=$(window).width();
    if(screen_size<900){
        $('#row1').removeClass('row-center'); 
        $('#row2').removeClass('row-center');
        $('#title').attr('style','margin:auto;padding:10px 10px 5px 5px;color:white')
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
    }
    else{
        $('#row1').addClass('row-center'); 
        $('#row2').addClass('row-center');
        $('#row1').removeAttr('style'); 
        $('#row2').removeAttr('style'); 
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
        }
    })
}



export function adjust_mobile_view_enquiry(){
    var screen_size=$(window).width();
    if(screen_size<900){
        $('#row1').removeClass('row-center'); 
        $('#row2').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
    }
    else{
        $('#row1').addClass('row-center'); 
        $('#row2').addClass('row-center');
        $('#row1').removeAttr('style'); 
        $('#row2').removeAttr('style'); 
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row1').removeAttr('style'); 
            $('#row2').removeAttr('style'); 
        }
    })

}



export function adjust_mobile_view_faq(){
    var scree_size=$(window).width();
    if(scree_size<900){
       for(var i=1;i<=15;i++){
           var row_id="#row"+i;
           $(row_id).removeClass('row-center');
           $("#card-title").attr('style','background-color:green');
           $(row_id).attr('style','margin-left:0;margin-right:0;margin-top:5px');
        //    $("h5").removeClass('faq-height');
       }
    }
    else{
        for(var i=3;i<=15;i++){
            var row_id="#row"+i;
            $(row_id).addClass('row-center');
            $("#row1").addClass('row-center');
            $("#row2").addClass('row-center');
            $("#card-title").attr('style','background-color:green');
            $(row_id).removeAttr('style');
            // $("h5").addClass('faq-height');
        }
    }
    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            for(var i=1;i<=15;i++){
                var row_id="#row"+i;
                $(row_id).removeClass('row-center');
                $("#card-title").attr('style','background-color:green');
                $(row_id).attr('style','margin-left:0;margin-right:0;margin-top:10px');
                // $("h5").removeClass('faq-height');
            }
        }
        else{
            for(var i=3;i<=15;i++){
                var row_id="#row"+i;
                $("#row1").addClass('row-center');
                $("#row2").addClass('row-center');
                $(row_id).addClass('row-center');
                $("#card-title").attr('style','background-color:green')
                $(row_id).removeAttr('style');
                // $("h5").addClass('faq-height');
            }
        }
    })
}



export function adjust_mobile_view_home(){
    var scree_size=$(window).width();
    if(scree_size<766){
        $('#news_feed_card').removeAttr('style');
        // $('#news_feed_title').attr('style','margin-top:-3px;text-align:justify;margin-left:-20px');
        $('#news_feed_title1').attr('style','margin-top:-3px;text-align:justify;margin-left:15px');
        $('#news_feed_title').attr('style','margin-top:2px;text-align:justify;margin-left:15px');
        $('#news_feed-data').attr('style','margin-top:-15px;margin-left:15px');
        $('#news_feed-data1').attr('style','margin-top:-5px;margin-left:15px');
    }
    if((scree_size<766 || scree_size>=814) && scree_size<920){
      $('#news_containers').removeClass('news_container');
      $('#txt').removeClass('trans');
      $('#txt').attr('style','text-align:center');
      $('#news_containers').attr('style','margin-top:20px');
      $('#dis_btn').attr('style','margin-top:-18px;margin-left:-50px');
      $("#faq_btn").attr('style','margin-left:-45px');
      $("#transfer_btn").attr('style','margin-left:-45px');
      $("#testi_btn").attr('style','margin-left:-45px');
    //   $("#faq_row").removeAttr('style');
    //   $("#faq_row").attr('style','padding-left:296px;padding-right:0');
      $("#faq_body").attr('style','height:134px');
      $("#transfer_body").attr('style','height:134px');
    //   $("#transfer_row").removeAttr('style');
    //   $("#transfer_row").attr('style','padding-left:296px;padding-right:0');
    }
    else if(scree_size>766 && scree_size<814){
        $('#news_feed_card').attr('style','height:90px');
        // $('#news_feed_title').attr('style','text-align:justify;margin-left:-60px;margin-top:-5px');
        $('#news_feed_title1').attr('style','text-align:justify;margin-left:-60px;margin-top:-5px');
        $('#news_feed_title').attr('style','margin-top:-5px;text-align:justify;margin-left:-60px');
        $('#news_feed-data').attr('style','margin-top:-15px;margin-left:-60px;text-align:justify');
        $('#news_feed-data1').attr('style','text-align:justify;margin-left:-60px;margin-top:-15px');
        $('#news_containers').removeClass('news_container');
        $('#txt').removeClass('trans');
        $('#txt').attr('style','text-align:center');
        $('#news_containers').attr('style','margin-top:20px');
        $('#dis_btn').attr('style','margin-top:-18px;margin-left:-50px');
        $("#faq_btn").attr('style','margin-left:-45px');
        $("#transfer_btn").attr('style','margin-left:-45px');
        $("#testi_btn").attr('style','margin-left:-45px');
        $("#faq_body").attr('style','height:150px');
        $("#transfer_body").attr('style','height:150px');
    }
    else{
        $('#news_feed_card').attr('style','height:90px');
        // $('#news_feed_title').attr('style','text-align:justify;margin-left:-60px;margin-top:2px');
        $('#news_feed_title1').attr('style','text-align:justify;margin-left:-60px;margin-top:2px');
        $('#news_feed_title').attr('style','margin-top:2px;text-align:justify;margin-left:-60px');
        $('#news_feed-data').attr('style','margin-top:-15px;margin-left:-60px;text-align:justify');
        $('#news_feed-data1').attr('style','text-align:justify;margin-left:-60px;margin-top:-15px');
        $('#news_containers').addClass('news-container');
        $('#news_containers').removeAttr('style');
        $('#txt').addClass('trans');
        $('#txt').attr('style','padding-top:20px');
        $('#dis_btn').attr('style','margin-left:-15px;margin-top:-10px');
        // $("#faq_row").removeAttr('style');
        // $("#faq_row").attr('style','padding-left:275px;padding-right:0');
        $("#faq_body").attr('style','height:134px');
        $("#transfer_body").attr('style','height:134px');
        $("#faq_btn").attr('style','margin-left:-5px');
        $("#transfer_btn").attr('style','margin-left:-5px');
        $("#testi_btn").attr('style','margin-left:-5px');
        // $("#transfer_row").removeAttr('style');
        // $("#transfer_row").attr('style','padding-left:275px;padding-right:0');
    }
    $(window).resize(function(){
        if(this.innerWidth<766){
            $('#news_feed_card').removeAttr('style');
            // $('#news_feed_title').attr('style','margin-top:-3px;text-align:justify;margin-left:-20px');
            $('#news_feed_title1').attr('style','margin-top:-3px;text-align:justify;margin-left:15px');
            $('#news_feed-data1').attr('style','margin-top:-5px;margin-left:15px;text-align:justify');
            $('#news_feed_title').attr('style','margin-top:-3px;text-align:justify;margin-left:15px');
            $('#news_feed-data').attr('style','margin-top:-5px;margin-left:15px;text-align:justify');
        }
        if((this.innerWidth<766 || this.innerWidth>=814) && this.innerWidth<920){
          $('#news_containers').removeClass('news_container');
          $('#txt').removeClass('trans');
          $('#txt').attr('style','text-align:center');
          $('#news_containers').attr('style','margin-top:20px');
          $('#dis_btn').attr('style','margin-top:-18px;margin-left:-50px');
          $("#faq_btn").attr('style','margin-left:-45px');
          $("#transfer_btn").attr('style','margin-left:-45px');
          $("#testi_btn").attr('style','margin-left:-45px');
        //   $("#faq_row").removeAttr('style');
        //   $("#faq_row").attr('style','padding-left:296px;padding-right:0');
          $("#faq_body").attr('style','height:134px');
          $("#transfer_body").attr('style','height:134px');
        //   $("#transfer_row").removeAttr('style');
        //   $("#transfer_row").attr('style','padding-left:296px;padding-right:0');
        }
        else if(this.innerWidth>766 && this.innerWidth<814){
            $('#news_feed_card').attr('style','height:90px');
            // $('#news_feed_title').attr('style','text-align:justify;margin-left:-60px;margin-top:-5px');
            $('#news_feed_title1').attr('style','text-align:justify;margin-left:-60px;margin-top:-5px');
            $('#news_feed_title').attr('style','margin-top:-5px;text-align:justify;margin-left:-60px');
            $('#news_feed-data').attr('style','margin-top:-15px;margin-left:-60px;text-align:justify');
            $('#news_feed-data1').attr('style','text-align:justify;margin-left:-60px;margin-top:-15px');
            $('#news_containers').removeClass('news_container');
            $('#txt').removeClass('trans');
            $('#txt').attr('style','text-align:center');
            $('#news_containers').attr('style','margin-top:20px');
            $('#dis_btn').attr('style','margin-top:-18px;margin-left:-50px');
            $("#faq_btn").attr('style','margin-left:-45px');
            $("#transfer_btn").attr('style','margin-left:-45px');
            $("#testi_btn").attr('style','margin-left:-45px');
            $("#faq_body").attr('style','height:150px');
            $("#transfer_body").attr('style','height:150px');
        }
        else{
            $('#news_feed_card').attr('style','height:90px');
            // $('#news_feed_title').attr('style','text-align:justify;margin-left:-60px;margin-top:2px');
            $('#news_feed_title1').attr('style','text-align:justify;margin-left:-60px;margin-top:2px');
            $('#news_feed_title').attr('style','margin-top:2px;text-align:justify;margin-left:-60px');
            $('#news_feed-data').attr('style','margin-top:-15px;margin-left:-60px;text-align:justify');
            $('#news_feed-data1').attr('style','text-align:justify;margin-left:-60px;margin-top:-15px');
            $('#news_containers').addClass('news-container');
            $('#news_containers').removeAttr('style');
            $('#txt').addClass('trans');
            $('#txt').attr('style','padding-top:20px');
            $('#dis_btn').attr('style','margin-left:-15px;margin-top:-10px');
            // $("#faq_row").removeAttr('style');
            // $("#faq_row").attr('style','padding-left:275px;padding-right:0');
            $("#faq_body").attr('style','height:134px');
            $("#transfer_body").attr('style','height:134px');
            $("#faq_btn").attr('style','margin-left:-5px');
            $("#transfer_btn").attr('style','margin-left:-5px');
            $("#testi_btn").attr('style','margin-left:-5px');
            // $("#transfer_row").removeAttr('style');
            // $("#transfer_row").attr('style','padding-left:275px;padding-right:0');
        }
    })
}


export function adjust_mobile_view_inbound_packages(){
    var screen_size=$(window).width();
    if(screen_size<900){
        $('#row1').removeClass('row-center'); 
        $('#row2').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#enq').attr('style','margin-left:-50px');
    }
    else{
        $('#row1').addClass('row-center'); 
        $('#row2').addClass('row-center');
        $('#row1').attr('style','margin-top:20px'); 
        $('#row2').attr('style','margin-top:20px'); 
        $('#enq').attr('style','margin-left:50px');
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#enq').attr('style','margin-left:-50px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row1').attr('style','margin-top:20px'); 
            $('#row2').attr('style','margin-top:20px');
            $('#enq').attr('style','margin-left:50px'); 
        }
    })
}


export function adjust_mobile_view_inbound_package_category(){
    var screen_size=$(window).width();
    if(screen_size<900){
        $('#row1').removeClass('row-center'); 
        $('#row2').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#pkg_loader').attr('style','padding-left:0px');
        $('#image_pkg').removeClass('img_class');
        $('#image_col').attr('style','padding-left:0px');
        $('#category').attr('style','margin-top:50px;width:20rem');
    }
    else{
        $('#row1').addClass('row-center'); 
        $('#row2').addClass('row-center');
        $('#row1').attr('style','margin-top:20px'); 
        $('#row2').attr('style','margin-top:20px');
        $('#category').attr('style','width:20rem'); 
        $('#image_pkg').addClass('img_class');
        $('#image_col').removeAttr('style');
        $('#pkg_loader').attr('style','padding-left:120px');
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#category').attr('style','margin-top:50px;width:20rem');
            $('#pkg_loader').attr('style','padding-left:0px');
            $('#image_pkg').removeClass('img_class');
            $('#image_col').attr('style','padding-left:0px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row1').attr('style','margin-top:20px'); 
            $('#row2').attr('style','margin-top:20px'); 
            $('#category').attr('style','width:20rem'); 
            $('#pkg_loader').attr('style','padding-left:120px');
            $('#image_pkg').addClass('img_class');
            $('#image_col').removeAttr('style');
        }
    })
}


export function adjust_mobile_view_visaHandling(){
    var screen_size=$(window).width();
    if(screen_size<900){
        $('#row1').removeClass('row-center'); 
        $('#row2').removeClass('row-center');
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        
    }
    else{
        $('#row1').addClass('row-center'); 
        $('#row2').addClass('row-center');
        $('#row1').attr('style','margin-top:20px'); 
        $('#row2').attr('style','margin-top:20px'); 
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row2').removeClass('row-center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
            $('#row2').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row2').addClass('row-center');
            $('#row1').attr('style','margin-top:20px'); 
            $('#row2').attr('style','margin-top:20px'); 
        }
    })
}



export function adjust_mobile_view_ticketing(){
    var screen_size=$(window).width();
    if(screen_size<900){
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
        $('#row1').attr('style','margin-top:20px'); 
        $('#row2').attr('style','margin-top:20px'); 
        $('#row3').attr('style','margin-top:20px'); 
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
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
            $('#row1').attr('style','margin-top:20px'); 
            $('#row2').attr('style','margin-top:20px'); 
            $('#row3').attr('style','margin-top:20px'); 
        }
    })
}


export function adjust_mobile_view_insurance(){
    var screen_size=$(window).width();
    if(screen_size<900){
        $('#row1').removeClass('row-center'); 
        $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
    }
    else{
        $('#row1').addClass('row-center'); 
        $('#row1').attr('style','margin-top:20px'); 
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
            $('#row1').removeClass('row-center');
            $('#row1').attr('style','margin-left:0;margin-right:0;margin-top:10px');
        }
        else{
            $('#row1').addClass('row-center');
            $('#row1').attr('style','margin-top:20px'); 
        }
    })
}


export function adjust_mobile_view_discoverWorld(){
    var screen_size=$(window).width();
    if(window.navigator.userAgent.indexOf("Firefox")>0){
        document.getElementById('ticketing').innerHTML="ABR Tours will handle all your airline reservations and ticketing.......";
    }
    if(screen_size<900){
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
        $('#row1').attr('style','margin-top:20px'); 
        $('#row2').attr('style','margin-top:20px'); 
        $('#row3').attr('style','margin-top:20px'); 
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if(this.innerWidth<900){
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
            $('#row1').attr('style','margin-top:20px'); 
            $('#row2').attr('style','margin-top:20px'); 
            $('#row3').attr('style','margin-top:20px'); 
        }
    })
}


export function adjust_mobile_view_add_pkgBtn(){
    var screen_size=$(window).width();
    if((screen_size<766 || screen_size>=1178) && screen_size<1200){
        // $('#add_pkgBtn').removeClass('add-more');
        $('#add_pkgBtn').attr('style','margin-left:120px');
        $('#add_destBtn').attr('style','margin-left:180px');
    }
    else if(screen_size>766 && screen_size<1178){

        $('#add_destBtn').attr('style','margin-left:40px');
    }
    else{
        $('#add_pkgBtn').removeAttr('style');
        // $('#add_pkgBtn').addClass('add-more');
        $('#add_destBtn').attr('style','margin-left:180px');
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if((this.innerWidth<756 || this.innerWidth>=1178) && this.innerWidth<1200){
            // $('#add_pkgBtn').removeClass('add-more');
            $('#add_pkgBtn').attr('style','margin-left:120px');
            $('#add_destBtn').attr('style','margin-left:180px');
        }
        else if(this.innerWidth>756 && this.innerWidth<1178){
            $('#add_destBtn').attr('style','margin-left:40px');
        }
        else{
            $('#add_pkgBtn').removeAttr('style');
            // $('#add_pkgBtn').addClass('add-more');
            $('#add_destBtn').attr('style','margin-left:180px');
        }
    });
}

export function adjust_mobile_view_tours(){
    var screen_size=$(window).width();
    if((screen_size<766 || screen_size>=1178) && screen_size<1200){
        $('#row1').removeClass('row-center');
        $('#row1').attr('style','margin-left:5px;margin-right:5px');
        $('#row2').removeClass('row-center');
        $('#row2').attr('style','margin-left:5px;margin-right:5px;margin-top:5px');
        for(var i=1;i<=8;i++){
            var id="#body"+i;
            $(id).removeAttr('style');
        }
    }
    else if(screen_size>766 && screen_size<1178){
        $('#row1').addClass('row-center');
        $('#row1').removeAttr('style');
        $('#row2').addClass('row-center');
        $('#row2').removeAttr('style');
        for(var i=1;i<=8;i++){
            var id="#body"+i;
            $(id).attr('style','height:50px');
        }
    }
    else{
        $('#row1').addClass('row-center');
        $('#row1').removeAttr('style');
        $('#row2').addClass('row-center');
        $('#row2').removeAttr('style');
        for(var i=1;i<=8;i++){
            var id="#body"+i;
            $(id).attr('style','height:50px');
        }
    }

    $(window).resize(function(){
        // this.alert(this.innerWidth)
        if((this.innerWidth<756 || this.innerWidth>=1178) && this.innerWidth<1200){
            $('#row1').removeClass('row-center');
            $('#row1').attr('style','margin-left:5px;margin-right:5px');
            $('#row2').removeClass('row-center');
            $('#row2').attr('style','margin-left:5px;margin-right:5px;margin-top:5px');
            for(var i=1;i<=8;i++){
                var id="#body"+i;
                $(id).removeAttr('style');
            }
        }
        else if(this.innerWidth>756 && this.innerWidth<1178){
            $('#row1').addClass('row-center');
            $('#row1').removeAttr('style');
            $('#row2').addClass('row-center');
            $('#row2').removeAttr('style');
            for(var i=1;i<=8;i++){
                var id="#body"+i;
                $(id).attr('style','height:50px');
            }
        }
        else{
            $('#row1').addClass('row-center');
            $('#row1').removeAttr('style');
            $('#row2').addClass('row-center');
            $('#row2').removeAttr('style');
            for(var i=1;i<=8;i++){
                var id="#body"+i;
                $(id).attr('style','height:50px');
            }
        }
    });
}


