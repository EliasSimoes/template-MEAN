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
var message_model_1 = require("./message.model");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/messages').map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                message = new message_model_1.Message(element.gostei, element.nome, element.comentario);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:3000/message', body, { headers: headers });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUF3QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzFDLHFCQUF3QyxlQUFlLENBQUMsQ0FBQTtBQUV4RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBSWpCO0lBRUksd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUUsQ0FBQztJQUVqQyxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsR0FBRyxDQUN0QyxVQUFDLElBQWM7WUFDWCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBTSxRQUFRLEdBQWMsRUFBRSxDQUFDO1lBQy9CLElBQUksT0FBTyxDQUFDO1lBQ1osR0FBRyxDQUFDLENBQWdCLFVBQWMsRUFBZCxLQUFBLFNBQVMsQ0FBQyxJQUFJLEVBQWQsY0FBYyxFQUFkLElBQWMsQ0FBQztnQkFBOUIsSUFBSSxPQUFPLFNBQUE7Z0JBQ1IsT0FBTyxHQUFHLElBQUksdUJBQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWdCO1FBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7WUFDeEIsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFFckYsQ0FBQztJQTNCTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBaUNiLHFCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxzQkFBYyxpQkErQjFCLENBQUEiLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2UubW9kZWxcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IFwicnhqcy9SeFwiO1xuXG5ASW5qZWN0YWJsZSgpXG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZXtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCl7fVxuXG4gICAgZ2V0TWVzc2FnZXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlcycpLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YTogUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0cmFjdGVkID0gZGF0YS5qc29uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZ0FycmF5OiBNZXNzYWdlW10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGVsZW1lbnQgb2YgZXh0cmFjdGVkLmRhdGEpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBuZXcgTWVzc2FnZShlbGVtZW50Lmdvc3RlaSxlbGVtZW50Lm5vbWUsZWxlbWVudC5jb21lbnRhcmlvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2dBcnJheS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtc2dBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzYXZlTWVzc2FnZShtZXNzYWdlOiBNZXNzYWdlKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScsIGJvZHksIHtoZWFkZXJzOiBoZWFkZXJzfSk7XG5cbiAgICB9XG5cbiAgICAvLyBkZWxldGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2Upe1xuICAgIC8vICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSh0aGlzLm1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSksIDEpO1xuICAgIC8vICAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZShtZXNzYWdlLl9pZClcbiAgICAvLyB9XG59XG4iXX0=
