class NegociacaoController{


	constructor(){


							 //kepping association
		 let $ = document.querySelector.bind(document);
 
		 this._inputData = $('#data');
		 this._inputQuantidade = $('#quantidade');
		 this._inputValor = $('#valor');

	} 

	adiciona(event){
		 event.preventDefault();

		 //let data = new Data(this._inputData.value.replace(/-/g, ','));


		 let negociacao = new Negociacao(
		 	 DateHelper.textoParaData(this._inputData.value), 
		 	 this._inputQuantidade.value,
		 	 this._inputValor.value
		 );
 
		 console.log(negociacao);				
	}

}