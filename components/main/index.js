import Link from 'next/link';
import Router from 'next/router';


export default (children) => {
  return (
    <>
      <main>
        <div className='page-container'>
          <p className='filter-list-p'>
            <span className='filter-info'>服务类目:</span>
            <Link href='/views/quanguo' as='/quanguo'><a>不限</a></Link>
            <Link href='/views/jiaju' as='/jiaju'><a>家具</a></Link>
            <Link href='/views/dengju' as='/dengju'><a>灯具</a></Link>
          </p>
          {children}
        </div>
      </main>
      <style jsx>{`
      main {
        flex: auto;
        height: 1000px;
      }
      `}</style>
      <style jsx>{`
        .page-container {
          min-height: 1000px;
          max-width: 880px;
          margin: 0 auto;
          font-size: 16px;
        }
        .filter-list-p {
          display: inline-block;
          display: flex;
          justify-content: space-around;
        }
  
      `}</style>
    </>
  )
}