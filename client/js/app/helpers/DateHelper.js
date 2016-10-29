class DateHelper {


	constructor(){ 
		throw new Error('DataHelper cannot be instantiated!);                                                                                                
	}


	static textoParaData(texto){ 
		return new Date(...texto.split('-')	//arrow function: just remove the word functiona and add =>
		 			   .map((item, indice) => item - indice % 2));
	}
 
	static dataParaTexto(data){
  		return data.getDate()  
            + '/' + (data.getMonth() + 1) 
            + '/' + data.getFullYear();
	}
}