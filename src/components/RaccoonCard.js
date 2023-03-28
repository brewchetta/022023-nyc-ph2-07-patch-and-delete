function RaccoonCard({ raccoon }) {
    return (
        <div className="border-black">
            <h2>Name: {raccoon.name}</h2>
            <p>Favorite Food: {raccoon.favFood}</p>
        </div>
    )
}

export default RaccoonCard
