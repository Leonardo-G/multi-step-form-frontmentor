export interface IForm{
    name: string;
    email: string;
    phone: string;
    plan: IPlanOptions[];
    timePay: TimePayTypes;
    addOns: IAddOnsOptions[];
}

export interface IFormOptional{
    name ?: string;
    email?: string;
    phone?: string;
    plan?: IPlanOptions[];
    timePay?: TimePayTypes;
    addOns?: IAddOnsOptions[];
}

export interface IPlanOptions {
    name: PlanTypes;
    price: number;
    src?: string;
}

export interface IAddOnsOptions {
    name: AddOnsTypes;
    price: number;
}

export type PlanTypes = "arcade" | "advanced" | "pro";
export type TimePayTypes = "monthly" | "yearly";
export type AddOnsTypes = "Online service" | "Larger storage" | "Customizable profile";
