import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  subVideos: String[] = ["", "", "", "", "", "", "", ""]

  constructor() { }

  ngOnInit(): void {
  }

}
