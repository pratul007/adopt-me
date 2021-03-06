import Pet from './Pet'

const Results = ({pets}) =>{
    return(
        <div className="search">
            {!pets.length ? (
                <h2>No Pets Found</h2>
            ) : (
                pets.map((pet) =>
                <Pet
                animal={pet.animal}
                name={pet.name}
                key= {pet.key}
                breed= {pet.breed}
                images= {pet.images}
                location={`${pet.city}, ${pet.state}`}
                id={pet.id}
                />
                )
            )}

        </div>
    )
}

export default Results