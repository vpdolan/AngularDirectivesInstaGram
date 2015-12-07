let AddController = function (PhotoService, $state) {

  let vm = this;

  vm.addImage = addImage;

  function addImage(imgObj) {
    PhotoService.addImage(imgObj).then ( (res) => {
      console.log(res);

    });
    
    $state.go('root.home');

  }

};  

AddController.$inject = ['PhotoService', '$state'];

export default AddController; 





