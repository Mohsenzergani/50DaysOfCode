// 1 first get the elements
// 2 get lists
// 3 add_event_listener to items (drag event)
// 4 for loop for list container
// get elements
const lists = document.querySelectorAll(".list");
const listItems = document.querySelectorAll(".list-item");

let draggedItem = null;

// 2 get listsItem
for (let a = 0; a < listItems.length; a++) {
  const item = listItems[a];
  // add addEventListener for item
  item.addEventListener("dragstart", function () {
    draggedItem = item;
    // set timeout for to darg item to anther list
    setTimeout(function () {
      draggedItem.style.display = "none";
    }, 50);
    // add to ever item another addEventListener to end drag
    item.addEventListener('dragend', function(){
      setTimeout(function(){
        item.style.display= 'block';
        draggedItem = null;
      },50)
    })
  });

  // for loop for list container
  for(let b =0;b<lists.length;b++){
    const list = lists[b];
    
    list.addEventListener("dragover",function(e){
      e.preventDefault();
    })
    // this event for enter drag to another list
    list.addEventListener('dragenter',function(e){
      e.preventDefault();
      list.style.backgroundColor = "rgba(255,255,255,0.7)";
    })
    // this event to leave item to list 
    list.addEventListener('dragleave',function(e){
      list.style.backgroundColor = "rgba(88,65,83,0.5)"
    })
    // for drop item 
    list.addEventListener("drop",function(){
      list.append(draggedItem);
      list.style.backgroundColor = "rgba(88,65,83,0.5)"

    })
  }
}
