import { Input, Component } from '@angular/core';

@Component({
  selector: 'app-bradcam',
  templateUrl: './bradcam.component.html',
  styleUrls: ['./bradcam.component.css']
})
export class BradcamComponent {
  @Input()
  pageName!: string;
}
