import React from 'react'

import { Btn } from '../../components/Btn'
import { HiMenuAlt1, SlLogout, FiSearch } from 'react-icons/all'
import { Labelcito } from '../../components/Labelcito'
import { ViewTodo } from './ViewTodo'
import { CreatedT } from '../../modules/application/CreatedT'

export const Application = () => {
	const [view, setView] = React.useState(false)
	const changeView = () => setView(!view)
	return (
		<div className='w-full h-full max-w-[700px] mx-auto bg-gray-900 flex flex-col items-start gap-6 md:gap-4 relative '>
			<header className='w-[80%] md:w-[75%] mx-auto flex justify-between items-center mt-4'>
				<Btn
					children={<HiMenuAlt1 />}
					styles='text-xl bg-slate-800 text-gray-300 border border-gray-400 p-2 rounded-full '
				/>
				<h1 className='text-white text-lg'>Hello alinarte</h1>
				<Btn
					children={<SlLogout />}
					styles='text-lg text-red-500 border border-gray-400 bg-slate-800 p-2 rounded-full '
				/>
			</header>
			<Labelcito
				stylesL='mx-auto w-[82%] md:w-[75%] bg-slate-800 px-4 flex flex-row-reverse items-center py-1 border border-gray-400 rounded-xl'
				styleS='text-white'
				type='text'
				stylesI=' w-full bg-transparent outline-none text-white'
				desc='Search todo here...'
				content={<FiSearch />}
			/>
			<ViewTodo changeView={changeView} />
			{view && <CreatedT changeView={changeView} />}
		</div>
	)
}
