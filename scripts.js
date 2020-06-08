$('document').ready(init);
		
    function init(){
        var itemArray = ['item1', 'item2','item3'];
        var itemArray3 = ['item4', 'item5'];
        var itemArray2 = ['item6', 'item7','item8'];
        var allItems = '#item1, #item2,#item3,#item4,#item5,#item6,#item7,#item8';
        
        setItemsOnDragStart(allItems);   
        createDraggableArea('#done1',itemArray);
        createDraggableArea('#done2',itemArray2);
        createDraggableArea('#done3', itemArray3);


        function createDraggableArea(areaid, items){
             // bind the dragover event on the board sections
            $(areaid).bind('dragover', function(event) {
                event.preventDefault();
            });
			// bind the drop event on the board sections
  			$(areaid).bind('drop', function(event) {
            var notecard = event.originalEvent.dataTransfer.getData("text/plain");
            window.sessionStorage.setItem(notecard,$('#'+notecard).text());
            
            for(var i = 0; i < items.length; i++){
               if(items[i] == notecard)
               event.target.appendChild(document.getElementById(notecard));
            }
			// Turn off the default behaviour
			// without this, FF will try and go to a URL with your id's name
            event.preventDefault();
			});
            }
        function setItemsOnDragStart(items) {
            
            $(items).bind('dragstart', function(event) {
                event.originalEvent.dataTransfer.setData("text/plain", event.target.getAttribute('id'));
        });
        }
        }