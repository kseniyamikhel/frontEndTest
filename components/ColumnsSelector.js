class ColumnsSelector {
    constructor({el}){
        this.el = el;
    }
    /*getOptions(data){
        const options = data.reduce(function(keys, option){
            for(let key in option){
                keys[key] = 1;
            }
            return keys;
        }, {});
        this.optionsData = Object.keys(options);
    }*/
    render(columns){
        this.el.innerHTML = `
            <h2>Please select data that you want to display:</h2>
            <form id="optionsForm"></form>
        `;
        this._setOptions(columns);
    }
    _setOptions(columns){
        this.form = document.querySelector('#optionsForm');
        for(let i = 0; i < columns.length; i++){
            let input = document.createElement('input');
            input.type = 'checkbox';
            input.name = columns[i];
            let span = document.createElement('span');
            span.textContent = columns[i];
            this.form.appendChild(input);
            this.form.appendChild(span);
        }
        let button = document.createElement('button');
        button.textContent = 'SUBMIT';
        this.form.appendChild(button);
    }
    setOnSelectHandler(callback){
        this.form.addEventListener('submit', this._onClick(callback));

    }
    _onClick(callback, e){
        let chosenColumns = this._getChosenColumns();
        callback(chosenColumns, e);
    }
    _getChosenColumns(){
        let names = this.el.querySelectorAll('[name]');
        let data = {};
        names.forEach(el => {
            data[el.name] = el.checked;
        });
        return data;
    }

}

window.ColumnsSelector = ColumnsSelector;