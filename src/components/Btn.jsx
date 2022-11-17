export const Btn = ({ children, styles, action }) => {
	return (
		<button className={styles} onClick={action}>
			{children}
		</button>
	)
}
