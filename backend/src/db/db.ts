// React Icons
import { CiMedal, CiDeliveryTruck, CiWallet } from "react-icons/ci";
import { PiHandbagSimpleLight } from "react-icons/pi";

export const benefits = [
  {
    _id: "1",
    image: CiMedal,
    titleKey: "benefitsSection.onlineSupport",
    descriptionKey: "benefitsSection.onlineSupportDesc",
  },
  {
    _id: "2",
    image: CiDeliveryTruck,
    titleKey: "benefitsSection.freeShipping",
    descriptionKey: "benefitsSection.freeShippingDesc",
  },
  {
    _id: "3",
    image: CiWallet,
    titleKey: "benefitsSection.moneyReturn",
    descriptionKey: "benefitsSection.moneyReturnDesc",
  },
  {
    _id: "4",
    image: PiHandbagSimpleLight,
    titleKey: "benefitsSection.memberDiscount",
    descriptionKey: "benefitsSection.memberDiscountDesc",
  },
];