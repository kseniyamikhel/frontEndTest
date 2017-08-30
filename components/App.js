class App {
  constructor({el}) {
    this.el = el;
    this.requestButton = new RequestButton({el: this.el});
    this.dataProvider = new DataProvider({path: 'http://www.json-generator.com/api/json/get/bUsRkvEmHm?indent=2'});
    this.columnsSelector = new ColumnsSelector({el: this.el});
    this.dataTable = new DataTable({el: this.el});
    this.loader = new Loader({el: this.el});
    this._renderColumnsSelectors = this._renderColumnsSelectors.bind(this);
    this._renderTable = this._renderTable.bind(this);
    this.requestButton.setOnClickHandler(this._renderColumnsSelectors);
    this.columnsSelector.setOnSelectHandler(this._renderTable);
    this.dataTable.setOnBackHandler(this._renderColumnsSelectors);
  }
  
  renderRequestButton() {
    this.requestButton.render();
  }
  
  renderLoading() {
    this.loader.render();
  }
  
  _renderColumnsSelectors() {
    this.renderLoading();
    this.dataProvider.getColumns(columns => this.columnsSelector.render(columns));
  }
  
  _renderTable(chosenColumns) {
    this.renderLoading();
    this.dataProvider.getData( data => this.dataTable.render(chosenColumns, data));
  }
  
}

window.App = App;