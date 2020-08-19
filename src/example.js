
// results example object
const result = {
  draggableId: 'task-1',
  type: 'TYPE',
  reason: 'DROP',
  source: {
    droppableId: 'column-1',
    index: 0,
  },
  destination: {
    droppableId: 'colimn-1',
    index: 1,
  },
};

// snapshot example object
// Draggable
const draggableSnapshot = {
  isDragging: true,
  draggingOver: "column-1",
}
 
// Droppable
const droppableSnapshot = {
  isDraggingOver: true,
  draggingOverWith: 'task-1'
}

// example hooks

// onDragStart
const start = {
  draggableId: 'task-1',
  type: 'TYPE',
  source: {
    droppableID: 'column-1',
    index: 0,
  }
}

// onDragUpdate
const update = {
  ...start,
  destination: {
    droppableId: 'colun-1',
    index: 1,
  }
}

// onDragEnd
const result = {
  ...update,
  reason: 'DROP',
}