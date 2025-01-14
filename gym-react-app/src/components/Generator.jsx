import SectionWrapper from './SectionWrapper';

function Header(props) {
    const {index, title, description} = props;

    return (
        <div>
            <div>

            </div>
        </div>
    )
}

function Generator() {
    return (
        <SectionWrapper header={'generate your workout'} title={['It\'s', 'Huge', 'o\'clock']}>
            
        </SectionWrapper>
    )
}

export default Generator;