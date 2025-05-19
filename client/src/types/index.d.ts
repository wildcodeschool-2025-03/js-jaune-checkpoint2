export interface Accessory {
  id: number;
  name: string;
  slug: string;
  accessory?: string;
}

export type AccessoryArray = Accessory[];


export interface Cupcake {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
}

export type CupcakeArray = Cupcake[];
