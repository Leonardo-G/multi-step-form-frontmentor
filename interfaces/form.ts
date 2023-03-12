export interface IForm{
    name: string;
    email: string;
    phone: string;
    plan: IPlanOptions[];
    timePay: TimePayTypes;
    addOns: AddOnsTypes[];
}

export interface IFormOptional{
    name ?: string;
    email?: string;
    phone?: string;
    plan?: IPlanOptions[];
    timePay?: TimePayTypes;
    addOns?: AddOnsTypes[];
}

export interface IPlanOptions {
    name: PlanTypes;
    price: number;
    src?: string;
}

export type PlanTypes = "arcade" | "advanced" | "pro";
export type TimePayTypes = "monthly" | "yearly";
export type AddOnsTypes = "online-service" | "larger-storage" | "custom-profile";
