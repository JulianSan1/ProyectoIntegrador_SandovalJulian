import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.css']
})
export class HearderComponent implements OnInit {
  title = 'Mi lista de tareas';
  constructor() { }
  ngOnInit(): void {
  }

}
