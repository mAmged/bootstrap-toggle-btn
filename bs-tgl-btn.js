
    $('[data-toggle="toggle-btn"]').not('[readonly]').css('cursor', 'pointer').click(function(e) {
        function toggle(el) {
            l($(el).attr('data-values'))
            var vals = classes = [],
                values = $(el).attr('data-values').split(':'),
                newValues = $(el).text() + ':' + $(el).attr('class');
            $(el).text(values[0])
                .attr('class', values[1])
                .attr('title', values[1])
                .attr('alt', values[1])
                .attr('data-values', newValues);
                l('*******************')
            toggle($($(el).attr('data-bind')).first());
        }
        toggle(this)
    });