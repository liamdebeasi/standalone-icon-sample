import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppIcon } from './icon/icon.component';
import { provideIcons } from './provide-icons';
import { alarmOutline } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [AppIcon],
  providers: [provideIcons({ alarmOutline })]
})
export class AppComponent {
  constructor() {}
}
