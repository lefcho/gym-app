import { useState } from 'react';
import { SCHEMES, WORKOUTS } from '../utils/swoldier';
import SectionWrapper from './SectionWrapper';
import Button from './Button';

function Header(props) {
    const {index, title, description} = props;

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center gap-2 justify-center'>
                <p className='text-3xl sm:text-4xl md:text-5xl 
                font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto text-center'>
                {description}</p>
        </div>
    )
}

function Generator(props) {
    const {muscles, setMuscles, poison, setPoison, goal, setGoal, updateWorkout} = props;

    const [showModel, setShowModel] = useState(false);

    function handleToggleModel() {
        setShowModel(!showModel);
    }

    function updateMuscles(muscleGroup) {
        if (muscles.includes(muscleGroup)) {
            setMuscles(muscles.filter(val => val !== muscleGroup));
            return;
        }

        if (muscles.length > 2) {
            return;
        }

        if (poison !== 'individual') {
            setMuscles([muscleGroup]);
            return;
        }

        setMuscles([...muscles, muscleGroup]);
    }

    return (
        <SectionWrapper header={'generate your workout'} title={['It\'s', 'Huge', 'o\'clock']}>
            <Header 
                index='01' 
                title='Pick your poison' 
                description='Select the workout you wish to endure!' />
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
                    {Object.keys(WORKOUTS).map((type, typeIndex) => {
                        return (
                            <button onClick={() => {
                                setPoison(type);
                                setMuscles([]);
                            }} 
                                className={
                                    'bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 ' + 
                                    (type === poison ? 'border-blue-600' : 'border-blue-400')
                                } 
                                key={typeIndex}
                            >
                                <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
                            </button>

                        )
                    })}
                </div>

                <Header 
                index='02' 
                title='Lock on targets' 
                description='Select the muscles judged for annihilation!' />
                <div className='bg-slate-950 border border-blue-400 rounded-lg flex flex-col duration-200'>
                    <button onClick={handleToggleModel} className='relative p-3 flex items-center justify-center border-b border-b-indigo-400 rounded-lg'>
                        <p className='capitalize '>{muscles.length === 0 ? 'Select muscle groups' : muscles.join(' | ')}</p>
                    <i className="fa-solid fa-caret-down 
                    absolute right-3 top-1/2-translate-y-1/2 "></i>
                    </button>
                    {showModel && (
                        <div className='flex flex-col'>
                            {(poison === 'individual' ? WORKOUTS[poison] : Object.keys(WORKOUTS[poison]))
                                .map((muscleGroup, muscleGroupIndex) => {
                                    return(
                                        <button onClick={() => updateMuscles(muscleGroup)} key={muscleGroupIndex}
                                        className={'hover:text-blue-500 duration-200 py-2 ' + 
                                        (muscles.includes(muscleGroup) ? 'text-blue-400' : '')}>
                                            <p className='capitalize'>{muscleGroup}</p>
                                        </button>
                                    )
                                })}
                        </div>
                    )}
                </div>

                <Header 
                index='03' 
                title='Become Juggernaut' 
                description='Select your ultimate objective!' />
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                        return (
                            <button onClick={() => {
                                setGoal(scheme);
                            }} 
                                className={
                                    'bg-slate-950 border py-3 rounded-lg duration-200 hover:border-blue-600 ' + 
                                    (scheme === goal ? 'border-blue-600' : 'border-blue-400')
                                } 
                                key={schemeIndex}
                            >
                                <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
                            </button>

                        )
                    })}
                </div>
            <Button func={updateWorkout}>
                Formulate
            </Button>
        </SectionWrapper>
    )
}

export default Generator;