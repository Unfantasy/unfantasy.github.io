import { useEffect, useState } from 'react';
import adapter from 'webrtc-adapter';
export default function FacialAnalysis() {
  const [stream, setStream] = useState(null);
  const [video, setVideo] = useState(null);
  const handleSuccess = (stream: any) => {
    setStream(stream); // 获取视频流

    // video.srcObject = stream; // 传给 video
  };

  const handleError = (error: any) => {
    console.log('navigator.getUserMedia error: ', error);
  };
  const startMedia = () => {
    const constraints = {
      audio: false,
      video: true,
    };

    navigator.mediaDevices
      .getUserMedia(constraints)
      .then(handleSuccess)
      .catch(handleError);
  };

  useEffect(() => {
    startMedia();
  }, []);

  console.log('xxx', adapter.browserDetails.browser);

  return <div>123</div>;
}
