let AddController = function ($scope, $http, PARSE) {

  let url = PARSE.URL + 'classes/photos';

  let vm = this;
  let Pics = function(obj){
    this.url = obj.url;
    this.title = obj.title;
    this.caption = obj.caption;
  }

  vm.addPics = function (gram) {
    let x = new Pics (gram);
    $http.post(url, x, PARSE.CONFIG)then.((res) => {
      $state.go('root.home');
    })
  };

};  

AddController.$inject = ['$scope', '$http', 'PARSE'];

export default AddController; 





