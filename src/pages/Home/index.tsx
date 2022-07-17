import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import zod, { date } from 'zod';

import { LayoutHome } from '../../layouts/LayoutHome';

const HomePlayImg = '../src/assets/images/play.svg';
import './styles.scss';

const newCyclerFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Infrom a Task'),
  minutesAmount: zod.number().min(5).max(60)
});

type newCyclerFormData = zod.infer<typeof newCyclerFormValidationSchema>;

type TypeCycles = {
  id: string;
  task: string;
  minutesAmount: number;
};

const HomePage: React.FC = () => {
  const [cycles, setCycles] = useState<TypeCycles[]>([]);
  const [activeCyclesId, setActiveCyclesId] = useState<string | null>(null);

  const { register, handleSubmit, watch, formState, reset } =
    useForm<newCyclerFormData>({
      resolver: zodResolver(newCyclerFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0
      }
    });

  const handleCreateNewCycle = (data: newCyclerFormData) => {
    const id = String(new Date().getTime());

    const newCycle: TypeCycles = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount
    };

    setCycles(state => [...state, newCycle]);
    setActiveCyclesId(id);

    console.log(cycles);

    reset();
  };

  const activeCycle = cycles.find(cycle => cycle.id === activeCyclesId);
  const inputTask = watch('task');
  const isSubmitDisabled = !inputTask;

  console.log(activeCycle);

  return (
    <LayoutHome>
      <div className='container bg-dark timer__container'>
        <form className='pt-5' onSubmit={handleSubmit(handleCreateNewCycle)}>
          <div className='row'>
            <div className='col-sm-12 col-md-7'>
              <div className='input-group mb-3'>
                <span className='input-group-text bg-transparent border-0'>
                  Vou trabalhar em
                </span>
                <input
                  type='text'
                  placeholder='Dê um nome para o seu projeto'
                  className='form-control'
                  list='task-suggestions'
                  id='task'
                  {...register('task')}
                />
                <datalist id='task-suggestions'>
                  <option value='Projeto 1' />
                  <option value='Projeto 2' />
                  <option value='Projeto 3' />
                  <option value='Projeto 4' />
                </datalist>
              </div>
            </div>
            <div className='col-sm-12 col-md-5'>
              <div className='input-group mb-3'>
                <span className='input-group-text bg-transparent border-0'>
                  durante
                </span>
                <input
                  type='text'
                  placeholder='00'
                  className='form-control'
                  id='minutesAmount'
                  {...register('minutesAmount', { valueAsNumber: true })}
                />
                <span className='input-group-text bg-transparent border-0'>
                  minutos.
                </span>
              </div>
            </div>
          </div>

          <div className='row g-3'>
            <div className='col-sm-6 col-md-2'>
              <span className='timer__number'>0</span>
            </div>
            <div className='col-sm-6 col-md-2'>
              <span className='timer__number'>0</span>
            </div>
            <div className='col-sm-12 col-md-4  '>
              <span className='timer__number timer__division'>:</span>
            </div>
            <div className='col-sm-6 col-md-2 '>
              <span className='timer__number'>0</span>
            </div>
            <div className='col-sm-6 col-md-2 '>
              <span className='timer__number'>0</span>
            </div>
          </div>

          <div className='row'>
            <div className='d-grid gap-2 py-5'>
              <button className='btn btn-primary' disabled={isSubmitDisabled}>
                <img src={HomePlayImg} alt='' /> começar
              </button>
            </div>
          </div>
        </form>
      </div>
    </LayoutHome>
  );
};

export default HomePage;
