import { Info } from '../../components/Info'
import { PreTodo } from '../../modules/application/PreTodo'

import health from '../../assets/health.svg'
import love from '../../assets/love.svg'
import exercise from '../../assets/exercise.svg'
import work from '../../assets/work.svg'

export const ViewTodo = ({ changeView }) => {
	return (
		<section className='w-[90%] md:w-[65%] text-black  mx-auto h-2/5 flex flex-col md:h-[35%]  justify-around md:gap-4'>
			<Info
				contentP='Create you todo'
				contentS='+ DO IT'
				styleP='flex justify-around items-center text-lg text-white md:text-2xl md:text-gray-200 '
				styleS='text-lg font-semibold cursor-pointer transition linear hover:scale-110 bg-blue-500 px-[8px] py-[3px] rounded-lg'
				action={changeView}
			/>
			<div className='w-ful grid grid-cols-3 gap-x-2'>
				<PreTodo
					styles='col-span-2 h-[85%] rounded-lg bg-red-400 relative overflow-hidden flex items-end text-black'
					styleI='absolute -top-8 -right-8 w-[180px]'
					stylesS='pl-1'
					text='Healtcare'
					img={health}
				/>
				<PreTodo
					styles='col-span-1 h-[85%] rounded-lg bg-lime-400 relative overflow-hidden text-black '
					styleI='w-[120px]  object-cover mt-3 ml-2'
					stylesS='pl-1 pt-2 absolute'
					text='Work'
					img={love}
				/>
				<PreTodo
					styles='col-span-1 rounded-lg bg-violet-400 relative overflow-hidden h-[85%]'
					styleI='w-[100px] absolute left-2 top-2 -z-15'
					stylesS='text-black pl-1 relative z-10'
					text='Exercise'
					img={exercise}
				/>
				<PreTodo
					styles='bg-cyan-400 col-span-2 rounded-lg h-[85%] relative flex justify-end'
					styleI='w-[120px] '
					stylesS='absolute left-1 bottom-1 text-black'
					text='Technology'
					img={work}
				/>
			</div>
		</section>
	)
}
