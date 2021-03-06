import { Component, OnInit } from '@angular/core';
import { MessageComponent } from './message.component';
import { Message } from './message';
import { MessageService } from './message.service';
import { ErrorService } from '../errors/error.service';

@Component({
    selector: 'message-list',
    template: `
        <section class="col-md-8 col-md-offset-2">
            <message
                *ngFor="let message of messagesData" 
                [message]="message" 
                (editClicked)="message.content = $event">
            </message>
        </section>
    `,
    directives: [MessageComponent]
})

export class MessageListComponent implements OnInit {
    messagesData:Message[];
    
    constructor(private _messageService: MessageService, private _errorService: ErrorService) {}

    ngOnInit() {
        this._messageService.getMessages()
            .subscribe(
                messages => {
                    this.messagesData = messages;
                    this._messageService.messages = messages;
                },
                error => this._errorService.handleError(error)
            );
    }
}