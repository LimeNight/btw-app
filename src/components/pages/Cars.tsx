import CarCollection from '../shared/CarCollection'
const Cars = () => {
    return (
        <>
            <h1 className={titleClass}>Kölcsönözhető autóink</h1>
            <CardContainer>
                <CarCollection />
            </CardContainer>
        </>
    )
}
const CardContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-6'>
            {children}
        </div>
    )
}

const titleClass = 'text-3xl font-bold w-full text-center py-10'

export default Cars