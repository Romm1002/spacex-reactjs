import ClipLoader from 'react-spinners/ClipLoader'

const Loader = () => {
    let color = 'ffffff'

    return (
        <>
            <div className='sweet-loading mx-auto w-25 text-center'>
                <ClipLoader
                    color={color}
                    size={150}
                    aria-label='Loading Spinner'
                    data-testid='loader'
                />
            </div>
        </>
    )
}

export default Loader
