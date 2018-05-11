import { getGuestCustomer } from '../customer/internal-customers.mock';
import { getPayment } from '../payment/payments.mock';

export function getOrderRequestBody() {
    return {
        customerMessage: '',
        useStoreCredit: false,
        payment: getPayment(),
    };
}

export function getIncompleteOrder() {
    return {
        orderId: null,
        token: null,
        payment: {},
        socialData: null,
        status: 'ORDER_STATUS_INCOMPLETE',
        customerCreated: false,
        hasDigitalItems: false,
        isDownloadable: false,
        isComplete: false,
        callbackUrl: null,
    };
}

export function getIncompleteOrderState() {
    return {
        data: getIncompleteOrder(),
        errors: {},
        meta: {},
        statuses: {},
    };
}

export function getCompleteOrder() {
    return {
        ...getIncompleteOrder(),
        id: 295,
        items: [
            {
                id: 103,
                type: 'ItemPhysicalEntity',
                name: 'Canvas Laundry Cart',
                imageUrl: '/images/canvas-laundry-cart.jpg',
                quantity: 1,
                amount: 200,
                discount: 0,
                amountAfterDiscount: 200,
                integerAmount: 20000,
                integerDiscount: 0,
                integerAmountAfterDiscount: 20000,
                variantId: 71,
                attributes: [
                    {
                        name: 'n',
                        value: 'v',
                    },
                ],
            },
            {
                id: 'bd391ead-8c58-4105-b00e-d75d233b429a',
                type: 'ItemGiftCertificateEntity',
                name: '$100 Gift Certificate',
                sender: {
                    name: 'pablo',
                    email: 'pa@blo.com',
                },
                recipient: {
                    name: 'luis',
                    email: 'lu@is.com',
                },
                imageUrl: '',
                quantity: 1,
                amount: 100,
                discount: 0,
                amountAfterDiscount: 100,
                attributes: [],
                integerAmount: 10000,
                integerDiscount: 0,
                integerAmountAfterDiscount: 10000,
            },
        ],
        currency: 'USD',
        subtotal: {
            amount: 200,
            integerAmount: 20000,
        },
        coupon: {
            discountedAmount: 10,
            coupons: [
                {
                    code: 'savebig2015',
                    discount: '20% off each item',
                    discountType: 'percentage_discount',
                },
                {
                    code: '279F507D817E3E7',
                    discount: '$5.00 off the shipping total',
                    discountType: 'shipping_discount',
                },
            ],
        },
        discount: {
            amount: 10,
            integerAmount: 1000,
        },
        discountNotifications: [],
        giftCertificate: {
            totalDiscountedAmount: 7,
            appliedGiftCertificates: [
                {
                    code: 'gc',
                    discountedAmount: 7,
                    remainingBalance: 3,
                    giftCertificate: {
                        code: 'gc',
                        balance: 10,
                        purchaseDate: 'ddmmyy',
                    },
                },
            ],
        },
        shipping: {
            amount: 15,
            integerAmount: 1500,
            amountBeforeDiscount: 20,
            integerAmountBeforeDiscount: 2000,
            required: true,
        },
        storeCredit: {
            amount: 0,
        },
        taxSubtotal: {
            amount: 0,
            integerAmount: 0,
        },
        taxes: [
            {
                name: 'Tax',
                amount: 0,
            },
        ],
        taxTotal: {
            amount: 0,
            integerAmount: 0,
        },
        handling: {
            amount: 8,
            integerAmount: 800,
        },
        grandTotal: {
            amount: 190,
            integerAmount: 19000,
        },
        orderId: 295,
        payment: {
            id: 'authorizenet',
            status: 'PAYMENT_STATUS_FINALIZE',
            helpText: '%%OrderID%% text %%OrderID%%',
            confirmationRedirectUrl: '',
        },
        isDownloadable: false,
        customerCanBeCreated: true,
        isComplete: true,
        socialData: {
            68: {
                fb: {
                    name: '[Sample] Sodling, black leather duffle bag',
                    description: 'How to write product descriptions that sellOne of the best things you can do to make your store successful is invest some time in writing great product descriptions. You want to provide detailed ye...',
                    image: 'https:\/\/cdn.bcapp.dev\/bcapp\/uvn6bltx\/products\/68\/images\/253\/HERO_mensstyle_034__54484.1348466546.190.285.jpg?c=1',
                    url: 'http:\/\/s1446156961.bcapp.dev\/sample-sodling-black-leather-duffle-bag\/',
                    shareText: "I just bought '[Sample] Sodling, black leather duffle bag' on s1446156961",
                    sharingLink: 'http:\/\/www.facebook.com\/sharer\/sharer.php?s=100&p[title]=I+just+bought+%27%5BSample%5D+Sodling%2C+black+leather+duffle+bag%27+on+s1446156961&p[summary]=How+to+write+product+descriptions+that+sellOne+of+the+best+things+you+can+do+to+make+your+store+successful+is+invest+some+time+in+writing+great+product+descriptions.+You+want+to+provide+detailed+ye...&p[url]=http%3A%2F%2Fs1446156961.bcapp.dev%2Fsample-sodling-black-leather-duffle-bag%2F&p[images][0]=http%3A%2F%2Fcdn.bcapp.dev%2Fbcapp%2Fuvn6bltx%2Fproducts%2F68%2Fimages%2F253%2FHERO_mensstyle_034__54484.1348466546.190.285.jpg%3Fc%3D1',
                },
                tw: {
                    name: '[Sample] Sodling, black leather duffle bag',
                    description: 'How to write product descriptions that sellOne of the best things you can do to make your store successful is invest some time in writing great product descriptions. You want to provide detailed ye...',
                    image: 'https:\/\/cdn.bcapp.dev\/bcapp\/uvn6bltx\/products\/68\/images\/253\/HERO_mensstyle_034__54484.1348466546.190.285.jpg?c=1',
                    url: 'http:\/\/s1446156961.bcapp.dev\/sample-sodling-black-leather-duffle-bag\/',
                    shareText: "I just bought '[Sample] Sodling, black leather duffle bag' on s1446156961",
                    sharingLink: 'https:\/\/twitter.com\/intent\/tweet?url=http%3A%2F%2Fs1446156961.bcapp.dev%2Fsample-sodling-black-leather-duffle-bag%2F&text=I+just+bought+%27%5BSample%5D+Sodling%2C+black+leather+duffle+bag%27+on+s1446156961',
                },
                gp: {
                    name: '[Sample] Sodling, black leather duffle bag',
                    description: 'How to write product descriptions that sellOne of the best things you can do to make your store successful is invest some time in writing great product descriptions. You want to provide detailed ye...',
                    image: 'https:\/\/cdn.bcapp.dev\/bcapp\/uvn6bltx\/products\/68\/images\/253\/HERO_mensstyle_034__54484.1348466546.190.285.jpg?c=1',
                    url: 'http:\/\/s1446156961.bcapp.dev\/sample-sodling-black-leather-duffle-bag\/',
                    shareText: '[Sample] Sodling, black leather duffle bag',
                    sharingLink: 'https:\/\/plus.google.com\/share?url=http:\/\/s1446156961.bcapp.dev\/sample-sodling-black-leather-duffle-bag\/',
                },
            },
        },
    };
}

export function getCompleteOrderResponseBody() {
    return {
        meta: {},
        data: {
            customer: getGuestCustomer(),
            order: getCompleteOrder(),
        },
    };
}

export function getCompleteOrderState() {
    return {
        meta: {},
        data: getCompleteOrder(),
        errors: {},
        statuses: {},
    };
}

export function getSubmitOrderResponseHeaders() {
    return {
        token: 'JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1MDcxODcxMzMsIm5iZiI6MTUwNzE4MzUzMywiaXNzIjoicGF5bWVudHMuYmlnY29tbWVyY2UuY29tIiwic3ViIjoiMTUwNDA5ODgyMSIsImp0aSI6IjNkOTA4ZDE5LTY4OTMtNGQzYi1iMWEwLWJjNWYzMjRhM2ZiZCIsImlhdCI6MTUwNzE4MzUzMywiZGF0YSI6eyJzdG9yZV9pZCI6IjE1MDQwOTg4MjEiLCJvcmRlcl9pZCI6IjExOSIsImFtb3VudCI6MjAwMDAsImN1cnJlbmN5IjoiVVNEIn19.FSfZpI98l3_p5rbQdlHNeCfKR5Dwwk8_fvPZvtb64-Q',
    };
}

export function getSubmitOrderResponseBody() {
    return {
        data: {
            customer: getGuestCustomer(),
            order: getSubmittedOrder(),
        },
        meta: {
            deviceFingerprint: 'a084205e-1b1f-487d-9087-e072d20747e5',
        },
    };
}

export function getSubmittedOrder() {
    const order = getCompleteOrder();

    return {
        ...order,
        payment: {
            ...order.payment,
            status: '',
        },
    };
}

export function getSubmittedOrderState() {
    return {
        meta: {
            ...getSubmitOrderResponseBody().meta,
            ...getSubmitOrderResponseHeaders(),
        },
        data: getSubmittedOrder(),
        errors: {},
        statuses: {},
    };
}
