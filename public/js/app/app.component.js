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
            .subscribe(function () { return alert('Comentário enviado.'); }, function (error) { return console.log(error); });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFrQyxlQUFlLENBQUMsQ0FBQTtBQUNsRCw4QkFBd0IsaUJBQWlCLENBQUMsQ0FBQTtBQUMxQyxnQ0FBK0IsbUJBQW1CLENBQUMsQ0FBQTtBQWtCbkQ7SUFNSSxzQkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTGxELGFBQVEsR0FBYyxFQUFFLENBQUM7SUFPekIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO2FBQzVCLFNBQVMsQ0FDTixVQUFBLFFBQVEsSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxFQUF4QixDQUF3QixFQUNwQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQ2hDLENBQUM7SUFHVixDQUFDO0lBRUQsbUNBQVksR0FBWjtRQUVJLDhDQUE4QztRQUU5QyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztRQUMvQixDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQztRQUMzQixDQUFDO1FBQUEsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM5RCxJQUFNLE9BQU8sR0FBRyxJQUFJLHVCQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7YUFDbkMsU0FBUyxDQUNOLGNBQUssT0FBQSxLQUFLLENBQUMscUJBQXFCLENBQUMsRUFBNUIsQ0FBNEIsRUFDakMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUM5QixDQUFDO0lBRVYsQ0FBQztJQUNELCtCQUFRLEdBQVI7SUFFQSxDQUFDO0lBdkRMO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxFQUFFO1lBQ2IsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDOztvQkFBQTtJQWtERixtQkFBQztBQUFELENBNUNBLEFBNENDLElBQUE7QUE1Q1ksb0JBQVksZUE0Q3hCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLnNlcnZpY2UnO1xuXG5cblxuXG5cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIGRpcmVjdGl2ZTogW10sXG4gICAgcHJvdmlkZXJzOiBbTWVzc2FnZVNlcnZpY2VdXG59KVxuXG4vLyBATmdNb2R1bGUoe1xuLy9cbi8vIH0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgbWVzc2FnZXM6IE1lc3NhZ2VbXSA9IFtdO1xuICAgIG5vbWU6IHN0cmluZztcbiAgICBnb3N0ZWk6IHN0cmluZztcbiAgICBjb21lbnRhcmlvOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSl7XG5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgICAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgbWVzc2FnZXMgPT4gdGhpcy5tZXNzYWdlcyA9IG1lc3NhZ2VzLFxuICAgICAgICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICApO1xuXG5cbiAgICB9XG5cbiAgICBvbkFkZE1lc3NhZ2UoKSB7XG5cbiAgICAgICAgLy9jb25zdCAgcm5kID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiAxMDApO1xuXG4gICAgICAgIGlmICgkKCcjbmFvLWdvc3RlaScpLmlzKCc6Y2hlY2tlZCcpKXtcbiAgICAgICAgICAgIHRoaXMuZ29zdGVpID0gJ07Do28gZ29zdGVpJztcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmdvc3RlaSA9ICdHb3N0ZWknO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubm9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdub21lJykudmFsdWU7XG4gICAgICAgIHRoaXMuY29tZW50YXJpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21lbnRhcmlvJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgTWVzc2FnZSh0aGlzLmdvc3RlaSwgdGhpcy5ub21lLCB0aGlzLmNvbWVudGFyaW8pO1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2F2ZU1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAgICAgKCk9PiBhbGVydCgnQ29tZW50w6FyaW8gZW52aWFkby4nKSxcbiAgICAgICAgICAgICAgICBlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICk7XG5cbiAgICB9XG4gICAgb25TdWJtaXQoKXtcblxuICAgIH1cbn0iXX0=
