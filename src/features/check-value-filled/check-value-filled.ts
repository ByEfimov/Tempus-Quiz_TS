export type ValuesFilled = string | number | Date;
export function checkAllValuesFilled<T extends Record<string, ValuesFilled>>(data: T): boolean {
    const isFormFilled = Object.values(data).every(value => !!value);
    return isFormFilled;
}