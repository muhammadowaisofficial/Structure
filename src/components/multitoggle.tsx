"use client"
import { Icons } from "@/lib/Icons"
import React from "react";

enum Sizes {
    l = 24,
    m = 16,
    s = 12
}

enum LabelPosition {
    top = 'top',
    right = 'right',
    bottom = 'bottom',
    left = 'left'
}

export interface StateConfigItem {
    label: string
    stepIcon: JSX.Element
    value: string
    background: string
    color: string
    isDefault: boolean
}

interface MultiToggleProps {
    statesConfig: StateConfigItem[]
    size?: Sizes
    showLabel?: boolean
    labelPosition?: LabelPosition
}

const HorizontalMultiToggle = ({ size = Sizes.l, statesConfig, showLabel = true, labelPosition = LabelPosition.bottom }: MultiToggleProps) => {
    const [toggleValue, setToggleValue] = React.useState(
        statesConfig.find(({ isDefault }) => isDefault)?.value ?? statesConfig[0].value
    );

    const getSelected = (value: string) => statesConfig.find(({ value }) => value === toggleValue);
    const selectedIndex = statesConfig.findIndex(({ value }) => value === toggleValue);
    return (<>
        <div className={'flex flex-col items-center justify-center'}>
            <div className={`relative box-content flex rounded-full bg-slate-200 p-1`} style={{
                height: `${size}px`, width: `${size * statesConfig.length}px`,
            }}>
                <div className={'absolute flex rounded-full shadow-md shadow-slate-600 transition-all duration-200 ease-in-out'} style={{
                    height: size,
                    width: size,
                    background: getSelected(toggleValue)?.background || '#000000',
                    color: getSelected(toggleValue)?.color || '#FFFFFF',
                    top: '4px',
                    left: `${4 + (size * selectedIndex)}px`,
                }}>{statesConfig[selectedIndex].stepIcon}</div>
                {
                    statesConfig.map((stateConfig: StateConfigItem, index) => {
                        const {
                            value,
                        } = stateConfig;
                        const stepId = `h-multi-input-${index}`;
                        return (<>
                            <label className={'flex-1 cursor-pointer'} htmlFor={stepId} onClick={() => setToggleValue(value)}/>
                            <input id={stepId} name={stepId} type={'hidden'} value={value}/>
                        </>
                        )
                    })
                }
            </div>
            <span className={'transition-all duration-200 ease-in-out'}>{
                statesConfig.find(({ value }) => value === toggleValue)?.label ?? ''
            }</span>
        </div>
    </>);
};

export default HorizontalMultiToggle;