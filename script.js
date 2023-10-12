const api = "https://raw.githubusercontent.com/sannlynnhtun-coding/Dream-Dictionary/main/DreamDictionary.json";
let list = document.getElementById("list");
let dlist = document.getElementById("dlist");
let listItem = list.getElementsByTagName("li");
const searchtext = document.getElementById('searchbox');
const search = document.getElementById('search');
const resultbox = document.getElementById('resultbox');
const del = document.getElementById('searcheddata');

async function jsonchanger(){
   let res = await fetch (api);
   let data = await res.json();

   // if (resultbox.firstElementChild.className == 'searchList') {
      
   //    // resultbox.removeChild(resultbox.firstElementChild);
   // };
  
   search.addEventListener('click', e => {
      if ( searchbox.value ) {
         if (resultbox.firstElementChild) {
            resultbox.removeChild(resultbox.firstElementChild);
         }
         let value  = searchbox.value;
         const ol = document.createElement('ol');
         ol.className = 'searchList';
         resultbox.appendChild(ol);
         for (let t = 0; t < data.BlogDetail[data.BlogDetail.length - 1].BlogDetailId; t++) {;
            if (data.BlogDetail[t].BlogContent.includes(value)) {
               let li2 = document.createElement('li');
               ol.appendChild(li2);
               let searchData = document.createTextNode(data.BlogDetail[t].BlogContent);
               li2.appendChild(searchData);
            }
         };
      }
   });
      

   //let i = 0; i < data.BlogDetail.length; i++
   for (let i in data.BlogDetail) {
      //Creating div>h2{heading form json data} and append
      let li = document.createElement('li');
      list.appendChild(li);
      let div = document.createElement('div');
      div.className = 'bht';
      let div1 = document.createElement('div');
      div1.className = 'bdc';
      
      let h2 = document.createElement('h2');
      let ht = document.createTextNode(data.BlogHeader[i].BlogTitle);
      h2.appendChild(ht);
      div.appendChild(h2);
      li.appendChild(div);

      const bht = Array.from(document.querySelectorAll(".bht"));
      bht.map((bhtnum) => {
         bhtnum.addEventListener('click', function(id) {
           if (id.target.innerText === data.BlogHeader[i].BlogTitle) {
            let idnum = data.BlogHeader[i].BlogId;
            for (let x = 0; x < data.BlogDetail.length; x++) {
              if ( data.BlogDetail[x].BlogId === idnum) {
               let li1 = document.createElement('li');
               let hd = document.createTextNode(data.BlogDetail[x].BlogContent);
               li1.appendChild(hd);
               div1.appendChild(li1);
               div.appendChild(div1);
              }
            }
           }
         })
      });
   };
}
jsonchanger();



   // if (data.BlogDetail[i].BlogContent.find(value)) {
   //       console.log(data.BlogDetail[i].BlogContent);
   // }
