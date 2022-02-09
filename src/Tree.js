const treeData = [
 {title:'xxx',key:'xxx',children:[]},
  //{title:'xxx',key:'xxx',children:[]},
  
];
// const make=(r)=>{
// r.keys().map((item)=>{ 
//   const _pos = item.substring(2,5) 
//   const head = treeData[0] 
  
//   if(!head.children.find(x=>x.key === head.key + "-" +_pos[0])){
//     head.children.push
//     (
//       {
//         title : _pos,
//         key : head.key+ "-" +_pos[0],
//         isLeaf : false,
//         children : []
//       }
//     )
//   }
 
//   head.children[head.children.length-1].children.push//.children[head.children[head.children.length-1].children.length-1].children[head.children[head.children.length-1].children[head.children[head.children.length-1].children.length-1].children.length-1].children.push(
//    ( {
//       title : item.substring(6,item.length),
//       key: head.key +item,
//       name : r(item),
//       isLeaf : true,
//     }
//   )
//   return 'maked'  
// })
// }

const makesub=(r,i)=>{
  r.keys().map((item)=>{
   //console.log(item)
    const _pos = item.substring(2,5)
    const head = treeData[i]
    if(!head.children.find(x=>x.key === head.key + "-" +_pos[0])){
      head.children.push
      (
        {
          title : _pos,
          key : head.key + "-" +_pos[0],
          isLeaf : false,
          children : []
        }
      )
    }
    if(!head.children.find(x=>x.key === head.key + "-" + _pos[0])
    .children.find(x=>x.key === head.key +"-" + _pos[0]+ "-" +_pos[1]))
    {
      if(_pos === "yyy"){
        head.children[head.children.length-1].children.push//.children[head.children[head.children.length-1].children.length-1].children[head.children[head.children.length-1].children[head.children[head.children.length-1].children.length-1].children.length-1].children.push(
        ( {
            title : item.substring(6,item.length),
            key: head.key +item,
            name : r(item),
            isLeaf : true,
          }
        )
      }
      else if(_pos === "zzz"){
        head.children[head.children.length-1].children.push(
          {
            title : item.substring(6,item.length),
            //key: head.key + '/' + _pos + item,
            //name : r(item).default,
            isLeaf : true,
          }
        ) 
        //console.log("name", r(item)) 
      }
    }
  })
  }
// let r = require.context('../landmark/index/0/0',true);
// makesub(r,0);
// r = null;
let r = require.context('../xxx',true);

makesub(r,0);

export default treeData