/*
 ====================================================================
 Plugin jQuery - Simple Toolbar v.0.1.0
 ====================================================================
 */

(function ($) {

    $.fn.toolBar = function (options) {

        var TOGGLE_ALL = "all";
        var TOGGLE_OPT = "opt";

        var toolbar = $(this);
        var lastOptionSelected;

        var baseTemplate = '';
        baseTemplate += '<ul class="toolbar-menu">';
        baseTemplate += '   <li class="toolbar-item active"><a data-toggle="all">All</a></li>';
        baseTemplate += '</ul>';

        var optionTemplate = '';
        optionTemplate += '<li class="toolbar-item"><a data-toggle="opt"></a></li>';

        var settings = $.extend({
            nimShowOption: 3,
            defaultOption: ['Opt 1', 'Opt 2', 'Opt 3'],
            baseTemplate: baseTemplate,
            optionTemplate: optionTemplate,
            progressBarId: 'progress-bar',
            selectedCallback: undefined
        }, options);

        var init = function () {
            // creating toolbar menu
            toolbar.append(settings.baseTemplate);

            // creating toolbar Options
            createOptions();

            // adding Click event
            toolbar.find('.toolbar-item a').on("click", onOptionSelected);
        }

        var createOptions = function () {
            // Looking for Hash Url Options, its have priority over setting configuration
            var options = settings.defaultOption;
            var hashUrl = window.location.hash;
            if (hashUrl) {
                var hashOptions = hashUrl.substring(1).split("|");
                if (hashOptions.length >= 1) {
                    options = hashOptions;
                }
            }

            // creating minimum default opcion, if we haven't enough options box will be empty
            var auxTemplate = "";
            var optionName = "";

            if (options.length > 0) {

                // if have more defaultOptions than minimum, create dynamically this options
                var totalOptions = settings.nimShowOption;
                if (totalOptions < options.length) {
                    totalOptions = options.length;
                }

                for (var i = 0; i < totalOptions; i++) {
                    auxTemplate = $(settings.optionTemplate).clone();

                    optionName = options[i];
                    if (optionName != undefined && options[i] != "") {
                        auxTemplate.find('a').text(options[i]);
                    } else {
                        auxTemplate.find('a').remove();
                    }

                    toolbar.find('.toolbar-menu').append(auxTemplate);
                }
            }
        }

        var onOptionSelected = function () {
            var selected = true;

            if (getLastOptionSelected()) {
                if (getLastOptionSelected().text() == $(this).text()) {
                    selected = false;
                }
            }

            if (selected) {
                setOptionSelected(this);
                if(settings.selectedCallback) {
                    settings.selectedCallback(this);
                }
            }
        }

        var setOptionSelected = function (option) {
            var optionSelected = $(option);
            var optionSelectedValue = optionSelected.data('toggle');

            var toolbarAll = toolbar.find('[data-toggle=' + TOGGLE_ALL + ']');
            var toolbarOpt = toolbar.find('[data-toggle=' + TOGGLE_OPT + ']');

            if (optionSelectedValue == TOGGLE_ALL) {
                // saving 'opt' selected options
                optionSelected = toolbar.find('.active [data-toggle=' + TOGGLE_OPT + ']');
                // disabled selected options
                toolbarOpt.parent().removeClass('active');
                // enabled 'all' option
                toolbarAll.parent().addClass('active');
            } else if (optionSelectedValue == TOGGLE_OPT) {
                toolbarAll.parent().removeClass('active');

                var toggle = true;
                if (optionSelected.parent().is('.active')) {
                    if (toolbarOpt.parent('.active').length == 1) {
                        toggle = false;
                    }
                }

                if (toggle) {
                    optionSelected.parent().toggleClass('active');
                }
            }

            lastOptionSelected = optionSelected;
        }


        var getLastOptionSelected = function () {
            return lastOptionSelected;
        }


        init();
    }

}(jQuery));