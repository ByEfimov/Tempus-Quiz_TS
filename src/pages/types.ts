export type RegisterName = 'designation' | 'specification' | 'enterQuiz';
export interface InputPlaceholder {
  placeholder: string;
  registerName: RegisterName;
  id: number;
}
