export default function TaskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK": {
      return [...state, action.payload];
    }
    case "EDIT_TASK": {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });
    }

    case "IS_FAVOURITE": {
      return state.map((task) => {
        if (task.id === action.payload) {
          return { ...task, isFavourite: !task.isFavourite };
        } else {
          return task;
        }
      });
    }
    case "DELETE_TASK": {
      return state.filter((task) => task.id !== action.payload);
    }
    case "DELETE_ALL_TASK": {
      state.length = 0;
      return [...state];
    }

    default:
      return state;
  }
}
