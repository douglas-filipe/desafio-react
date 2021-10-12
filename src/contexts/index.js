import { MusicProvider } from "./music";

export const Providers = ({ children }) => {
    return (
        <MusicProvider>
            {children}
        </MusicProvider>
    )
}