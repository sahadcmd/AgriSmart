export interface FarmItemProps {
  name: string;
  quantity: string | number;
  price: string | number;
  image: string;
  farmerName: string;
  uid: string;
  location?: string;
  type?: string;
}
