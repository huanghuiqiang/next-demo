

const PageList = ({ list }) => (
  <>

    {list.map((person, index) => {
      const { name, ironDir, serveTypeCN, starsAvg, workTimes, accountId } = person;
      return (
        <div className='w-card' key={accountId}>
          <a className="master-links">
            <span className='ant-avatar'>
              <img alt={name} src={ironDir} />
            </span>
            <span className="level-million" data-tr="Million">五万等级</span>
          </a>
          <div className='card-info'>
            <p>
              <a>{name}</a>
            </p>
            <table>
              <tbody>
                <tr>
                  <th className="table-cot">服务次数</th>
                  <th className="table-sco">综合评分</th>
                  <th className="table-per">好评率</th>
                  <th className="table-type ellipsis">服务类型：<span>{serveTypeCN} </span></th>
                </tr>
                <tr>
                  <td><span >{workTimes}</span>次</td>
                  <td><span >{starsAvg}</span>/5分</td>
                  <td><span >99.94%</span></td>
                  <td className="serve-area ellipsis">服务区域：<span className="color333">西安(新城区、莲湖区、未央区、雁塔区、长安区)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    })}
    <style jsx>{`
      .w-card {
        display: flex;
        word-break: break-all;
        padding: 30px 20px;
      }
      .master-links {
        display: block;
        position: relative;
      }
      .ant-avatar {
        width: 90px;
        height: 90px;
        line-height: 90px;
        font-size: 18px;
        border-radius: 0px;
        flex: 0 0 auto;
      }
      .level-million {
        position: absolute;
        top: 0;
        left: 0;
        font-size: 12px;
        background: #1A1A1A;
        line-heihgt: 20px;
        border-radius: 0 0 10px 0;
        padding: 0 6px;
        color: #F0E16C;
      }

      .card-info {
          display: inline-block;
          margin-left: 20px;
          position: relative;
          line-height: 26px;
        }
        .table-tye {
        display: block;
        width: 280px;
      }
      .table-sco,
      .table-cot
      {
        min-width: 100px;
      }
      .table-per {
        min-width: 240px;
      }
      .ellipsis {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
        max-width: 240px;
      }
      
    `}</style>
  </>
)

export default PageList;