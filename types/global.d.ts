interface CaptionObject {
  id?: string;
  caption: string;
  startTime: number;
  endTime: number;
}

interface VideoObject {
  id?: string;
  title: string;
  videoUrl: string;
  currentTime: number;
  totalTime: number;
  currentCaption: string;
}
