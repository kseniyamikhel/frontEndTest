class DataProvider {
  constructor({path}) {
    this.path = path;
    this.data = [];
  }
  
  
  _makeRequest(cb) {
    const GET = 'GET';
    
    let req = new XMLHttpRequest();
    req.open(GET, this.path, true);
    
    req.addEventListener('readystatechange', event => {
      if (req.readyState !== 4) {
        return;
      }
      
      let respData = JSON.parse(req.responseText);
      
      cb(respData);
    });
    
    req.send();
  }
  
  getColumns(cb) {
    this._getData(this._getOptionsCb(cb));
  }
  
  _getOptionsCb(cb){
      return data => {
        const options = data.reduce(function(keys, option){
          for(let key in option){
            keys[key] = 1;
          }
          return keys;
        }, {});
        cb(Object.keys(options));
      }
  }
  
  getData(cb) {
    this._getData(cb);
  }
  
  _getData(cb){
    if(this.data.length){
      return cb(this.data);
    }
    this._makeRequest((data) => {
      this.data = data;
      cb(data);
    });
  }
}

window.DataProvider = DataProvider;