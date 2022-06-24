interface CallbackType {
    onBegan?: (data: unknown) => void;
    onSuccess?: (data: unknown) => void;
    onFail?: (data: unknown) => void;
    onFinish?: (data?: unknown) => void;
}

declare module '*.png' {
    const value: any;
    export default value;
}
declare module '*.json' {
    const value: any;
    export default value;
}
