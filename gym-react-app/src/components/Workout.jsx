import React from 'react'
import SectionWrapper from './SectionWrapper';
import ExerciseCard from './ExerciseCard';

function Workout(props) {
  const { workout } = props

  return (
    <SectionWrapper 
      header='Welcome to'
      title={['The', 'DANGER', 'zone']} >
        <div className='flex flex-col gap-4'>
          {workout.map((exercise, exerciseIndex) => {
            return (
              <ExerciseCard exercise={exercise} index={exerciseIndex} key={exerciseIndex}>

              </ExerciseCard>
            )
          })}
        </div>

    </SectionWrapper>
  )
}

export default Workout;