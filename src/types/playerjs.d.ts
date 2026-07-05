export {};

declare global {
  interface Window {
    playerjs?: {
      Player: new (
        iframe: HTMLIFrameElement
      ) => {
        on: (event: string, callback: (data?: any) => void) => void;
        setCurrentTime: (seconds: number) => void;
      };
    };
  }
}