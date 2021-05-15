import PageList from '../../components/main/list';
import { getPersonList } from '../../components/api';

const Jiaju = ({ list }) => (
  <PageList list={list} />
)

Jiaju.getInitialProps = async () => {

  const data = await getPersonList();

  return {
    list: data
  }
}

export default Jiaju;