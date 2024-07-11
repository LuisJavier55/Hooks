


export const PockemonCard = ({id,name,sprites={}}) => {
  return (
    <section style={{height:200}}>
        <h2 className="text-capitalize">#{id} - {name}</h2>

{/* Imagenes */}
        <div>
          {
            sprites.map(spri => (
              <img key={spri} src={spri} alt={spri} />
            ))
          }
        </div>
    </section>
  )
}





