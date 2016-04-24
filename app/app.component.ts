import { Component } from 'angular2/core'

@Component({
    selector: 'mr-welcome',
    template: `
                <div>
                <h2> {{ welcomeMessage }} </h2>
                </div>
    `
})

export class AppComponent
{
    welcomeMessage: string = "Welcome to Movie Rating App.";
}