export const Info = ({
	styleP,
	action,
	contentP,
	contentS,
	styleS = 'font-bold cursor-pointer text-black',
}) => {
	return (
		<p className={styleP}>
			{contentP}
			<span className={styleS} onClick={action}>
				{contentS}
			</span>
		</p>
	)
}
