export const Title = (props) => {
    return (
        <>
            <div className="text-center">
                <h1 className="text-white font-semibold text-3xl py-3 relative inline-block">
                    {props.title}
                    <span className="block w-16 h-1 bg-green-500 mx-auto mt-2 rounded"></span>
                </h1>
            </div>
        </>
    )
}