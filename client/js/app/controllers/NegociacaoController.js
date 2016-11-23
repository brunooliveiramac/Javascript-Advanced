class NegociacaoController{


	constructor(){


							 //kepping association
		 let $ = document.querySelector.bind(document);
 
		 this._inputData = $('#data');
		 this._inputQuantidade = $('#quantidade');
		 this._inputValor = $('#valor');
		 //this._listaNegociacoes = new ListaNegociacoes(model =>  //Escopo do This em uma arrow function é lexico, n muda de acordo com o contexto
         //   this._negociacoesView.update(model)
         //);

		let self = this; // guarda em uma variável o valor de this
		this._listaNegociacoes = new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver) {
                if(['adiciona', 'esvazia'].includes(prop) && typeof(target[prop]) === typeof(Function)) {
                    return function() {
                        console.log(`método '${prop}' interceptado`);
                        Reflect.apply(target[prop], target, arguments); //--> aplica valor (args) no target

                        // acessa o self que a instância de NegociacoesController
                        self._negociacoesView.update(target);
                    }
                }
                return Reflect.get(target, prop, receiver);   
            }
         });
		 
		 this._negociacoesView = new NegociacoesView($('#negociacoesView'));

		 this._mensagem = new Mensagem();
		 this._mensagemView = new MensagemView($('#mensagemView'));
		 this._mensagemView.update(this._mensagem);

	} 

	adiciona(event){
		 event.preventDefault();

		 this._listaNegociacoes.adiciona(this._criaNegociacao());
		 this._limpaFormulario();

		 this._mensagem.texto = 'Negociacao Adicionada!';
		 this._mensagemView.update(this._mensagem);

 		 console.log(this._listaNegociacoes.getNegociacoes());
	}

	apaga(){

		this._listaNegociacoes.esvazia();

		this._mensagem.texto = 'Negociações Apagadas';
		this._mensagemView.update(this._mensagem);
	}

	_criaNegociacao(){
		return new Negociacao(
		 	 DateHelper.textoParaData(this._inputData.value), 
		 	 this._inputQuantidade.value,
		 	 this._inputValor.value
		 );
	}

	_limpaFormulario(){
		 this._inputData.value = '';
		 this._inputQuantidade.value = 1;
		 this._inputValor.value = 0.0;	

		 this._inputData.focus();
	}

}