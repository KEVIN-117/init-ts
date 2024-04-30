export class Generic<T>{
    private _data: T;
    constructor(data: T) {
        this._data = data;
    }
    public getData(): T {
        return this._data;
    }
    public setData(data: T): void {
        this._data = data;
    }
} 