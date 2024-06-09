import React, {ButtonHTMLAttributes} from "react";
import s from './SuperButton.module.css'


// type Props = {
//     onClick: () => void
//     color: string
//
//     children?: React.ReactNode
//
// };

type ColorsProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    backgroundColor?: string
} & Omit<ColorsProps, 'color4' | 'color5'>


export const SuperButton: React.FC<Props> = (props: Props) => {

    const {
        className,
        onClick,
        color,
        disabled,
        children, ...restProps
    } = props;

    // const onClickHandler = () => {
    //     onClick();
    // }

    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    //  const finalClassName = `${s.button}
    // ${color == 'red' ? s.red :s.default}
    // ${disabled ? s.disabled : ''}`
    //

    const finalClassName = `
        ${s.button}
        ${color == 'red' ? s.red : color == 'secondary'
                         ? s.secondary : s.default}
        ${disabled ? s.disabled : ''}`

    return (
        <div>
            <button onClick={onClick} className={finalClassName}>
                {children}
            </button>
        </div>
    );
};