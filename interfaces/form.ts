export interface IForm{
    name: string;
    email: string;
    phone: string;
    plan: PlanTypes[];
    timePay: TimePayTypes;
    addOns: AddOnsTypes[];
}

export interface IFormOptional{
    name ?: string;
    email?: string;
    phone?: string;
    plan?: PlanTypes[];
    timePay?: TimePayTypes;
    addOns?: AddOnsTypes[];
}

export type PlanTypes = "arcade" | "advanced" | "pro";
export type TimePayTypes = "monthly" | "yearly";
export type AddOnsTypes = "online-service" | "larger-storage" | "custom-profile";
