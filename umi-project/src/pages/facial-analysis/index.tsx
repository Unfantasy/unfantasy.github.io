import { Button, Space } from 'antd';
import { useEffect, useRef, useState } from 'react';
import adapter from 'webrtc-adapter';
// import { FaceExtractor } from '../../utils/FaceExtractor';
import faceapi from 'face-api.js';
import styles from './style.less';

export default function FacialAnalysis() {
  const [stream, setStream] = useState(null);
  const video = useRef(null);
  const canvas = useRef(null);
  // const faceExtractor = useRef(new FaceExtractor());
  // useEffect(() => {
  //   faceExtractor.current.load();
  // }, []);
  const handleSuccess = async (stream: any) => {
    setStream(stream); // 获取视频流
    console.log(video, stream);
    if (video.current) {
      video.current.srcObject = stream; // 传给 video

      const detectionWithExpressions = await faceapi
        .detectSingleFace(video.current)
        .withFaceLandmarks()
        .withFaceExpressions();
      console.log('detectionWithExpressions: ', detectionWithExpressions);
    }
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
    // startMedia();
  }, []);

  const takeSnapshot = () => {
    if (canvas.current && video.current) {
      canvas.current
        .getContext('2d')
        .drawImage(
          video.current,
          0,
          0,
          canvas.current.width,
          canvas.current.height,
        );
    }
  };
  // TODO: 需要引用 adapter 勿删
  console.log('xxx', adapter.browserDetails.browser);

  return (
    <div>
      <video className={styles.video} ref={video} autoPlay playsInline>
        视频在这里
      </video>
      <Space>
        <Button onClick={startMedia}>开启摄像头</Button>
        <Button type="primary" onClick={takeSnapshot}>
          绘图
        </Button>
      </Space>
      <canvas className={styles.canvas} ref={canvas} />
    </div>
  );
}
