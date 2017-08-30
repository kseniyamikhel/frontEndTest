class Loader{
  constructor({el}){
    this.el = el;
  }
  render(){
    this.el.innerHTML = `
      <div id='loader'><img src="../img/ajax-loader.gif" /></div>
    `;
  }
}
window.Loader = Loader;