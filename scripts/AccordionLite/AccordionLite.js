
var AccordionLite = (function () {
    var $container = '', accordion = '', upArrow = '', downArrow = ''; scrollContainer = '';

    function init(data) {
        var $accordion = accordionLiteCreator(data);
        $container = $('#accordionLite');
        $container.html($accordion);
        normalAccordionStarter();
    }

    function normalAccordionStarter() {
        $container = $('#accordionLite');
        $container.children('.elementContainer').not('.elementContainer:first').addClass('hide');
        $container.find('.easyAccordion:first > span.images').css('background', "url(" + upArrow + ")center center no-repeat");
        $container.children('.easyAccordion').not('.easyAccordion:first').children('span.images').css('background', "url(" + downArrow + ")center center no-repeat");
        $container.find('.elementContainer .element:first').addClass('active')
    }

    function bindEvents() {
        $(document).on('click', ".easyAccordion", function () {
            var accordionTexts = [], exceptCurrentTabTexts = [], exceptTabs = []; $tab = '', $selectedTabtext = '', accordionText = '';
            $(".easyAccordion").each(function (i) {
                accordionTexts.push($(".easyAccordion").children('div.headerElement')[i].innerHTML.trim());
            });

            $tab = $(this).next();
            $selectedTabtext = $(this).children('div.headerElement')[0].innerHTML.trim();

            $.grep(accordionTexts, function (accordionText, i) {
                if (accordionText.toLowerCase() != $selectedTabtext.toLowerCase()) {
                    exceptCurrentTabTexts.push(accordionText);
                }
            });

            $(".easyAccordion").each(function (i) {
                var currentHeaderName = $(".easyAccordion").find('div.headerElement')[i].innerHTML.trim();
                var valueExists = $.inArray(currentHeaderName, exceptCurrentTabTexts);
                if (valueExists != -1) {
                    exceptTabs.push($(this).next());
                }
            });

            $tab.slideDown("slow", function () { });            
            $tab.removeClass('hide');
            for (var i = 0; i < exceptTabs.length; i++) {
                exceptTabs[i].slideUp("slow", function () { });
                $container.find('span.images').css("background", "url(" + downArrow + ") center center no-repeat");
            }
            $(this).children('span.images').css("background", "url(" + upArrow + ") center center no-repeat");   
            if (scrollContainer != '') {
                $container.find('.elementContainer').css('overflow-y', scrollContainer);
            }
        });

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
        });
    }

    function accordionLiteCreator(data) {
        if (data.length != 0) {
            for (var i = 0; i < data.length; i++) {
                accordion = accordion + accordionHeaderTemplate(data[i].HeaderName) + '<div class="elementContainer" data-id="group' + i + '">';
                if (data[i].Elements.length != 0) {
                    for (var j = 0; j < data[i].Elements.length; j++) {
                        accordion = accordion + accordionChildElements(data[i].Elements[j], j + 1);
                    }
                }
                accordion = accordion + '</div>';
            }
        }
        return $(accordion);
    }

    function accordionHeaderTemplate(header) {
        var templateAccordion = [
            '<div class="options easyAccordion">',
			'<div class="headerElement">{{ header }}</div>',
            '<span class="images"></span>',
            '</div>'
        ].join('');

        templateAccordion = templateAccordion.replace('{{ header }}', header);
        return templateAccordion;
    }

    function accordionChildElements(element, position) {
        var accordionElement = '';
        var accordionElements = [
               '<div class="element" data-id=' + position + '>{{ element }}</div>',
        ].join('');

        accordionElement = accordionElements.replace('{{ element }}', element);
        return accordionElement;
    }

    function setArrow(images) {
        $images = $(images);
        downArrow = $images.prop('downArrow');
        upArrow = $images.prop('upArrow');
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

    function setHeight(height) {
        if ($(height).prop('overflow-y') != '') {
            scrollContainer = $(height).prop('overflow-y');
            $container.find('.elementContainer').css({ 'height': $(height).prop('height'), 'overflow-y': scrollContainer });
        } else {
            $container.find('.elementContainer').css('height', $(height).prop('height'));
        }
    }

    $(function () {
        bindEvents();
    });

    return {
        setHeight: function (height, scroll) {
            setHeight(height, scroll);
        },
        setTheme: function (color) {
            setTheme(color);
        },
        setArrow: function (images) {
            setArrow(images);
        },
        accordion: function (data) {
            init(data);
        },
        normalAccordion: function () {
            normalAccordionStarter();
        }
    }
})();



