
let allItems=  JSON.parse(localStorage.getItem('allitems'));
displayItems();

function addItem() {
  let todoItem= document.querySelector('#todo-item').value;
  let todoDate= document.querySelector('#todo-date').value;
  allItems.push({item:todoItem, date: todoDate});
  document.querySelector('#todo-item').value='';
  document.querySelector('#todo-date').value='';
  displayItems();
  localStorage.setItem('allitems', JSON.stringify(allItems));

}
function displayItems(){
  let containerElement=document.querySelector('.todoContainer');

  
  let newhtml='';
  for(let i=0;i<allItems.length;i++){
    let todo
   newhtml+= 
   `
   
   <span>${allItems[i].item}</span>
   <span>${allItems[i].date}</span>
   <button ID="delete-button"; onclick="allItems.splice(${i},1); displayItems();">delete</button>
   
   
   `;
  }
  containerElement.innerHTML=newhtml;


}


