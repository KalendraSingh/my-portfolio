import React, { useState } from 'react'
import Title from '../layouts/Title';
import Reactjs from './Reactjs';
import FullStack from './Fullstack';
import Dynamic from "./Dynamic"
import Static from "./Static"

const Project = () => {
    const [ReactData, setReactData] = useState(true);
    const [FullStackData, setFullStackData] = useState(false);
    const [HTML_CSSData, setHTML_CSSData] = useState(false);
    const [DynamicData, setDynamicData] = useState(false);
    return (
        <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                    <li
                        onClick={() =>
                            setReactData(true) &
                            setFullStackData(false) &
                            setHTML_CSSData(false) &
                            setDynamicData(false)
                        }
                        className={`${ReactData
                                ? "border-designColor rounded-lg"
                                : "border-transparent"
                            } resumeLi`}
                    >
                        React Js
                    </li>
                    <li
                        onClick={() =>
                            setReactData(false) &
                            setFullStackData(true) &
                            setHTML_CSSData(false) &
                            setDynamicData(false)
                        }
                        className={`${FullStackData ? "border-designColor rounded-lg" : "border-transparent"
                            } resumeLi`}
                    >
                        FullStack
                    </li>
                    <li
                        onClick={() =>
                            setReactData(false) &
                            setFullStackData(false) &
                            setHTML_CSSData(false) &
                            setDynamicData(true)
                        }
                        className={`${DynamicData
                                ? "border-designColor rounded-lg"
                                : "border-transparent"
                            } resumeLi`}
                    >
                        Dynamic
                    </li>
                    <li
                        onClick={() =>
                            setReactData(false) &
                            setFullStackData(false) &
                            setHTML_CSSData(true) &
                            setDynamicData(false)
                        }
                        className={`${HTML_CSSData
                                ? "border-designColor rounded-lg"
                                : "border-transparent"
                            } resumeLi`}
                    >
                        Static
                    </li>
                </ul>
            </div>
            {ReactData && <Reactjs />}
            {FullStackData && <FullStack />}
            {DynamicData && <Dynamic />}
            {HTML_CSSData && <Static />}


        </section>
    );
}

export default Project