
var Themes = (function () {
    var $container = '', accordion = '', upArrow = '', downArrow = ''; scrollContainer = '';    

    function init() {       
        $container = $('#accordionLite');
    }

    function bindEvents() {
        $(document).on('click', '.elementContainer .element', function () {
            if ($('.elementContainer .element').hasClass('active')) {
                $('.elementContainer .element').removeClass('active')
            }
            $('#accordionLiteDetailsWrapper > div').addClass('hide');
            var groupIdofParent = $(this).parent().data('id');
            var currentElementId = $(this).data('id');
            $(this).addClass('active');
            var idOfElementToShow = groupIdofParent + currentElementId;
            $('#' + idOfElementToShow + '').removeClass('hide');
            if (idOfElementToShow == 'group12') {
                $container.find('.options.easyAccordion').css('background-color', 'none');
                $container.find('.options.easyAccordion').addClass('gradientTheme');
                $container.find('.element').css('background-color', '#eaeef2');
            } else if (idOfElementToShow == 'group13') {
                setTheme({ 'radiusParent': '4px', 'radiusChild': '4px' });
            } else if (idOfElementToShow == 'group14') {
                $container.find('.options.easyAccordion').removeClass('gradientTheme');
                setTheme({ 'header': { 'backgroundcolor': '#1313a2', 'color': 'white' }, 'elements': { 'backgroundcolor': '#4180f3', 'color': '#363636' } });

            } else if (idOfElementToShow == 'group15') {
                $container.find('.options.easyAccordion').removeClass('gradientTheme');
                setTheme({ 'header': { 'backgroundcolor': '#4aa017', 'color': 'white' }, 'elements': { 'backgroundcolor': '#cbeb8e', 'color': '#363636' } });

            } else if (idOfElementToShow == 'group16') {
                $container.find('.options.easyAccordion').removeClass('gradientTheme');
                setTheme({ 'header': { 'backgroundcolor': '#696969', 'color': 'white' }, 'elements': { 'backgroundcolor': '#b6b6b6', 'color': '#363636' } });
            } else if (idOfElementToShow == 'group17') {
                $container.find('.options.easyAccordion').removeClass('gradientTheme');
                setTheme({ 'header': { 'backgroundcolor': '#4dd2db', 'color': 'white' }, 'elements': { 'backgroundcolor': '#eaeef2', 'color': '#363636' } });
                $container.find('.options.easyAccordion').css('border-radius', '0px');
                $container.find('.element').css('border-radius', '0px');
            }
        });

        $(document).on('click', '#jqAccordionTab', function () {
            $("#accordionLiteTab").removeClass('creditAccordionLiteSelected');
            $("#accordionLiteTab").addClass('creditAccordionLiteNotSelected');
            $("#tabAccordionLite").addClass('hide');
            $("#tabJqueryAccordion").removeClass('hide');
            $('#jqAccordionTab').removeClass('creditJqAccordionNotSelected');
            $('#jqAccordionTab').addClass('creditJqAccordionSelected');
        });

        $(document).on('click', '#accordionLiteTab', function () {
            $("#accordionLiteTab").removeClass('creditAccordionLiteNotSelected');
            $("#accordionLiteTab").addClass('creditAccordionLiteSelected ');
            $("#tabJqueryAccordion ").addClass('hide');
            $("#tabAccordionLite").removeClass('hide');
            $('#jqAccordionTab').removeClass('creditJqAccordionSelected');
            $('#jqAccordionTab').addClass('creditJqAccordionNotSelected ');

        });
    }

    function setTheme(theme) {
        $container.find('.options.easyAccordion').css('border-radius', theme.radiusParent);
        $container.find('.element').css('border-radius', theme.radiusChild);
        if (theme.header) {
            $container.find('.options').css({ 'background-color': theme.header.backgroundcolor, 'color': theme.header.color });
        } if (theme.elements) {
            $container.find('.element').css({ 'background-color': theme.elements.backgroundcolor, 'color': theme.elements.color });
        }
    }

    $(function () {
        init();
        bindEvents();
    });

    return {
       
    }
})();

