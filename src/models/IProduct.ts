// описує один продукт з масиву який повертає dummyjson
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

// описує вкладені метадані продукту
export interface IMeta {
	createdAt: string;
	qrCode: string;
	barcode: string;
	updatedAt: string;
}

// описує відгук про продукт
export interface IReviews {
	date: string;
	reviewerName: string;
	reviewerEmail: string;
	rating: number;
	comment: string;
}

// описує розміри продукту
export interface IDimensions {
	depth: number;
	width: number;
	height: number;
}



