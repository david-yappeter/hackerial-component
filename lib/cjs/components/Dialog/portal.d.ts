/// <reference types="react" />
declare function ReactPortal({ children, wrapperId }: {
    children: React.ReactNode;
    wrapperId: string;
}): import("react").ReactPortal | null;
export default ReactPortal;
