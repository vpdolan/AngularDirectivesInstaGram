let PhotoService = function($http, PARSE) {

  let url = PARSE.URL + 'classes/photos';

  this.getAllImages = getAllImages;
  this.addImage = addImage;
  this.addLike = addLike;

  function Image (imgObj) {
    this.image = imgObj.image;
    this.title = imgObj.title;
    this.description = imgObj.description;
    this.counter = Number(imgObj.counter);
  }

  function getAllImages () {
    return $http.get(url, PARSE.CONFIG);
  }

  function addImage (imgObj) {
    let img = new Image(imgObj);
    return $http.post(url, img, PARSE.CONFIG);
  }

  function addLike (imgObj) {
    imgObj.counter = Number(imgObj.counter + 1);
    return $http.put(url + '/' + imgObj.objectId, imgObj, PARSE.CONFIG); 
  }

};

PhotoService.$inject = ['$http', 'PARSE'];

export default PhotoService;

