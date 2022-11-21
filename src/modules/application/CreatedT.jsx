import { Btn } from '../../components/Btn'
import { Formu } from '../../components/Formu'
import { Labelcito } from '../../components/Labelcito'

export const CreatedT = ({ changeView }) => {
	return (
		<Formu
			styleD='md:w-[60%] h-[240px] rounded-lg bg-white absolute top-[40%] left-[8.7%] md:top-[30%] md:left-[20%] z-20'
			styleF='w-full h-full flex flex-col justify-around items-center'>
			<Labelcito
				stylesL='w-[80%] flex flex-col'
				content='Title'
				type='text'
				stylesI='outline-none border-b border-gray-400'
			/>
			<Labelcito
				stylesL='w-[80%] flex flex-col'
				content='Description'
				type='text'
				stylesI='outline-none border-b border-gray-400'
			/>
			<div className='w-[90%] flex justify-around'>
				<Btn children='Create Task' styles='bg-violet-500 px-2 rounded-lg' />
				<Btn
					children='Cancel'
					styles='bg-red-500 px-2 rounded-lg'
					action={changeView}
				/>
			</div>
		</Formu>
	)
}
