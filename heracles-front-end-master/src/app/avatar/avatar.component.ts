import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoElement!: ElementRef;

  ngAfterViewInit() {
    this.videoElement.nativeElement.src = 'http://localhost:8000/live/stream.m3u8';
    this.videoElement.nativeElement.play();
  }
}
