export interface Task {
  id: number;
  title: string;
  description: string;
  done: boolean;
  date: Date;
  list: number;
}
export interface List {
  id: number;
  title: string;
  date: Date;
  isMain: boolean;
}


export function generateTasks(): Task[] {
  return [
    {
      id: 1,
      title: 'Watch Ozark Season 2',
      description: 'Watch Ozark Season 2',
      date: new Date(),
      done: false,
      list: 1
    },
    {
      id: 2,
      title: 'Use NgRx in my to-do app',
      description: 'Use NgRx in my to-do app',
      date: new Date(),
      done: false,
      list: 1
    }
  ];
}

export function generateLists(): List[] {
  return [{
    id: 1,
    title: 'main',
    date: new Date(),
    isMain: true
  }];
}
