$(function(){
    'use strict';

    var startJs = {
        domCache: function () {
          this.$modal = $('#project_modal');
        },
    
       projectModalPopup: function() {
           var self = this;
            $('#btn_modal1, #btn_modal2, #btn_modal3, #btn_modal4, #btn_modal5, #btn_modal6, #btn_modal7').click(function(){
                self.$modal.addClass('project_modal--show');
            });

            $('#modal_close').click(function(){
                self.$modal.removeClass('project_modal--show');
                self.$modal.addClass('project_modal');
            });

            // Fix issue with not closing outside of box when click any part of the page
            // $(window).on('click',function(e){
            //     if (e.target === self.$modal) {
            //         self.$modal.addClass('project_modal');
            //     }
            // });
       },

       dynamicCopyrightTime: function(){
        $('#footer_copyright').html(new Date().getFullYear());
       },

       startJs: function () {
        startJs.domCache();
        this.projectModalPopup();
        this.dynamicCopyrightTime();
      }
    };

    $(function(){
        startJs.startJs();
    });
});