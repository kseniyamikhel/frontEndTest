class RequestButton {
  constructor({el}) {
    this.el = el;
    this.cb = null;
    
    this._onClick = this._onClick.bind(this);
  }
  
  render() {
    this.el.innerHTML = `
            <button id="requestButton">REQUEST DATA</button>
        `;
    this._addEventListener();
  }
  
  _addEventListener() {
    let requestButton = this.el.querySelector('#requestButton');
    requestButton.addEventListener('click', this._onClick);
  }
  
  _onClick(e) {
    if (this.cb) {
      this.cb(e);
    }
  }
  
  setOnClickHandler(callback) {
    this.cb = callback;
  }
}

window.RequestButton = RequestButton;