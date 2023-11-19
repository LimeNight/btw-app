import { Link } from 'react-router-dom'
import { Car } from '../../models/Car'
import Rating from './Rating'
import { useRef } from 'react';

interface CardProps extends Car {
    className?: string,
    linkAble?: boolean
}

const CarCard = ({ _id, brand, type, color, category, seats, releaseYear, engine, fuel, doors, description, transmission, lugSize, offer, image, rate, className, linkAble = false }: CardProps) => {
    const attrUlElement = useRef<HTMLUListElement>(null!)
    const attrDescElement = useRef<HTMLDivElement>(null!)
    const toggleAttributesList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.currentTarget.ariaExpanded === 'true' ? e.currentTarget.ariaExpanded = 'false' : e.currentTarget.ariaExpanded = 'true'
        attrUlElement.current.classList.toggle('hidden')
    }
    const toggleDescriptionList = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.currentTarget.ariaExpanded === 'true' ? e.currentTarget.ariaExpanded = 'false' : e.currentTarget.ariaExpanded = 'true'
        attrDescElement.current.classList.toggle('hidden')
    }

    return (
        <div className={`trasition duration-200 w-full bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 mx-auto ${className}`}>
            {
                linkAble ?
                    // linked image
                    <Link to={`${_id}`}>
                        <div style={{
                            height: 300,
                            width: '100%',
                            backgroundImage: image ? `url(${image})` : `url('https://static.vecteezy.com/system/resources/previews/023/642/229/original/bmw-m3-e92-wide-body-m-power-free-png.png')`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            backgroundBlendMode: 'overlay',
                            backgroundSize: 'contain',}}
                            >
                        </div>
                    </Link>
                    :
                    // not linked image
                    <div style={{
                        height: 300,
                        width: '100%',
                        backgroundImage: image ? `url(${image})` : `url('https://static.vecteezy.com/system/resources/previews/023/642/229/original/bmw-m3-e92-wide-body-m-power-free-png.png')`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundBlendMode: 'overlay',
                        backgroundSize: 'contain',}}
                    >
                    </div>
            }
            <Rating id={_id} rate={rate ? rate : 0} outOf={5} className='pl-6 md:pl-9 gap-2' />
            <div className="px-5 pb-5">
                <ul>
                    {/* brand */}
                    <li className={carAttributesListItemClass}>
                        <span>
                            Márka:
                        </span>
                        <span>
                            {brand}
                        </span>
                    </li>
                    {/* type */}
                    <li className={carAttributesListItemClass}>
                        <span>
                            Tipus:
                        </span>
                        <span>
                            {type}
                        </span>
                    </li>
                    {/* color */}
                    <li className={carAttributesListItemClass}>
                        <span>
                            Szín:
                        </span>
                        <span>
                            {color?.toUpperCase()}
                        </span>
                    </li>
                    {/* release year */}
                    <li className={carAttributesListItemClass}>
                        <span>
                            Évjárat:
                        </span>
                        <span>
                            {releaseYear?.toString().slice(0, 4)}
                        </span>
                    </li>
                    {/* transmission */}
                    <li className={carAttributesListItemClass}>
                        <span>
                            Váltó:
                        </span>
                        <span>
                            {transmission}
                        </span>
                    </li>
                    {/* seats */}
                    <li className={carAttributesListItemClass}>
                        <span>
                            Ülések:
                        </span>
                        <span>
                            {seats}
                        </span>
                    </li>
                    {/* more attributes*/}
                    <li className={carAttributesListItemClass}>
                        <h2
                            id="accordion-collapse-heading-1"
                            className='w-full'
                        >
                            <button
                                type="button"
                                className="flex w-full justify-between"
                                data-accordion-target="#accordion-collapse-body-1"
                                aria-expanded="false"
                                aria-controls="accordion-collapse-body-1"
                                onClick={toggleAttributesList}
                            >
                                <span>
                                    További jellemzők
                                </span>
                                <svg
                                    data-accordion-icon
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <ul
                            ref={attrUlElement}
                            id="accordion-collapse-body-1"
                            className="hidden p-1 m-0 w-full"
                            aria-labelledby="accordion-collapse-heading-1"
                        >
                            <li className={carAttributesListItemClass}>
                                <span>
                                    Csomagtartó(L):
                                </span>
                                <span>
                                    {lugSize}
                                </span>
                            </li>
                            <li className={carAttributesListItemClass}>
                                <span>
                                    Kategória:
                                </span>
                                <span>
                                    {category}
                                </span>
                            </li>
                            <li className={carAttributesListItemClass}>
                                <span>
                                    Hengerürtartalom(cmm):
                                </span>
                                <span>
                                    {engine}
                                </span>
                            </li>
                            <li className={carAttributesListItemClass}>
                                <span>
                                    Üzemanyag:
                                </span>
                                <span>
                                    {fuel}
                                </span>
                            </li>
                            <li className={carAttributesListItemClass}>
                                <span>
                                    Ajtók:
                                </span>
                                <span>
                                    {doors}
                                </span>
                            </li>
                        </ul>
                    </li>
                    {/* more description */}
                    <li className={carAttributesListItemClass}>
                        <h2
                            id="accordion-collapse-heading-2"
                            className='w-full'
                        >
                            <button
                                type="button"
                                className="flex w-full justify-between"
                                data-accordion-target="#accordion-collapse-body-2"
                                aria-expanded="false"
                                aria-controls="accordion-collapse-body-2"
                                onClick={toggleDescriptionList}
                            >
                                <span>
                                    További információk
                                </span>
                                <svg
                                    data-accordion-icon
                                    className="w-3 h-3 rotate-180 shrink-0"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 10 6"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5 5 1 1 5"
                                    />
                                </svg>
                            </button>
                        </h2>
                        <div
                            ref={attrDescElement}
                            id="accordion-collapse-body-2"
                            className="p-2 hidden text-sm w-full"
                            aria-labelledby="accordion-collapse-heading-2"
                        >
                            <span>
                                {description}
                            </span>
                        </div>
                    </li>
                    {/* offers */}
                    <li className={carAttributesListItemClass}>
                        <ul>
                            <li>{offer?.dayFrom}</li>
                            <li>{offer?.dayTo}</li>
                            <li>{offer?.price}</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

const carAttributesListItemClass = 'flex justify-between py-3 px-1 md:px-4 flex-wrap'

export default CarCard