import PageList from '../../components/main/list';
import { getPersonList } from '../../components/api';

const Quanguo = ({ list }) => (
  <PageList list={list} />
)

Quanguo.getInitialProps = async () => {

  const data = await getPersonList();

  return {
    list: data
  }
}

export default Quanguo;