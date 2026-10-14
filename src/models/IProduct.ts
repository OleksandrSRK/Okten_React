export interface IProducts {
	images: string[];
	thumbnail: string;
	minimumOrderQuantity: number;
	rating: number;
	returnPolicy: string;
	description: string;
	weight: number;
	warrantyInformation: string;
	title: string;
	tags: string[];
	discountPercentage: number;
	price: number;
	shippingInformation: string;
	id: number;
	availabilityStatus: string;
	category: string;
	stock: number;
	sku: string;
	brand: string;
    reviews: IReviews[];
    dimensions: IDimensions;
    meta: IMeta;
}

export interface IMeta {
	createdAt: string;
	qrCode: string;
	barcode: string;
	updatedAt: string;
}


export interface IReviews {
	date: string;
	reviewerName: string;
	reviewerEmail: string;
	rating: number;
	comment: string;
}


export interface IDimensions {
	depth: number;
	width: number;
	height: number;
}



