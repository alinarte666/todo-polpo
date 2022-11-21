export default function Inputcito({
	type,
	desc,
	handleChange,
	styles = 'py-1 rounded-md bg-transparent border border-gray-400 pl-4 outline-none',
}) {
	return (
		<input
			type={type}
			className={styles}
			placeholder={desc}
			onChange={handleChange}
		/>
	)
}
