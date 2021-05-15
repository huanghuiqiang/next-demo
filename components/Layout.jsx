import Header from "./Header";
import Main from "./main";
import HeadSeo from "./common/HeadSeo";

const Layout = ({children}) => (
  <>
  <HeadSeo/>
  <div className='contain'>
    <Header/>
    <Main {...children}/>
  </div>
  <style jsx>{`
    .contain {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      padding-top: 60px;
      flex-direction: column;
    }
    main {
      flex: auto;
      height: 1000px;
      background-color: #108ee9;
    }  
  `}</style>
  </>
)

export default Layout;