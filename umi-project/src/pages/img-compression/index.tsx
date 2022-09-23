import { Button, Input, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { storageFormat, uploadFile } from '@/utils';
import { useCallback, useState } from 'react';
import { IMG_TYPE } from '@/utils';
import styles from './style.less';

export default function HomePage() {
  const [fileObj, setFileObj] = useState<any>({});
  // 上传
  const beforeUpload = async (file: File) => {
    const res = await uploadFile(file);
    setFileObj(res);
    return false;
  };

  const renderFile = useCallback(
    (file: File, fileText?: string) => {
      if (file?.type === IMG_TYPE.SVG) {
        return (
          <Input.TextArea
            className={styles.svgTextArea}
            // autoSize
            value={fileText}
          />
        );
      } else {
        return <img className={styles.imgView} src={fileText} />;
      }
    },
    [fileObj],
  );

  return (
    <div>
      <Upload
        name="menuIcon"
        listType="picture-card"
        showUploadList={false}
        beforeUpload={beforeUpload}
        // onChange={handleimgChange}
      >
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Upload>
      {!!fileObj.file && (
        <div className={styles.detail}>
          <div className={styles.left}>
            原始文件：{storageFormat(fileObj.file?.size)}
            <br />
            {renderFile(fileObj.file, fileObj.fileText)}
          </div>
          <div className={styles.right}>
            压缩后文件：{storageFormat(fileObj.optFile?.size)}
            <br />
            {renderFile(fileObj.optFile, fileObj.optFileText)}
          </div>
        </div>
      )}
    </div>
  );
}
