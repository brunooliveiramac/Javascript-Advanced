class DateHelper {


	constructor(){ 
		throw new Error("DataHelper cannot be instantiated!");                                                                                                
	}


	static textoParaData(texto){ 
		if(!/\d{4}-\d{2}-\d{2}/.test(texto))
				throw new Error("Incorrect Date!");
			
		return new Date(...texto.split('-')	//arrow function: just remove the word functiona and add =>
		 			   .map((item, indice) => item - indice % 2));

	}
 
	static dataParaTexto(data){
		//template string - with backstic (CRASE (`word´))
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
	}
}