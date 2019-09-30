iweb.controller('i107', function($scope,$rootScope) {
  $scope.entity={}
  $scope.close=function(){
    history.go(-1)
  }
    $rootScope.$on('STATE_CHANGED_HANDLER',function () {
        if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
            window.ajax({
                obj:'user',
                act:'newsdetail',
                id:window.location.href.split('/')[window.location.href.split('/').length-1] ,
                location:'pc',
            },function (jo) {
                $scope.detail=jo.info
                // $('title').html(jo.info.title+'-永辉彩食鲜官网')
                // var reg=/<\/?.+?\/?>/g;
                // console.log(jo.info.detail.replace(reg,'').substr(0,150));
                // $("meta[name='description']").attr('content',jo.info.detail.replace(reg,'').substr(0,150))
            })
            window.ajax({
                obj:'user',
                act:'newsbannerread',
                // id:$routeParams.id,
                location:'pc',
            },function (jo) {
                $scope.entity=jo.info
            })
        }
    })
})
