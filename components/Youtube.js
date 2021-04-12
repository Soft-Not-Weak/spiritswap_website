
const Youtube = ({embed, className}) => (
	<div className="m-auto relative h-0" style={{paddingBottom: '56.25%'}}>
		<iframe
			width="2060"
			className="absolute top-0 left-0 w-full h-full rounded-4xl drop-shadow-md"
			height="1440"
			src={`https://www.youtube.com/embed/${embed}`}
			frameBorder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowFullScreen
			title="Embedded youtube"
		/>
	</div>
)

export default Youtube;