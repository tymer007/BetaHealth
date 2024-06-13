

const FeatureCards = (props) => {
  return (
    <div>
      <div className="feature">
            <img src={props.image} alt="Video Consultations" />
            <h3 className='heading'>{props.heading}</h3>
            <p className='writing'>{props.writing}</p>
            <p href="/consultations" className='feat-link'>{props.view}</p>
          </div>
    </div>
  )
}

export default FeatureCards;
