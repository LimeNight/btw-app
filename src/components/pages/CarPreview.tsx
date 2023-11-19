import CarCard from '../shared/CarCard';
import Skeleton from '../shared/Skeleton';
import { Car } from '../../models/Car';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import { useEffect } from 'react';
import carInstance from '../../apis/carInstance';
import { useParams } from 'react-router';
const CarPreview = () => {
  const params = useParams()
  const [car, error, loading, axiosFetch] = useAxiosFunction<Car>()

  useEffect(() => {
    console.log('fetch car' + params.id)
    axiosFetch({
      instance: carInstance,
      method: 'get',
      url: `/cars/${params.id}`,
    })
  }, [params.id])
  return (
    <>
      {
        car !== null ? 
          <CarCard
              _id={car?._id}
              brand={car?.brand}
              type={car?.type}
              plateNumber={car?.plateNumber}
              color={car?.color}
              category={car?.category}
              seats={car?.seats}
              releaseYear={car?.releaseYear}
              engine={car?.engine}
              fuel={car?.fuel}
              doors={car?.doors}
              description={car?.description}
              transmission={car?.transmission}
              lugSize={car?.lugSize}
              image={car?.image}
              rate={car?.rate}
              className={'text-center place-items-center car-preview rounded-none animate-bounce-once border-none h-[fill] min-h-fit'}
            />
        :
        <Skeleton children={<CarCard className='rounded-none border-none'/>}/>
      }
    </>
  )
}

export default CarPreview