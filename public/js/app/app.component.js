"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var message_model_1 = require('./message.model');
var message_service_1 = require('./message.service');
var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.onAddMessage = function () {
        //const  rnd = Math.ceil(Math.random() * 100);
        var _this = this;
        if ($('#nao-gostei').is(':checked')) {
            this.gostei = 'Não gostei';
        }
        else {
            this.gostei = 'Gostei';
        }
        ;
        this.nome = document.getElementById('nome').value;
        this.comentario = document.getElementById('comentario').value;
        var message = new message_model_1.Message(this.gostei, this.nome, this.comentario);
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return alert('Obrigado ' + _this.nome + ', seu comentário foi registrado.'); }, function (error) { return console.log(error); });
    };
    AppComponent.prototype.onSubmit = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            directive: [],
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw4QkFBd0IsaUJBQWlCLENBQUMsQ0FBQTtBQUMxQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQWdCbkQ7SUFNSSxzQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTGxELGFBQVEsR0FBYyxFQUFFLENBQUM7SUFPekIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO2FBQzVCLFNBQVMsQ0FDTixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFHVixDQUFDO0lBSUQsbUNBQVksR0FBWjtRQUVJLDhDQUE4QztRQUZsRCxpQkFvQkM7UUFoQkcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDakMsSUFBSSxDQUFDLE1BQU0sR0FBRyxZQUFZLENBQUM7UUFDL0IsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDM0IsQ0FBQztRQUFBLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2xELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDOUQsSUFBTSxPQUFPLEdBQUcsSUFBSSx1QkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO2FBQ25DLFNBQVMsQ0FDTixjQUFLLE9BQUEsS0FBSyxDQUFDLFdBQVcsR0FBRSxLQUFJLENBQUMsSUFBSSxHQUFFLGtDQUFrQyxDQUFDLEVBQWpFLENBQWlFLEVBQ3RFLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBbEIsQ0FBa0IsQ0FDOUIsQ0FBQTtJQUVULENBQUM7SUFFRCwrQkFBUSxHQUFSO0lBRUEsQ0FBQztJQXhETDtRQUFDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLG1CQUFtQjtZQUNoQyxTQUFTLEVBQUUsRUFBRTtZQUNiLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDOUIsQ0FBQzs7b0JBQUE7SUF5REYsbUJBQUM7QUFBRCxDQXJEQSxBQXFEQyxJQUFBO0FBckRZLG9CQUFZLGVBcUR4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZS5tb2RlbCc7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vbWVzc2FnZS5zZXJ2aWNlJztcblxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgICB0ZW1wbGF0ZVVybDogJ2FwcC50ZW1wbGF0ZS5odG1sJyxcbiAgICBkaXJlY3RpdmU6IFtdLFxuICAgIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXVxufSlcblxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuICAgIG5vbWU6IHN0cmluZztcbiAgICBnb3N0ZWk6IHN0cmluZztcbiAgICBjb21lbnRhcmlvOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPT4gdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuXG5cbiAgICB9XG5cblxuXG4gICAgb25BZGRNZXNzYWdlKCkge1xuXG4gICAgICAgIC8vY29uc3QgIHJuZCA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTAwKTtcblxuICAgICAgICBpZiAoJCgnI25hby1nb3N0ZWknKS5pcygnOmNoZWNrZWQnKSl7XG4gICAgICAgICAgICB0aGlzLmdvc3RlaSA9ICdOw6NvIGdvc3RlaSc7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5nb3N0ZWkgPSAnR29zdGVpJztcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm5vbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9tZScpLnZhbHVlO1xuICAgICAgICB0aGlzLmNvbWVudGFyaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tZW50YXJpbycpLnZhbHVlO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2UodGhpcy5nb3N0ZWksIHRoaXMubm9tZSwgdGhpcy5jb21lbnRhcmlvKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNhdmVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICAgICgpPT4gYWxlcnQoJ09icmlnYWRvICcrIHRoaXMubm9tZSArJywgc2V1IGNvbWVudMOhcmlvIGZvaSByZWdpc3RyYWRvLicpLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgKVxuXG4gICAgfVxuXG4gICAgb25TdWJtaXQoKXtcblxuICAgIH1cblxuICAgIC8vXG4gICAgLy8gb25DbGVhcihmb3JtOiBOZ0Zvcm0pe1xuICAgIC8vICAgICB0aGlzLm5vbWUgPSBudWxsO1xuICAgIC8vICAgICB0aGlzLmNvbWVudGFyaW8gPSBudWxsO1xuICAgIC8vIH1cbn0iXX0=
