import classes from './gridElements.module.css'

type GridElementsProps = {
    length: number,
    className: string
}
const GridElements = ({length, className}: GridElementsProps) => {
    const nums = [...Array(length).keys()]

    return (
        <div className={[classes.container, className].join(' ')}>
            {nums.map(num => <div key={num} className={classes.element}>
                {num+1}
            </div>)}
        </div>
    );
};

export default GridElements;