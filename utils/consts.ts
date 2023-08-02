const ROUTE = {
    CUSTOMER: '/customer',
    HOME: '/',
    DETAIL_PRODUCT: '/san-pham',
    PRODUCTS_BY_CATE: '/danh-muc',
    PAYMENT: '/thanh-toan',
}

export const ROUTER = {
    HOME: ROUTE.HOME,
    DETAIL_PRODUCT: ROUTE.DETAIL_PRODUCT,
    PRODUCTS_BY_CATE: ROUTE.PRODUCTS_BY_CATE,
    PAYMENT: {
        ORDER: `${ROUTE.PAYMENT}/dat-hang`,
        CART: `${ROUTE.PAYMENT}/gio-hang`,
    },
    CUSTOMER: {
        FORGOT_PASSWORD: `${ROUTE.CUSTOMER}/forgot-pass`,
        LOGIN: `${ROUTE.CUSTOMER}/login`,
        LOGIN_WITH_OTP: `${ROUTE.CUSTOMER}/login-otp`,
        REGISTER: `${ROUTE.CUSTOMER}/register`,
        SAN_PHAM_YEU_THICH: `${ROUTE.CUSTOMER}/management/san-pham-yeu-thich`,
        THONG_TIN_TAI_KHOAN: `${ROUTE.CUSTOMER}/management/info`
    }
}