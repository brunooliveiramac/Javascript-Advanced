class ListaNegociacoes {

	constructor(){
		this._negociacoes = [];
	 	//this._armadilha = armadilha;

	}


	adiciona(negociacao){
		this._negociacoes.push(negociacao);
		//this._armadilha(this); //Lista de negociações recebida no controller passada para a funcão
		//Reflect.apply(this._armadilha, this._contexto, [this]) // <-- JavaScript API -- function..context..params

	} 

	getNegociacoes(){
		return [].concat(this._negociacoes);
	}

	esvazia() {
		this._negociacoes = [];
		//this._armadilha(this);
		//Reflect.apply(this._armadilha, this._contexto, [this])

	}

}