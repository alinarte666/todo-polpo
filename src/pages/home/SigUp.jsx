import { Formu } from '../../components/Formu'
import { Btn } from '../../components/Btn'
import { Labelcito } from '../../components/Labelcito'

import man from '../../assets/man.svg'
import { FiHexagon, BsTelephone } from 'react-icons/all'
import { Info } from '../../components/Info'

export const SigUp = ({ changeView }) => {
	return (
		<Formu
			styleD='h-4/6 md:h-auto w-[90%] mt-14 md:mt-0 flex justify-center items-center rounded-2xl bg-white max-w-[530px] relative '
			styleF='w-full h-full md:h-full bg-transparent flex flex-col justify-center items-center gap-6 relative md:pb-6'>
			<img
				src={man}
				className='w-[80%] h-[150px] md:h-[200px] object-cover overflow-hidden absolute -top-[105px] md:-top-24 drop-shadow-lg'
			/>
			<h1 className='text-4xl w-[80%] font-bold mt-6 md:mt-20'>Sign Up</h1>
			<Labelcito type='email' desc='alinarte@polpocr.com' content='@' />
			<Labelcito type='password' desc='Full Name' content={<FiHexagon />} />
			<Labelcito type='number' desc='Mobile' content={<BsTelephone />} />
			<Info
				styleP='w-[90%] md:w-[80%] text-sm md:text-normal'
				styleS='font-semibold'
				contentP="By signing up, you're agree to ours"
				contentS='Terms and Conditions'
			/>
			<Btn
				children='continue'
				styles='bg-black text-white w-[70%] rounded-lg py-1'
			/>
			
			<Info styleP='text-gray-500 flex gap-2' action={changeView} contentP='Joined us before?' contentS='Login'/>
		</Formu>
	)
}
