declare const io : {
    connect(url: string): Socket;
};
interface Socket {
    on(event: string, callback: (data: any) => void );
    emit(event: string, data: any);
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
