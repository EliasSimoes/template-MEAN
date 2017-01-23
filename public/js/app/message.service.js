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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBQzNDLDhCQUF3QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzFDLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUV0RCxRQUFPLFNBQVMsQ0FBQyxDQUFBO0FBSWpCO0lBRUksd0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUUsQ0FBQztJQUVqQyxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsR0FBRyxDQUN0QyxVQUFDLElBQWM7WUFDWCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDOUIsSUFBTSxRQUFRLEdBQWMsRUFBRSxDQUFDO1lBQy9CLElBQUksT0FBTyxDQUFDO1lBQ1osR0FBRyxDQUFDLENBQWdCLFVBQWMsRUFBZCxLQUFBLFNBQVMsQ0FBQyxJQUFJLEVBQWQsY0FBYyxFQUFkLElBQWMsQ0FBQztnQkFBOUIsSUFBSSxPQUFPLFNBQUE7Z0JBQ1IsT0FBTyxHQUFHLElBQUksdUJBQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUN0RSxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsb0NBQVcsR0FBWCxVQUFZLE9BQWdCO1FBQ3hCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUM7WUFDeEIsY0FBYyxFQUFFLGtCQUFrQjtTQUNyQyxDQUFDLENBQUM7UUFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUFFLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFFckYsQ0FBQztJQTNCTDtRQUFDLGlCQUFVLEVBQUU7O3NCQUFBO0lBaUNiLHFCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSxzQkFBYyxpQkErQjFCLENBQUEiLCJmaWxlIjoibWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2UubW9kZWxcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQgXCJyeGpzL1J4XCI7XG5cbkBJbmplY3RhYmxlKClcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNle1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKXt9XG5cbiAgICBnZXRNZXNzYWdlcygpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2VzJykubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhOiBSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbXNnQXJyYXk6IE1lc3NhZ2VbXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiBleHRyYWN0ZWQuZGF0YSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IG5ldyBNZXNzYWdlKGVsZW1lbnQuZ29zdGVpLGVsZW1lbnQubm9tZSxlbGVtZW50LmNvbWVudGFyaW8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZ0FycmF5LnB1c2gobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1zZ0FycmF5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJywgYm9keSwge2hlYWRlcnM6IGhlYWRlcnN9KTtcblxuICAgIH1cblxuICAgIC8vIGRlbGV0ZU1lc3NhZ2UobWVzc2FnZTogTWVzc2FnZSl7XG4gICAgLy8gICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKHRoaXMubWVzc2FnZXMuaW5kZXhPZihtZXNzYWdlKSwgMSk7XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKG1lc3NhZ2UuX2lkKVxuICAgIC8vIH1cbn1cbiJdfQ==
