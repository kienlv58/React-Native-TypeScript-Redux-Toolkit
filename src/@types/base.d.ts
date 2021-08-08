interface CallbackType {
    onBegan?: (data: unknown) => void;
    onSuccess?: (data: unknown) => void;
    onFail?: (data: unknown) => void;
    onFinish?: (data?: unknown) => void;
}
interface ItemType {
    id?: number | string;
    name: string | number;
}
