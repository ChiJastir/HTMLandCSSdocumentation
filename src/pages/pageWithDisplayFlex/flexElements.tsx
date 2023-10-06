import classes from './flexElements.module.css'

type FlexElementsProps = {
    length: number,
    className: string,
}

const FlexElements = ({length, className}: FlexElementsProps) => {
    const nums = [...Array(length).keys()]

    return (
        <div className={[classes.container, className].join(' ')}>
            {nums.map(num => <div key={num} className={classes.element}>
                {num+1}
            </div>)}
        </div>
    );
};

export default FlexElements;