export function show_hide(id){
    var _id="#"+id;
    $(_id).removeAttr('style');
    for(var i=1;i<=14;i++){
        var _other="#card"+i;
        if(_other!==_id){
            $(_other).attr('style','display:none');
        }
    }
}