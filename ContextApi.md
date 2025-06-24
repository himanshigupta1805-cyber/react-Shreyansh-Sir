# Why Context API
Suppose we want to add a Card component in our dashBoard and dashboard has leftside div and righside div and then rightside div again has top and bottom divs.
We want to add card on the top side of right div and we need to pass a title to the card.

```
<APP title="username /> => <DashBoard title="username" /> => <Rightside title="username" /> => <Top title="username" />
```
We see here that except top component parents just need to hold the title to pass on to child component. This is not a very optimized method.

>So If we create a global context and suppose we fetched data in APP but instead of storing it there we directly tranfer and store it into that global object and then whenever we need that data we can retrieve it from there. So this would be a better approach. For this we use Context API- (FOR PURE REACT!!!). But there are other libraries too like "REDUX" , "REDUX-TOOLKIT(RTK)" , "ZUSTAND".
This process is called prop drilling. dashboard etc are props and APP is component. Instead of passing data through each prop we store it in a global file and extract it from there.


## STEPS OF Setup CONTEXT API
1. Use React.createContect() method and store it in a variable.
2.  Export that variable.
3. Jab hum context banate h, uske saath ek provider bhi banata hota hai which gives us all the data.
It basically acts as a wrapper that holds all the components inside.Just like div.
4. Create userContectPRovider.jsx file.In that file import userContext and now here that wrapping will be done under userContext(refer to the code.)
5. UserContext akele se nahi hota h we need to use userContext.provider and also a value need to be passed as props mtlb basically data as a prop. Now again to save and set data we will use useState hook ofc. Similarly jo bhi data store krna h globally usko value prop mein pass krdo api variables props anything pass everything in value of userContext.Provider.

## Fetching values in userContext
useContext hook is used.
refer to code.
