interface Offer {
    dayFrom: number;
    dayTo: number;
    price: number;
}
export type Car = {
    _id?: string;
    brand?: string;
    type?: string;
    plateNumber?: string;
    color?: string;
    category?: string;
    seats?: number;
    releaseYear?: Date;
    engine?: string;
    fuel?: string;
    doors?: number;
    description?: string;
    transmission?: string;
    lugSize?: number;
    offer?: Offer;
    image?: string;
    rate?: number;
}

