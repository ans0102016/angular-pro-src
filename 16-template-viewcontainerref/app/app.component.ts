import { AfterContentInit, Component, ComponentRef, ComponentFactoryResolver, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';

import { AuthFormComponent } from './auth-form/auth-form.component';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <div #entry></div>
      <template #tmpl>
        Ameet Swamy: Bangalore, India
      </template>
    </div>
  `
})
export class AppComponent  implements AfterContentInit{

  component: ComponentRef<AuthFormComponent>;

  @ViewChild('entry', { read: ViewContainerRef }) entry: ViewContainerRef;
  @ViewChild('tmpl') tmpl: TemplateRef<any>;

  ngAfterContentInit(): void {
    this.entry.createEmbeddedView(this.tmpl);
  }
}
