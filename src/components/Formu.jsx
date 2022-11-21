export const Formu = ({ children, styleD, styleF, handleSubmit }) => {
	return (
		<div className={styleD}>
			<form className={styleF} onSubmit={handleSubmit}>
				{children}
			</form>
		</div>
	)
}
