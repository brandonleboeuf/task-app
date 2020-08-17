import React from 'react';
import ReactDOM from 'react-dom';
import "@atlaskit/css-reset";
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initial-data';
import Column from './components/Column.jsx'

class App extends React.Component {
  state = initialData;

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId && 
      destination.index === source.index
    ) {
      return;
    }

    const column = this.state.columns[source.droppableId];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 1, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTaskIds
    }
  }

  render() {
    return (
    <DragDropContext onDragEnd={this.onDragEnd}>
      {this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId]
      const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);
  
      return <Column key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

