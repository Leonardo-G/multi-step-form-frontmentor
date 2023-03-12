import { IAddOnsOptions, IPlanOptions } from "@/interfaces/form"

export const planMonthDB: IPlanOptions[] = [
    {
        name: "arcade",
        price: 9,
        src: "/assets/icon-arcade.svg"
    },
    {
        name: "advanced",
        price: 12,
        src: "/assets/icon-advanced.svg"
    },
    {
        name: "pro",
        price: 9,
        src: "/assets/icon-pro.svg"
    }
]

export const planYearlyDB: IPlanOptions[] = [
    {
        name: "arcade",
        price: 90,
        src: "/assets/icon-arcade.svg"
    },
    {
        name: "advanced",
        price: 120,
        src: "/assets/icon-advanced.svg"
    },
    {
        name: "pro",
        price: 150,
        src: "/assets/icon-pro.svg"
    }
]

export const addOnsMonthDB: IAddOnsOptions[] = [
    {
        name: "Online service",
        price: 1
    },
    {
        name: "Larger storage",
        price: 2
    },
    {
        name: "Customizable profile",
        price: 2
    }
]

export const addOnsYearlyDB: IAddOnsOptions[] = [
    {
        name: "Online service",
        price: 10
    },
    {
        name: "Larger storage",
        price: 20
    },
    {
        name: "Customizable profile",
        price: 20
    }
]