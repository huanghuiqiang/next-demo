import PageList from '../../components/main/list';
import { getPersonList } from '../../components/api';

const Dengju = ({ list }) => (
  <PageList list={list} />
)

Dengju.getInitialProps = async () => {

  const data = await getPersonList();

  return {
    list: data
  }
}

export default Dengju;