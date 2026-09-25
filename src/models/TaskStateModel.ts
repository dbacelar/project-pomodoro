import type { TaskModel } from './TaskModel';

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsRemaninig: number;
  formattedSecondsRemaning: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};
