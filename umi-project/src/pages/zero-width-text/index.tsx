import { Input, Button } from 'antd';
import { useState } from 'react';
import {
  binaryToText,
  binaryToZeroWidth,
  textToBinary,
  zeroWidthToBinary,
} from './utils';
import styles from './style.less';
// import { Link } from 'umi';

function ZeroWidthText() {
  // const [inputValue, setInputValue] = useState('');
  const [zeroWidthText, setZeroWidthText] = useState('');
  // const [secretText, setSecretText] = useState('');
  const [text, setText] = useState('');

  const handleChange = (t: string) => {
    const zwt = binaryToZeroWidth(textToBinary(t));
    console.log(zwt);
    setZeroWidthText(zwt);
  };

  const handleSecretText = (t: string) => {
    setText(binaryToText(zeroWidthToBinary(t)));
  };

  return (
    <div className={styles.container}>
      <h2>输入加密文本</h2>
      <Input
        placeholder="请输入你的姓名"
        // value={inputValue}
        onChange={({ target: { value } }) => handleChange(value)}
      />
      <h2>拷贝下面的文本</h2>
      <p>子曰：学而时习之，{zeroWidthText}不亦说乎</p>
      <h2>将复制的内容粘贴到这里</h2>
      <Input
        placeholder="将复制的内容粘贴到这里"
        // value={secretText}
        onChange={({ target: { value } }) => handleSecretText(value)}
      />
      <h2>加密文本</h2>
      <p>{text}</p>
    </div>
  );
}

export default ZeroWidthText;
