function EmailController($filter) {
    this.emails = [];

    this.addEmail = function () {
        this.emails.push({
            name: 'Bill Gates',
            subject: 'Want to buy a Surface?'
        })
    };
}

angular
    .module('app')
    .controller('EmailController', EmailController);
