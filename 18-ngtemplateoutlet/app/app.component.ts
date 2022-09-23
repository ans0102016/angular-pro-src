import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <ng-container 
        [ngTemplateOutlet]="tmpl">
      </ng-container>
      <template #tmpl>
        Ameet Swamy: Bangalore, India
      </template>
    </div>
  `
})
export class AppComponent {

}
