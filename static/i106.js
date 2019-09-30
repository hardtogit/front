iweb.controller('i106', function($scope,$rootScope) {
  $scope.entity={}
  $scope.openLeft=function(){
    window.open($scope.entity.leftUrl,'_blank')
  }
  $scope.openRight=function(){
    window.open($scope.entity.rightUrl,'_blank')
  }
  $rootScope.$on('STATE_CHANGED_HANDLER',function () {
      if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {

          window.ajax({
              obj:'user',
              act:'joinread',
              location:'pc',
          },function (jo) {
              $scope.entity=jo.info
          })
      }

  })
})
