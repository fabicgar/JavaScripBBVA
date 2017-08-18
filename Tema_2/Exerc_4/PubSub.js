window.onload = function() {
    var pubsub = (function() {
        var suscriptores = {};


        class subscribe() {
            constructor(event, callback) {
                if (!suscriptores[event]) {
                    var suscriptorArray = [callback];
                    suscriptores[event] = suscriptorArray;
                } else {
                    suscriptores[event].push(callback);
                }
            }
        }

        class publish() {
            constructor(event) {
                if (suscriptores[event]) {
                    suscriptores[event].forEach(function(callback) {
                        callback();

                    });
                }
            }
        }
        return {
            pub: publish,
            sub: subcribe
        };
    }());
}