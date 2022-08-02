import { createContext } from 'react';

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
 

    return (
        <>
            <ContactContext.Provider value={{}}>
                {children}
            </ContactContext.Provider>
        </>
    )
}
export default ContactProvider;