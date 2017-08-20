class RequestButton {
    constructor({el}){
        this.el = el;
    }
    render(){
        this.el.innerHTML = `
            <button id="requestButton">REQUEST DATA</button>
        `;
    }
    setOnClickHandler(callback){
        let requestButton = this.el.querySelector('#requestButton');
        requestButton.addEventListener('click', callback);
    }
}

window.RequestButton = RequestButton;