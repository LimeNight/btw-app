const Skeleton = ({ children }: {children : React.ReactNode}) => {
  return (
    <>
      <div id="skeleton" className='animate-pulse h-fit w-full'>
        {children}
      </div>
    </>
  )
}

export default Skeleton