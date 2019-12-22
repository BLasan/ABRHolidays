export function click_carousal_button(){
    $('#carousal_home')[0].click();
}

export function lazy_load(){
    $(document).ready(function() {     
        $('#carouselExampleControls_home').on('slid', function() {
            var $nextImage = $('.active.item', this).next('.item').find('img');
            $nextImage.attr('src', $nextImage.data('data-lazy-load-src'));
        });
    });
}
