const Error = (error) => {
    console.log(error);
    return (
        <>
            <div className='App-error' role='alert'>
                <h1>The Service is currently unavailable...</h1>
            </div>
        </>
    )
}

export default Error
