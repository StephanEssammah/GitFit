import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import PerformArticle from './subcomponents/PerformArticle';
const Perform = () => {
  const prograam = {
    squats: [
        {
          kg: 0,
          reps: 0,
        },
        {
          kg: 0,
          reps: 0,
        },
        {
          kg: 0,
          reps: 0,
        },
      ]
  }
  const [ state, setState ] = useState(prograam)
  
  const el = useRef();
  const navigate = useNavigate();
  const handleCancelClick = () => {
    alert('confirm cancel')
  }
  
  const handleFinishClick = () => {
    const currArr = [];

    const exercises = Array.from(el.current.childNodes)
    const allInputs = exercises.map(el => Array.from(el.querySelectorAll('[data-input-data]')));
    const session = exercises.map((exercise, index) => {
      const exerciseName = exercise.children[0].textContent
      
      const kgReps = allInputs[index].map(i => {
        return i.value
      })

      const kgs = [];
      for(let i = 0; i < kgReps.length; i += 2) {
        console.log('hi')
        kgs.push({kg: Number(kgReps[i]), reps: Number(kgReps[i + 1])});
      }
      const kgRepsArr = kgReps.map(i => {
        return {
          kg: i[0],
          reps: i[1]
        }
      })
      const object = {
        [exerciseName]: kgs
      }
      return object
    })

    console.log(session);
    
    


    //console.log(allInputs)

    const workoutSessionObject = {
      date: Date.now(),
      id: Date.now(),
      program: 'Legday',
      exercise: [
        {
          Squats: [ // perform__mid__title
            {
              kg: 5,
              reps: 12
            },
            {
              kg: 5,
              reps: 12
            },
            {
              kg: 5,
              reps: 12
            },
          ]
        }
      ]
    }

    
    

    

    // navigate('/summary')
  }


  
   
  const programs = [
    {
      id: 1,
      title: 'Legday',
      exercises: [
        {
          name: 'Squats',
          sets: 3,
        },
        {
          name: 'Leg press',
          sets: 4,
        },
        {
          name: 'Leg extensions',
          sets: 5,
        }
      ]
    },
    {
      id: 2,
      title: 'Chest',
      exercises: [
        {
          name: 'Benchpress',
          sets: 2
        },
        {
          name: 'Dumbbell press',
          sets: 24
        },
        {
          name: 'Shoulder press',
          sets: 2
        },
      ]
    },
    {
      id: 3,
      title: 'Hello',
      exercises: [
        {
          name: 'What',
          sets: 2
        },
        {
          name: 'aaa aaa aaa aaaa',
          sets: 3
        },
        {
          name: 'asdfkj eijrie hello stephan',
          sets: 4
        },
      ]
    },
  ]

  return (
    <div className="perform">
      <header className="perform__header">
        <div className="perform__header__top">
          <h1>Legday</h1>
          <button>Timer</button>
        </div>
        <p>46:29</p>
      </header>
      <div ref={el}>
        {programs[0].exercises.map((exercise, index) => <PerformArticle state={state} setState={setState}key={exercise.name} exercise={exercise} />)}
      </div>
      <div className="perform__buttons">
        <button onClick={handleCancelClick} className="btn btn--cancel">Cancel</button>
        <button onClick={handleFinishClick} className="btn btn--action">Finish</button>
      </div>
    </div>
  );
}

export default Perform;
