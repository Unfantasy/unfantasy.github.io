import { Link } from 'react-router-dom';
import styles from './index.less';

export default function IndexPage(props: any) {
  const { routes } = props;
  return (
    <div>
      <ul>
        {routes.map((route: any) => {
          return (
            <li>
              <Link to={route.path}>{route.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
