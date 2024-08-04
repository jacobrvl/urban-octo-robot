export type Product = {
    awardList: never[],
    categorySubTypeCode: string,
    categorySubTypeEngName: string,
    categorySubTypeName: string,
    chipOptions: never[],
    familyId: string,
    familyRecord: string,
    filterParamText: null | string,
    fmyEngName: string,
    fmyMarketingName: string,
    iaCtaDisplay: string,
    isRecommended: null | string,
    localBenefitList: never[],
    modelCount: string,
    modelList: Model[],
    oldProductYN: string,
    optionPriceUse: null | string,
    productGroupId: string,
    quickLooks: never[],
    simplePdYN: string,
    thirdPASeller: null | string,
    wtbDispFuncUseYN: null | string,
    wtbOnlineDispFuncUseYN: null | string,
    product?: Product
}
type Model = {
    modelCode: string;
    shopSKU: string;
    modelName: string;
    displayName: string;
    marketingpdpYN: string;
    thumbUrl: string;
    thumbUrlAlt: string;
    largeUrl: string;
    galleryImage: string[];
    galleryImageAlt: string[];
    galleryImageLarge: string[];
    pdpUrl: string;
    originPdpUrl: string;
    configuratorUrl: null | string;
    ratings: string;
    reviewCount: string;
    reviewUrl: string;
    energyLabelGrade: string;
    newEnergyLabel: string;
    energyLabelClass1: string;
    energyLabelClass2: null | string;
    energyFileUrl: string;
    ficheFileUrl: string;
    selected: string;
    fmyChipList: {
        fmyChipType: string;
        fmyChipCode: string;
        fmyChipName: string;
        fmyChipLocalName: string;
        multiColorYN: string;
        multiColorList: null;
    }[];
    ctaType: string;
    offerCtaFlag: string;
    tariffYN: string;
    wtbUseFlag: string;
    repairabilityIndex: null | string;
    repairabilityIndexPdfUrl: null | string;
    stockStatusText: string;
    financeInfoAmount: null | string;
    financeInfoValue: null | string;
    tradeIn: string;
    tradeInDesc: null | string;
    tradeInFormattedDesc: null | string;
    premiumCare: string;
    premiumCareDesc: null | string;
    premiumCareFormattedDesc: null | string;
    financing: string;
    financingDesc: null | string;
    financingFormattedDesc: null | string;
    upgrade: string;
    upgradeDesc: null | string;
    upgradeFormattedDesc: null | string;
    storePromotions: {
        promotionImgType: string;
        promotionText: string;
        promotionFormattedText: null | string;
    }[];
    usp: string[];
    leasingInfo: null | string;
    price: string;
    priceDisplay: string;
    promotionPrice: string;
    promotionPriceDisplay: string;
    tradeInPriceText: null | string;
    listPrice: null | string;
    listPriceDisplay: null | string;
    saveText: string;
    pricePeriodInfo: null | string;
    buyBackDesc: null | string;
    tradeInDiscount: null | string;
    tradeInPrice: null | string;
    msrpPrice: string;
    vatEligible: null | string;
    vatFreePrice: null | string;
    vatFreePriceDisplay: null | string;
    monthlyPriceInfo: null | string;
    topFlags: {
        iconTypeCd: string;
        iconTitle: string;
    };
    merchandisingText: null | string;
    keySummary: null | string;
    emiCalculatorUrl: null | string;
    pviTypeName: string;
    pviSubtypeName: string;
    deliveryYN: string;
    buyingConfigLinkType: null | string;
    buyingConfigLink: null | string;
    bespokeCtaUse: string;
    bespokeCtaLink: null | string;
    ctaLocalText: null | string;
    ctaEngText: null | string;
    configuratorUseYn: string;
    pf360IconUse: string;
    uspText: null | string;
    lowestWasPrice: string;
    lowestWasPriceDisplay: null | string;
    specCompareYN: string;
    isComingSoon: boolean;
    packageYN: string;
    pkgChildModelList: null;
    keySpec: null;
};