class DataTable {
  constructor({el}) {
    this.el = el;
    this.cb = null;
    this.template = document.getElementById('data-table-template').innerHTML;
    Mustache.parse(this.template);
    this._onClick = this._onClick.bind(this);
  }
  
  render(chosenColumns, data) {
    const rows = data.map(item => {
      const cells = chosenColumns.map(column => {
        if (column === 'friends') {
          return item[column].map(friend => friend.name);
        }
  
        return item[column];
      });
      return {cells};
    });
    this.el.innerHTML = Mustache.render(this.template, {columns: chosenColumns, rows});
    this._addEventListener();
  }
  
  _addEventListener(){
    let backButton = this.el.querySelector('#backButton');
    backButton.addEventListener('click', this._onClick);
  }
  _onClick(e){
    if(this.cb){
      this.cb(e);
    }
  }
  
  setOnBackHandler(callback) {
    this.cb = callback;
  }
}

window.DataTable = DataTable;