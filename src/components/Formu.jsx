export const Formu = ({ children, styleD, styleF }) => {
	return (
		<div className={styleD}>
			<form className={styleF}>{children}</form>
		</div>
	)
}
