import { Link } from 'react-router-dom';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <p>
        1. <Link to="/zero-width-text">零宽字符</Link>
      </p>
    </div>
  );
}
