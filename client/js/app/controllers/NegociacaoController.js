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

		 					 //spread operator
		 let data = new Date(...this._inputData.value
		 									   .split('-')	//arrow function: just remove the word functiona and add =>
		 									   .map((item, indice) => item - indice % 2) 
		 					); 

		 let negociacao = new Negociacao(
		 	 data,
		 	 this._inputQuantidade.value,
		 	 this._inputValor.value
		 );
 
		 console.log(negociacao)
		
	}

}