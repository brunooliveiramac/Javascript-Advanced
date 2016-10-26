class Negociacao {

	   constructor(data, quantidade, valor) {

        this._data = new Date(data.getTime()); // criando uma nova instância a partir do tempo de uma data 
        this._quantidade = quantidade;
        this._valor = valor;
		Obeject.freeze(this); //Can't be updated - isn't deep 

	}


	obtemVolume(){
		return this._quantidade * this._valor;
	}

	get quantidade(){ 
		return this._quantidade;
	}

	get valor(){
		return this._valor;
	}

    get data() {
        return new Date(this._data.getTime());
    }


}