/**
 * Microservice plugin - Plugin de los microservicios
 * 
 * Add and multiply two given numbers - Suma y multiplica dos números dados.
 * 
 */
module.exports = function(options) {
    var seneca = this;
    var plugin = 'operations'
    
    seneca.add({role: "math", oper: "sum"}, function(args, callback) {
        callback( null, { answer: args.left + args.right } )
    });
    
    seneca.add({role: "math", oper: "product"}, function(args, callback) {
        callback( null, { answer: args.left * args.right } )
    });

    // Forcing args to be numbers - Forzando a que los argumentos sean números
    seneca.wrap( 'role:math', function( args, respond ) {
        args.left  = Number(args.left).valueOf()
        args.right = Number(args.right).valueOf()
        this.prior( args, respond ) // This means it is executed before calling microservice
									// Ésto significa que se ejecute antes de llamar al microservicio
    })
    
    seneca.act('role:web',{use:{
        prefix: 'operations/', // URL prefix - Prefijo en URL
        pin: {role:'math', oper:'*'},
        map:{
          sum: {GET:true},          
          product: {GET:true}
        }
    }});
    
    return{
    	name: plugin
    }
}