export const Labelcito = ({
	type,
	desc,
	content,
	stylesL = 'w-[80%] relative flex items-center gap-4',
	stylesI = 'bg-transparent border-b-2 text-left text-black outline-none w-[90%]',
	stylesS = 'text-xl text-gray-500',
}) => {
	return (
		<label className={stylesL}>
			<span className={stylesS}>{content}</span>
			<input type={type} className={stylesI} placeholder={desc} />
		</label>
	)
}
