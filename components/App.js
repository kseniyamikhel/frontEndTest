class App {
    constructor({el}){
        this.el = el;
        this.requestButton = new RequestButton({el: this.el});
        this.dataProvider = new DataProvider({path: 'http://www.json-generator.com/api/json/get/bUsRkvEmHm?indent=2'});
        this.columnsSelector = new ColumnsSelector({el: this.el});
        this.dataTable = new DataTable({el: this.el});
        this.requestButton.setOnClickHandler(this._renderColumnsSelectors);
        this.dataTable.setOnBackHandler(this._renderColumnsSelectors);
        this.columnsSelector.setOnSelectHandler(this._renderTable);
    }
    renderRequestButton(){
        this.requestButton.render();
    }
    _renderColumnsSelectors(e){
        e.preventDefault();
        let columns = this.dataProvider.getColumns();
        this.columnsSelector.render(columns);
    }
    _renderTable(chosenColumns, e){
        e.preventDefault();
        let data = this.dataProvider.getData();
        this.dataTable.render(chosenColumns, data);
    }
    /*_initComponents(){
        requestButton.render();
        requestButton.onClick = () => {
            dataProvider.makeRequest((data => {
                columnsSelector.getOptions(data);
                columnsSelector.render();
            }));
        };
        columnsSelector.onSubmit = (chosenOptions) => {
            console.log('onSubmitRender', chosenOptions);
            dataTable.render(chosenOptions);
        };
    }*/
}
window.App = App;