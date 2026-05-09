import React from 'react'

const ProductView = () => {
    return (
        <section id='product-viewer'>
            <h2>Take a closer look</h2>
            <div className='controls'>
                <p className='info'>MacbookPro 16" in silver/ space black</p>
                <div className='flex-center gap-5 mt-5'>
                    <div className="color-control">
                        <div className='bg-neutral-300' />
                        <div className='bg-neutral-900' />
                    </div>
                    <div className='size-control'>
                        <div><p>14"</p></div>
                        <div><p>16"</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductView