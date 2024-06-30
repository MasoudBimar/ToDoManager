export interface ToDo {
  id: number;
  task: string;
  complete: boolean;
  category: string;
}
// export interface Category

export function generateToDos(): ToDo[] {
  return [
    {
      id: 1,
      task: 'Watch Ozark Season 2',
      complete: false,
      category: 'daily'
    },
    {
      id: 2,
      task: 'Use NgRx in my to-do app',
      complete: true,
      category: 'daily'
    }
  ];
}

export function generateCategories(): string[] {
  return ['daily', 'test'];
}