var Remitano = function () {
   	var vocieup=function(id){
         

   		$.post("/ajax/vocieup",{idvideo:id},function(data){
   			//console.log(data)
            $.notify({
    // options
    title: '<strong>Success</strong>',
    message: "Thank you for voting.",
  icon: 'glyphicon glyphicon-ok',
   
},{
    // settings
    element: 'body',
    //position: null,
    type: "success",
    //allow_dismiss: true,
    //newest_on_top: false,
    showProgressbar: false,
    placement: {
        from: "top",
        align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    delay: 3300,
    timer: 1000,
    url_target: '_blank',
    mouse_over: null,
    animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutRight'
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    icon_type: 'class',
});
   		});
   		
   	}
   	var vociedown=function(id){
         
   		$.post("/ajax/vociedown",{idvideo:id},function(data){
            $.notify({
    // options
    title: '<strong>Success</strong>',
    message: "Thank you for voting.",
  icon: 'glyphicon glyphicon-ok',
   
},{
    // settings
    element: 'body',
    //position: null,
    type: "success",
    //allow_dismiss: true,
    //newest_on_top: false,
    showProgressbar: false,
    placement: {
        from: "top",
        align: "right"
    },
    offset: 20,
    spacing: 10,
    z_index: 1031,
    delay: 3300,
    timer: 1000,
    url_target: '_blank',
    mouse_over: null,
    animate: {
        enter: 'animated fadeInDown',
        exit: 'animated fadeOutRight'
    },
    onShow: null,
    onShown: null,
    onClose: null,
    onClosed: null,
    icon_type: 'class',
});
   		});
   	}

    return {
        Init: function () {
          
           
        },vocieup:function(id){
        	vocieup(id);
        },vociedown:function (id) {
        	vociedown(id)
        }
    }

}();

$(function () {

    'use strict';
    Remitano.Init();

});
