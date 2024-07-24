import React from 'react'

function ErrorBoundary() {
    return (
        <section
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <p className='text-black'>Something went wrong</p>
        </section>
    )
}

export default ErrorBoundary