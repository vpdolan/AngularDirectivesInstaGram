let vinImage = function(PhotoService, $timeout) {

  return {
    restrict: 'E',
    replace: true,
    scope: {
      image: '='
    },

    template: `
    <div class="tiles">
      <img ng-src='{{image.image}}' class='image'>
      <span class='hidden'><i class="fa fa-heart fa-3x"></i></span>
      <p><i class="fa fa-check">{{image.counter}}</i></p>
    </div>
    
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('dblclick', function () {
        element.find('span').removeClass('hidden').addClass('show');
        $timeout (function () {
          element.find('span').removeClass('show').addClass('hidden');
        }, 2000);
        PhotoService.addLike(scope.image).then ( (res) => {
          console.log (res);
        });
      });
    }  
  };
};

vinImage.$inject = ['PhotoService', '$timeout'];

export default vinImage