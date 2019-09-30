iweb.controller('i101', function($scope,$rootScope) {
  $scope.entity={}
    $rootScope.$on('STATE_CHANGED_HANDLER',function () {
        if (apiconn.conn_state == "LOGIN_SCREEN_ENABLED") {
            window.ajax({
                obj:'user',
                act:'companyread',
                location:'pc'
            },function (jo) {
                $scope.entity=jo.info
            })
        }
    })
})
