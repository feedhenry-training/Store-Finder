function Point(lat, lon, rad){
  if (typeof(rad) === 'undefined') {
    rad = 6371; // earth's mean radius in km   
  }
  
  // only accept numbers or valid numeric strings
  this.latitude = typeof(lat) === 'number' ? lat : typeof(lat) === 'string' && lat !== '' ? +lat : NaN;
  this.longitude = typeof(lat) === 'number' ? lon : typeof(lon) === 'string' && lon !== '' ? +lon : NaN;
  this.radius = typeof(rad) === 'number' ? rad : typeof(rad) === 'string' && rad !== '' ? +rad : NaN;
  
  this.distanceTo = function (toPoint) {
    var lat1, lat2, lon1, lon2, dLat, dLon, a, c, d;

    lat1 = this.latitude * Math.PI / 180;
    
    lon1 = this.longitude * Math.PI / 180;
    lat2 = toPoint.latitude * Math.PI / 180;
    lon2 = toPoint.longitude * Math.PI / 180;
    dLat = lat2 - lat1;
    dLon = lon2 - lon1;

    a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1) * Math.cos(lat2) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
    c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    d = this.radius * c;
    
    return d;
  };
}