import CarCard from './CarCard';
import { Car } from '../../models/Car';
import { useEffect } from 'react';
import useAxiosFunction from '../../hooks/useAxiosFunction';
import carInstance from '../../apis/carInstance';
import { toastOption } from '../../constants/toastOption';
import { toast } from 'react-toastify';
import Skeleton from './Skeleton';
const CarCollection = () => {
  const [cars, error, loading, axiosFetch] = useAxiosFunction<Car[]>()

  useEffect(() => {
    axiosFetch({
      instance: carInstance,
      method: 'get',
      url: '/cars',
    })
  }, [])

  if (loading) {
    return <SkeletonCollection />
  }

  if (!loading && error) {
    toast.error(error.toString(), toastOption)
    return <SkeletonCollection />
  }

  return (
    <>
      {
        cars?.map((car) => {
          return <CarCard
            key={car._id}
            _id={car._id}
            brand={car.brand}
            type={car.type}
            plateNumber={car.plateNumber}
            color={car.color}
            category={car.category}
            seats={car.seats}
            releaseYear={car.releaseYear}
            engine={car.engine}
            fuel={car.fuel}
            doors={car.doors}
            description={car.description}
            transmission={car.transmission}
            lugSize={car.lugSize}
            offer={car.offer}
            image={car.image}
            rate={car.rate}
            linkAble={true}
          />
        })
      }
    </>
  )
}

const SkeletonCollection = () => {
  return (
    <>
      {
        [...Array(8).keys()].map((_, index) => {
          return (
            <Skeleton key={index}>
              <CarCard linkAble={false} />
            </Skeleton>)
        })
      }
    </>
  )
}

export default CarCollection