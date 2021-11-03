import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent implements OnInit {

  subVideos: String[] = ["", "", "", "", "", "", "", ""]

  constructor(
    private socket: Socket
  ) { }

  ngOnInit(): void {
    this.getImage()
      .subscribe(
        (res) => {
          console.log(res);
        }
      )
  }
  getImage(): Observable<any> {
    return Observable.create((observer: any) => {
      this.socket.on("", (message: any) => {
        observer.next(message);
      })
    })
  }

}
