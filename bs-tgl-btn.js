function l(m) {
    console.log(m)
}
$('[data-toggle="toggle-btn"]').not('[readonly]').css('cursor', 'pointer').click(function(e) {
    /*
    if (!$(this).attr('toggled'))
        $(this).attr('toggled', true);
    else
        $(this).removeAttr('toggled');
    */
    toggle(this)
});
var tog=false;
function toggle(el) {
    l('************')
    l($(el))
    if($(el).length){
    var vals = classes = [],
        values = $(el).attr('data-values').split(':'),
        newValues = $(el).text() + ':' + $(el).attr('class');
    $(el).text(values[0])
        .attr('class', values[1])
        .attr('title', values[1])
        .attr('alt', values[1])
        .attr('data-values', newValues);
    l("$(el).attr('toggled'): "+ $(el).attr('toggled'))
    l("$($(el).attr('data-bind')).first().attr('toggled')): " + $($(el).attr('data-bind')).first().attr('toggled'))
    if (($(el).attr('toggled') ==   $($(el).attr('data-bind')).first().attr('toggled'))&& !tog) {
        //l('true')
        //l('el: ' + $(el))
        //l('first' + $($(el).attr('data-bind')).first())
        tog=true;
        toggleElAttr(el)
        toggleElAttr($($(el).attr('data-bind')).first());
        toggle($($(el).attr('data-bind')).first());
    }
    else{
        tog = false;
        l(false)
    }
}
}

function toggleElAttr(el) {
    if (!$(el).attr('toggled'))
        $(el).attr('toggled', true);
    else
        $(el).removeAttr('toggled');
}
