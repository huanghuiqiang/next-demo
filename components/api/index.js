const fetch = require("node-fetch");


export const getPersonList = async () => {
  const req = await fetch('https://worker-api.wanshifu.com/master/listinfo');
  const reqJSON = await req.json();

  let list;
  if (reqJSON && reqJSON.data && reqJSON.data.list) {
    list = reqJSON.data.list;
  } else {
    list = [];
  }
  return list;
}
