export function disable_search_bar(){
    $('#search_bar').attr('disabled','disabled');
}

export function enable_search_bar(){
    $('#search_bar').removeAttr('disabled');
}