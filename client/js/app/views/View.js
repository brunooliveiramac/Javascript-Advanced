class View {

	constructor(elemento){
		this._elemento = elemento;
	}
  
			template(model){
				throw new Error('The method "_template" must be implemented!');
			}

	update(model){
		this._elemento.innerHTML = this.template(model);
	}
}