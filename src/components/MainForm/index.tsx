import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='Task'
          id='task-input'
          type='text'
          placeholder='Digite uma tarefa...'
        />
      </div>

      <div className='formRow'>
        <p>Vamos focar em uma tarefa?</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='yellow' />
      </div>
    </form>
  );
}
