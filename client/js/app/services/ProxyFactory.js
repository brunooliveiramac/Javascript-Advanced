class ProxyFactory{

	static create(obj, props, action){

		 return new Proxy(new ListaNegociacoes(), {

            get(target, prop, receiver) {
                if([props].includes(prop) && typeof(target[prop]) === typeof(Function)) {
                    return function() {
                        console.log(`método '${prop}' interceptado`);
                        Reflect.apply(target[prop], target, arguments); //--> aplica valor (args) no target

                        return action(target);
                    }
                }
                return Reflect.get(target, prop, receiver);   
            }
         });
	}


}