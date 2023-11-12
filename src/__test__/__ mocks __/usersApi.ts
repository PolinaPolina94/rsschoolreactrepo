import fetch from 'node-fetch';

// export const getPages = async () => {
//   let infoPage;
//   await fetch('https://rickandmortyapi.com/api/character')
//     .then((res) => res.json())
//     .then((info) => {
//       infoPage = info.count;
//     });
//   console.log(infoPage);
// };

export const getOp = () => {
  let i;
  fetch(`https://rickandmortyapi.com/api/character/1`)
    .then((res) => res.json())
    .then((result) => {
      i: result;
    });
  console.log(i);
};
