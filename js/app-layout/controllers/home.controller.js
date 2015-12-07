let HomeController = function($scope, PhotoService) {


  let vm = this;
  
  vm.getAll = getAll();

  function getAll() {
    PhotoService.getAllImages().then ( (res) => {
      vm.allImages = res.data.results;
      console.log(vm.allImages);

    });
  }
};

HomeController.$inject = ['$scope', 'PhotoService'];

export default HomeController;