const Card = ({title, description, price}) => {
    return (
       <section>
            <h2>{title}</h2>
            <p>{description}</p>
            <small>{price}</small>
       </section>
    )
}

export default Card