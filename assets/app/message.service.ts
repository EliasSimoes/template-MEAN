import { Injectable } from '@angular/core';
import { Message } from "./message.model";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import "rxjs/Rx";

@Injectable()

export class MessageService{

    constructor(private http: Http){}

    getMessages(): Observable<any> {
        return this.http.get('http://localhost:3000/messages').map(
                            (data: Response) => {
                                const extracted = data.json();
                                const msgArray: Message[] = [];
                                let message;
                                for (let element of extracted.data){
                                        message = new Message(element.gostei,element.nome,element.comentario);
                                        msgArray.push(message);
                                }
                                return msgArray;
                            });
    }

    saveMessage(message: Message): Observable<any> {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post('http://localhost:3000/message', body, {headers: headers});

    }

    // deleteMessage(message: Message){
    //     this.messages.splice(this.messages.indexOf(message), 1);
    //     return this.http.delete(message._id)
    // }
}
