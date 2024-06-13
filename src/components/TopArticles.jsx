

const TopArticles = (props) => {
  return (
    <div>
    <article>
        <img src={props.img} alt="Pregnancy" />
        <p>{props.paragraph}</p>
    </article>
    </div>
  )
}

export default TopArticles
