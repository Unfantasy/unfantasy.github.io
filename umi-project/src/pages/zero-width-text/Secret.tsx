import { Input, Button } from 'antd';
import { useState } from 'react';
import { binaryToText, zeroWidthToBinary } from './utils';
import styles from './style.less';

function ZeroWidthText() {
  const [text, setText] = useState('');

  const handleSecretText = (t: string) => {
    setText(binaryToText(zeroWidthToBinary(t)));
  };

  return (
    <div className={styles.container}>
      <h2>将复制的内容粘贴到这里</h2>
      <Input
        placeholder="将复制的内容粘贴到这里"
        // value={secretText}
        onChange={({ target: { value } }) => handleSecretText(value)}
      />

      <h2 style={{ marginTop: '2em' }}>藏起来的秘密</h2>
      <p>{text}</p>
    </div>
  );
}

export default ZeroWidthText;
