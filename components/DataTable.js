class DataTable {
    constructor({el}){
        this.el = el;
    }
    render(options){
        this.el.innerHTML = `
            <button id="backButton">SELECT DATA</button>
            <h2>Here is the data that you have requested:</h2>
        `;
    }
    setOnBackHandler(callback){
        let backButton = this.el.querySelector('#backButton');
        backButton.addEventListener('click', callback);
    }
}

window.DataTable = DataTable;