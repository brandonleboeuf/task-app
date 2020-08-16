const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: "Don't get crushed by Trump" },
    'task-2': { id: 'task-2', content: "Wair a mask" },
    'task-3': { id: 'task-3', content: "Don't get covid" },
    'task-4': { id: 'task-4', content: "File for unemployement" },
    'task-5': { id: 'task-5', content: "Learn React" },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TisTasks',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', "task-5"],
    },
  },
  // Facilitate reordering of columns
  columnOrder: ['column-1']
};

export default initialData;