import { h } from 'preact';

import * as style from './style.css';

const Slider = ({
    value = 0,
    onChange,
    label = "",
    min = 0,
    max = 1,
    step = 0.01
}: {
    value: number;
    onChange: (value: number) => void;
    label?: string;
    min: number;
    max: number;
    step: number;
}) => {
    const handleChange = (e: Event) => {
        e.preventDefault();

        const target = e.target as HTMLInputElement;
        onChange(Number(target.value));
    };

    return (
        <div class={style.root}>
            <label for={`${label}`} class={style.label}>
                {label}
            </label>
            <input
                id={`${label}`}
                class={style.range}
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onInput={handleChange}
            />
        </div>
    );
};

export default Slider;
