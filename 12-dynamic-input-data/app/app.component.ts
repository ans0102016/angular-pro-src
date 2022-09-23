import { AfterContentInit, Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <div #entry></div>
    </div>
  `
})
export class AppComponent  implements AfterContentInit{

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) {}

  ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(AuthFormComponent);
    const component = this.entry.createComponent(authFormFactory);
    component.instance.title = 'Create Account'
  }

  loginUser(user: User) {
    console.log('Login: ', user);
  }
}
