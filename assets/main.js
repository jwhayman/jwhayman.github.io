(function ($) {

    var App = {

        init: function () {

            App.initWebFonts();
        },

        initWebFonts: function () {

            if (typeof WebFont !== 'object') {
                return;
            }

            WebFont.load({
                monotype: {
                    'projectId': '8f0c50be-6f92-445f-ae3d-1f7177123234'
                }
            });
        }
    };

    $(document).ready(App.init);
})(jQuery);