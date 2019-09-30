iweb.controller('i103', function($scope,$rootScope) {
  $scope.entity={}
  // $scope.detail=$routeParams.detailId?true:false
  // $scope.detailId=$routeParams.detailId?parseInt($routeParams.detailId):1
  $scope.goDetail=function(id){
    window.location.href='/news/'+id
  }
  $scope.close=function () {
    $scope.detail=false
  }
  var getNews=function (page_num) {
    window.ajax({
      obj:'user',
      act:'newsread',
      page_num:page_num,
      page_size:5,
      home:'否',
    },function (jo) {
      $scope.news=jo.info
      var data=jo
      PageObject({appendId:'i004page',currNum:page_num+1,pageCount:Math.ceil(data.count/5),callback:function (current) {
          getNews(current-1)
        }})
    })
  }
    $rootScope.$on('STATE_CHANGED_HANDLER',function () {
        if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
            window.ajax({
                obj:'user',
                act:'newsbannerread',
                location:'pc',
            },function (jo) {
                $scope.entity=jo.info
            })
            getNews(0)
        }
    })
})
