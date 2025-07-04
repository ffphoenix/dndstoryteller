import React from 'react'

import Sidebar from '../components/UI/Sidebar'
import Header from '../components/UI/Header'
import Main from './Main'

export default () => <div
        className={`flex h-screen bg-gray-50 dark:bg-gray-900 overflow-hidden`}
    >
        <Sidebar/>

        <div className="flex flex-col flex-1 w-full">
            <Header/>
            <Main>
                test
            </Main>
        </div>
    </div>

