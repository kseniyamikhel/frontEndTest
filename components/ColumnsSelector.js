class ColumnsSelector {
  constructor({el}) {
    this.el = el;
    this.cb = null;
    
    this._onSubmit = this._onSubmit.bind(this);
    this._selectAll = this._selectAll.bind(this);
    this._clearSelection = this._clearSelection.bind(this);
  }
  
  render(columns) {
    this.el.innerHTML = `
            <h3>Please select data that you want to display:</h3>
            <form id="optionsForm"></form>
        `;
    this._setOptions(columns);
    this._addEventListener();
  }
  
  _setOptions(columns) {
    this.form = document.querySelector('#optionsForm');
    for (let i = 0; i < columns.length; i++) {
      let div = document.createElement('div');
      div.classList = 'checkboxWrap';
      let input = document.createElement('input');
      input.type = 'checkbox';
      input.name = columns[i];
      input.id = columns[i];
      input.classList = 'checkbox';
      let label = document.createElement('label');
      label.textContent = columns[i];
      label.classList = 'checkboxName';
      label.setAttribute('for', columns[i]);
      div.appendChild(input);
      div.appendChild(label);
      this.form.appendChild(div);
    }
    let selectAll = document.createElement('a');
    selectAll.textContent = 'Select All   |   ';
    selectAll.id = 'selectAll';
    selectAll.addEventListener('click', this._selectAll);
    this.form.appendChild(selectAll);
    
    let clearSelection = document.createElement('a');
    clearSelection.textContent = 'Clear Selection';
    clearSelection.id = 'clearSelection';
    clearSelection.addEventListener('click', this._clearSelection);
    this.form.appendChild(clearSelection);
    
    let br = document.createElement('br');
    this.form.appendChild(br);
    let button = document.createElement('button');
    button.textContent = 'SUBMIT';
    button.id = 'submitButton';
    this.form.appendChild(button);
  }
  
  _addEventListener() {
    this.form.addEventListener('submit', this._onSubmit);
  }
  
  setOnSelectHandler(callback) {
    this.cb = callback;
  }
  
  _onSubmit(e) {
    e.preventDefault();
    
    if (!this.cb) {
      return false;
    }
    let chosenColumns = this._getChosenColumns();
    this.cb(chosenColumns);
  }
  
  _selectAll() {
    let items = this.el.querySelectorAll('[name]');
    for (let el of items) {
      el.checked = true;
    }
  }
  
  _clearSelection() {
    let items = this.el.querySelectorAll('[name]');
    for (let el of items) {
      el.checked = false;
    }
  }
  
  _getChosenColumns() {
    let names = this.el.querySelectorAll('[name]');
    let columns = [];
    
    for (let el of names) {
      if (el.checked) {
        columns.push(el.name);
      }
    }
    
    return columns;
  }
  
}

window.ColumnsSelector = ColumnsSelector;