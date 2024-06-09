type CrosesProps = {
    croses: ItemCross[]
    children?: React.ReactNode
}

type ItemCross = {
    id: number,
    model: string
    size: string
};
export const SuperCrosses = ({croses,children}: CrosesProps) => {
    return (
        <div>
            <ul>
                {croses.map(el=>{
                    return(
                        <li key={el.id}>
                            <div>{el.model}</div>
                            <div>{el.model}</div>
                        </li>
                    )
                })}
            </ul>
            {children}
            <hr/>
        </div>
    );
};