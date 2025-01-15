import { useState } from 'react';
import { SCHEMES, WORKOUTS } from '../utils/slowdier';
import SectionWrapper from './SectionWrapper';

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

function Generator() {

    const [showModel, setShowModel] = useState(false);
    const [poison, setPoison] = useState('individual');
    const [miscles, setMuscles] = useState([]);
    const [goals, setGoals] = useState('strendth_power');

    function handleToggleModel() {
        setShowModel(!showModel);
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
                            <button className='bg-slate-950 border border-blue-400 
                            py-3 rounded-lg duration-200 hover:border-blue-600' key={typeIndex}>
                                <p className='capitalize'>{type.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                </div>

                <Header 
                index='02' 
                title='Lock on targets' 
                description='Select the muscles judged for annihilation!' />
                <div className='bg-slate-950 border border-blue-400 rounded-lg flex flex-col'>
                    <button onClick={handleToggleModel} className='relative p-3 flex items-center justify-center'>
                        <p>
                            Select muscle groups
                        </p>
                    <i className="fa-solid fa-caret-down 
                    absolute right-3 top-1/2-translate-y-1/2 "></i>
                    </button>
                    {showModel && (
                        <div>Model</div>
                    )}
                </div>

                <Header 
                index='01' 
                title='Pick your poison' 
                description='Select the workout you wish to endure!' />
                <div className='grid grid-cols-3 gap-4'>
                    {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
                        return (
                            <button className='bg-slate-950 border border-blue-400 
                            py-3 rounded-lg duration-200 hover:border-blue-600' key={schemeIndex}>
                                <p className='capitalize'>{scheme.replaceAll('_', ' ')}</p>
                            </button>
                        )
                    })}
                </div>
        </SectionWrapper>
    )
}

export default Generator;