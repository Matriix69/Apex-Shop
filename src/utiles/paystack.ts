interface config {
    reference: string;
    email: string;
    amount: number;
    publicKey: string;
}

export const paystackConfig = (price: number): config => {
    const config = {
        reference: new Date().getTime().toString(),
        email: "user@example.com",
        amount: price * 100,
        publicKey: "pk_test_ab45f339f85dd2ca84e0a492846382e3b5df8425",
    };

    return config;
};

export const onSuccess = () => {
    window.alert("Payment successfull!");
};

export const onClose = () => {
    console.log("closed");
};
