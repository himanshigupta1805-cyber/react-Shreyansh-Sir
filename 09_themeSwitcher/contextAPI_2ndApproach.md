# Another approach of using ContextAPI

pereviously we use createContext() mathod and export krrhe the isko.
Similarly here too we will use same method but here we will pass values in the method.{Refer Code}
Toh these value shows ki jab humara context create ho toh usme wo values pehel se feed ho. 

This is similar to user and setUser method we passed as value to userContextProvider in previous case.

Aur one more thing We can export ThemeContextProvider from same file only. Fayda kuch nahi h bas alg alg style h programming ke.
Also people pass custom hooks here like one we did.

WHY?? => Because now we dont need to import two things repeatedly like useContext and UserContext(in login and profile)