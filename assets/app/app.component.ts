import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from './message.service';




@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    directive: [],
    providers: [MessageService]
})



export class AppComponent implements OnInit{
    messages: Message[] = [];
    nome: string;
    gostei: string;
    comentario: string;

    constructor(private messageService: MessageService){

    }

    ngOnInit(){
        this.messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.error(error)
            );


    }



    onAddMessage() {

        //const  rnd = Math.ceil(Math.random() * 100);

        if ($('#nao-gostei').is(':checked')){
            this.gostei = 'Não gostei';
        }else{
            this.gostei = 'Gostei';
        };

        this.nome = document.getElementById('nome').value;
        this.comentario = document.getElementById('comentario').value;
        const message = new Message(this.gostei, this.nome, this.comentario);
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                ()=> alert('Obrigado '+ this.nome +', seu comentário foi registrado.'),
                error => console.log(error)
            )

    }

    onSubmit(){

    }
    //
    // onClear(form: NgForm){
    //     this.nome = null;
    //     this.comentario = null;
    // }
}