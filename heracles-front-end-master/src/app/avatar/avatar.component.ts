import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Hls from 'hls.js';

@Component({
  selector: 'avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements AfterViewInit {
  @ViewChild('videoPlayer') videoElement!: ElementRef;

  ngAfterViewInit() {
    const video: HTMLVideoElement = this.videoElement?.nativeElement;
    const videoSrc = 'http://localhost:8080/video/heracles.m3u8';

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
      });
    } else if (video?.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', () => {
        video.play();
      });
    }
  }
}
