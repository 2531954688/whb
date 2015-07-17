$(function() {

  // sound
  var soundID = "shenshi";

  //maybe can be improved as below article
  //http://theflyingdeveloper.com/controller-specific-assets-with-rails-4/
  var ready = function() {
    if($('#fullpage').length){
      $('#fullpage').fullpage();
    }

    // 菜单面板
    $('.menus > .menu > a').on('click',function(e){
        e.stopPropagation();
        var id = $(this).attr('id');
        var title = '';
        switch (id){
            case 'tpl':
                title = '更换模板';
                break;
            case 'music':
                title = '更换音乐';
                break;
            case 'pics':
                title = '管理相册';
                break;
            case 'title':
                title = '修改标题';
                break;
            default :
                break;
        }
        $('.select-layer > .title-bar > .title').text(title);
        $('.listWrapper').children().addClass('hide');
        $('.listWrapper').children('.'+id).removeClass('hide');
        $('.select-layer').addClass('showSelect');
    });

    $('.select-layer .cancel').on('click',function(e){
      e.stopPropagation();
      $('.select-layer').removeClass('showSelect');
    });

    $(".music-icon").click(function(document){
      if($(this).hasClass("play")){
        $(this).removeClass("play icon-rotate").addClass("pause");
        createjs.Sound.stop();
      } else {
        $(this).removeClass("pause").addClass("play icon-rotate");
        createjs.Sound.play(soundID);
      }
    });

    createjs.Sound.registerSound("/musics/shenshi.m4a", soundID);
  }

  $(document).ready(ready);
  $(document).on('page:load', ready);
});
