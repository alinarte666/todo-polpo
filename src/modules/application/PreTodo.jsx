export const PreTodo = ({ text, img, styles, styleI, stylesS }) => {
	return (
		<div className={styles}>
			<span className={stylesS}>{text}</span>
			<img src={img} className={styleI} />
		</div>
	)
}
