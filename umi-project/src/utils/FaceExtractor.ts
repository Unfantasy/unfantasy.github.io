import faceapi from 'face-api.js';

export class FaceExtractor {
  constructor(path = MODEL_PATH, params = PARAMS) {
    this.path = path;
    this.params = params;
  }

  async load() {
    this.model = new faceapi.Mtcnn();
    await this.model.load(this.path);
  }

  async findAndExtractFaces(img) {
    // ...一些基本判空保证在加载好后使用
    const input = await faceapi.toNetInput(img, false, true);
    const results = await this.model.forward(input, this.params);
    const detections = results.map((r) => r.faceDetection);
    const faces = await faceapi.extractFaces(input.inputs[0], detections);
    return { detections, faces };
  }
}
