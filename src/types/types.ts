export type TodoType = {
  author: string;
  title: string;
  isComplete: boolean;
  id: string;
};

export type DeleteTodoType = {
  (id: string): void;
};
