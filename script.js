
var app = angular.module('app', ['infinite-scroll']);

app.controller('controlador', function ($scope, Article) {
  $scope.article = new Article();
});

// Article constructor function to encapsulate HTTP and pagination logic
app.factory('Article', function ($http) {

  var Article = function() {
    this.items = [];
    this.busy = false;
    this.page = 0;
  };

  Article.prototype.nextPage = function() {
    //this.items = ['1', '2', '3', '4'];
    if(this.busy) return;
    this.busy = true;

    var url = 'http://localhost:3000/api/notas/'+this.page;
    
    $http.get(url).success(function(data){
      // console.log(data.length);
      // this.items.push(data);
      for (var i = 0; i < data.length; i++){
        this.items.push(data[i]);
      }

      this.page++;
      this.busy = false;
    }.bind(this));

  };

  return Article;
});