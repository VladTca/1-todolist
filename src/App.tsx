import React from 'react';
import './App.css';

import {SuperButton} from "./components/SuperButton";
import s from './components/SuperButton.module.css'
import {SuperCrosses} from "./components/SuperCrosses";
import {Modal} from "./components/modal/Modal";
import r from './components/modal/Modal.module.css'

const croses = [
    {id: 1, model: "ADIDAS", size: 'XXX'},
    {id: 2, model: "ABIBAS", size: 'YYY'},
    {id: 3, model: "PUMA", size: 'ZZZ'}
]

function App() {
    return (
        <div>
            {/*/!*<SuperButton onClick={() => {}} className={s.redForSuperButton}>RedButton</SuperButton>*!/*/}
            {/*/!*<SuperButton onClick={() => {}} className={s.blueForSuperButton}>BlueButton</SuperButton>*!/*/}

            {/*<SuperButton onClick={() => {*/}
            {/*}} color={'red'}>RED BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {*/}
            {/*}} color={'secondary'}>SECONDARY BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {*/}
            {/*}}>DEFAULT BUTTON</SuperButton>*/}
            {/*<SuperButton onClick={() => {*/}
            {/*}} disabled>DISABLED BUTTON</SuperButton>*/}

            {/*<SuperCrosses croses={croses}>*/}
            {/*    <SuperButton onClick={() => {*/}
            {/*    }} color={'red'}>RED BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {*/}
            {/*    }} color={'secondary'}>SECONDARY BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {*/}
            {/*    }}>DEFAULT BUTTON</SuperButton>*/}
            {/*    <SuperButton onClick={() => {*/}
            {/*    }} disabled>DISABLED BUTTON</SuperButton>*/}


            {/*</SuperCrosses>*/}
            {/*<SuperCrosses croses={croses}>*/}
            {/*    <div>*/}
            {/*        {'TEXT'.repeat(6)}*/}
            {/*    </div>*/}

            {/*</SuperCrosses>*/}
            {/*<SuperCrosses croses={croses}/>*/}

            {/*<Modal >*/}
            {/*    <div className={r.modal}>*/}
            {/*        <div className={r.modalContent}>*/}
            {/*            <input type="email" placeholder={'email'}/>*/}
            {/*            <input type="password" placeholder={'pass'}/>*/}
            {/*            <button>send</button>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Modal>*/}
            <Modal>
                <div className={r.modal}>
                    <div className={r.modalContent}>
                        <input type="email" placeholder={'email'}/>
                        <input type="password" placeholder={'pass'}/>
                        <input type="password" placeholder={'pass'}/>
                        <span><input type="checkbox" />I agree</span>
                        <button>send</button>
                    </div>
                </div>
            </Modal>


        </div>
    );
}


export default App;
