(function () {
    'use strict';

    angular
            .module('app.contact')
            .controller('ContactController', ContactController);

//inyecto funcionalidad y servicio dataservice
    ContactController.$inject = ['$q', 'dataservice', '$http'];

//lo añadimos al controlador
    function ContactController($q, dataservice, $http) {
        var vm = this;
        //variables del formulario
        vm.title = 'Contact';
        vm.InputName = '';
        vm.inputEmail = '';
        vm.inputSubject = '';
        vm.inputMessage = '';
        vm.SubmitContact = SubmitContact;


        function SubmitContact() {
            var data = {
                from: vm.inputEmail,
                to: 'gv.web.denvelopers@gmail.com',
                subject: vm.inputSubject,
                text: vm.inputMessage
            };
            dataservice.sendEmail(data).then(function (response) {

                if (response) {
                    vm.resultMessage = 'Su email ha sido enviado correctamente';
                } else {
                    vm.resultMessage = 'Ha habido un error al enviar el email, intentelo mas tarde';
                }
            });
        }
        
    }
})();
