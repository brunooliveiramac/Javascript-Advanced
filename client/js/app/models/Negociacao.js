class Negociacao {

	constructor(data, quantidade, valor){

		this._data = new Date(data.getTime());
		this._quantidade = quantidade;
		this._valor = valor;
		Obeject.freeze(this); //Can't be updated - isn't deep 

	}


	obtemVolume(){
		return this._quantidade * this._valor;
	}


	get Data(){
		return new Date(this._data.getTime());
	}

	get Quantidade(){ 
		return this._quantidade;
	}

	get Valor(){
		return this._valor;
	}
}