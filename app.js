var app = angular.module('todoApp',[]);

app.controller('ItemList', ['$scope', '$filter', function($scope, $filter) {
    $scope.items = [
        {"title": "Homework", "description":"gui", "dueDate": new Date(2016,1,5)},
        {"title": "Meeting", "description":"networks project", "dueDate": new Date(2016,1,7)},
        {"title": "Project Deadline", "description":"Networks proposal due", "dueDate":new Date(2016,1,4)}
    ];

    $scope.addItem = function(title,description,dueDate) {
        if(title && description && dueDate) {
            $scope.newItemTitle = null;
            $scope.newItemDescription = null;
            $scope.newItemDate = null;

            $scope.items.push({"title":title,"description":description,"dueDate":dueDate});
        }
    };

    $scope.removeItem = function(item) {
        var index = $scope.items.indexOf(item);
        $scope.items.splice(index,1);
    };

    $scope.toggleSortDate = function() {
        $scope.orderByDate = true;
        $scope.orderByTitle = false;
        $scope.orderAscending = !$scope.orderAscending;
        $scope.sortItems();
    };

    $scope.toggleSortTitle = function() {
        $scope.orderByTitle = true;
        $scope.orderByDate = false;
        $scope.orderAscending = !$scope.orderAscending;
        $scope.sortItems();
    };

    $scope.sortItems = function() {
        var orderBy = $filter('orderBy');
        if( $scope.orderByTitle ) {
            $scope.items = orderBy($scope.items,"title",$scope.orderAscending);
        }
        else if( $scope.orderByDate ) {
            $scope.items = orderBy($scope.items,"dueDate",$scope.orderAscending);
        }
    };

}]);
